'use client'

import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { FaCopy } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const ScriptGenrate = ({userApi}) => {
    const [generatedScript, setGeneratedScript] = useState('');

    const generateScript = async () => {
      if(userApi){
        try {
            const scriptContent = `
                <script>
                    // Function to fetch data from API endpoint
                    function fetchData() {
                      fetch('${process.env.API_URL}/user/tree-record-api?api_key=${userApi}', {
                            method: 'GET',
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            document.getElementById('data-container').innerText =  JSON.stringify(data.data !== undefined ?data.data.tree_planted : 0);
                        })
                        .catch(error => {
                            console.error('There was a problem fetching the data:', error);
                        });
                    }
                    // Call the fetchData function to fetch data when the script is loaded
                    fetchData();
                </script>
            `;
            
            // Set the generated script content
            setGeneratedScript(scriptContent); 
        } catch (error) {
            console.error('Request failed:', error.message);
        }
      }
      };   

      const copyScript = () => {
        navigator.clipboard.writeText(generatedScript)
            .then(() => {
                toast.success('Script copied to clipboard!');
                setGeneratedScript('')
            })
            .catch((error) => {
                console.error('Failed to copy script:', error);
            });
    };



  return (
    <div className="flex items-center my-5 justify-center">
       {
        generatedScript !== "" ?  
        <div className="w-full  h-[600px] rounded-xl relative">
            <textarea name="" value={generatedScript} className="bg-dark text-white w-full h-full resize-none overflow-hidden" id="" readOnly></textarea> 
            <p className="absolute cursor-pointer  flex gap-2 text-sm top-5 right-5 text-[#ceb2b2]" onClick={() => copyScript()}>
                <FiCopy className="text-white" size={20} /> copy Code
            </p>

        </div>
      
        :
        <button onClick={() => generateScript()} className="px-8 py-4 bg-blue-800 text-white hover:bg-blue-900 rounded-md">Genrate Script</button>

       
       }
    </div>
  )
}

export default ScriptGenrate