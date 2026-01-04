import { custAddwithOrderProps } from "@types";

export async function addCustomerAddress(filter: custAddwithOrderProps) {
 
  const { fname,lname,emails,telephones,streetAddress,postalCode,city,states,country,shippingAddress, area, customer_id} = filter;
 
  const postData = {
    customer_id:customer_id,
    first_name:fname,
    last_name:lname,
    email : emails,
    telephone:telephones,
    streetAddress:streetAddress,
    postalCode : postalCode,
    city:city,
    states:states,
    country:country,
    shippingAddress : shippingAddress,
    area : area
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
    `http://127.0.0.1:8000/api/addCustomerAddressWithOrder`, requestOptions
  );

  // Parse the response as JSON
  const result = await response.json(); 
  return result;

}