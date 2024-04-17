import toast from "react-hot-toast";



export const generateApi = async () => {
    try {
      
      const apiUrl = process.env.API_URL;
      const response = await fetch(`${apiUrl}/user/api-key`, {
          method: 'PATCH',
          headers: {
              'Authorization': `Bearer ${accessToken}`
          }
      });

      if (response.ok) {
          const data = await response.json();
         toast.success(data.message)
         console.log(data)
       
        } else {
          // Handle error response
          console.log(response)
        }
      } catch (error) {
        console.error('Request failed:', error.message);
        
      }
    
};