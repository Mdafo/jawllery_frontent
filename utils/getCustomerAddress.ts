import { addressProps } from "@types";

export async function getCustomerAddress(filterAddress: addressProps) {
    const { address_id } = filterAddress;
   
    const postData = {
      address_id : address_id    
    }
   
    // Set the required headers for the API request
    const headers: HeadersInit = {
      "api-key": "8ec35522e04c46f2b0b3d39e955df0ad",
      "content-type": "application/json",    
    };
  
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(postData)
    };
    
    // Set the required headers for the API request
    const response = await fetch(
      `http://127.0.0.1:8000/api/getCustomerAddress`, requestOptions
    );
  
    // Parse the response as JSON
    const result = await response.json(); 
    return result.data;  
  }