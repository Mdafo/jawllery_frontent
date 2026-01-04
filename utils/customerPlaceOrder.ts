export async function customerPlaceOrder(data: any) {
    
    const headers: HeadersInit = {
      "api-key": "8ec35522e04c46f2b0b3d39e955df0ad",
      "content-type": "application/json",    
    };
  
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    };
 
   
    const response = await fetch(
      `http://127.0.0.1:8000/api/customerPlaceOrder`, requestOptions
    ) 
    
    const result = await response.json(); 
    return  result;
  }