import { CarProps, FilterProps, ReviewProps,custAddwithOrderProps, CustomerProps,otpProps,customerForgetPassProps,customerForgetPassOTPProps,customerResetForgetPassOTPProps, addressProps } from "@types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": '549d64cbb3msh2d10323b1ff2dccp14dc1djsn0ce36443b177' || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ title: 'React POST Request Example' })
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    requestOptions
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}

export async function getBestseller(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  // Set the required headers for the API request
  const response = await fetch(
    `http://127.0.0.1:8000/api/getAllProduct`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json(); 

  return result.data;
}



export async function submitReview(filters: ReviewProps) {

  const { product_id, rating, name, title, comment } = filters;

  const postData = {
    rating : rating,
    name : name,
    title : title,
    comment : comment,
    product_id : product_id
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
    `http://127.0.0.1:8000/api/submitReview`, requestOptions
  );

  // Parse the response as JSON
  const result = await response.json(); 

  return result.data;
}

export async function getProductDetails(filters: FilterProps) {

  const { slug } = filters;

  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  const response = await fetch(
    `http://127.0.0.1:8000/api/getProductDetails/${slug}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json(); 

  return result.data;
}

export async function checkPincodeAvailability(filters: FilterProps) {

  const { slug } = filters;

  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  const response = await fetch(
    `http://127.0.0.1:8000/api/checkPincodeAvailability/${slug}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json(); 

  return result.data;
}

export async function getNewsMedia(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  // Set the required headers for the API request
  const response = await fetch(
    `http://127.0.0.1:8000/api/getNewsMedia`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  

  return result.data;
}
export async function getBanner(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  // Set the required headers for the API request
  const response = await fetch(
    `http://127.0.0.1:8000/api/getBanner`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  

  return result.data;
}
export async function getAbout(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  // Set the required headers for the API request
  const response = await fetch(
    `http://127.0.0.1:8000/api/getAbout`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  

  return result.data;
}
export async function getWhyNirvasa(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  // Set the required headers for the API request
  const response = await fetch(
    `http://127.0.0.1:8000/api/getWhyNirvasa`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  

  return result.data;
}
export async function getOurExpertise(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  // Set the required headers for the API request
  const response = await fetch(
    `http://127.0.0.1:8000/api/getOurExpertise`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  

  return result.data;
}
export async function getWhyYouChooseUs(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  // Set the required headers for the API request
  const response = await fetch(
    `http://127.0.0.1:8000/api/getWhyYouChooseUs`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  

  return result.data;
}
export async function getPeoppleRealStories(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  // Set the required headers for the API request
  const response = await fetch(
    `http://127.0.0.1:8000/api/getPeoppleRealStories`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  

  return result.data;
}
export async function getBrandWithProduct(filters: FilterProps) {

  const { slug } = filters;

  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  const response = await fetch(
    `http://127.0.0.1:8000/api/getBrandWithProduct/${slug}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json(); 

  return result.data;
}
export async function getBrandList(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad"
  };

  // Set the required headers for the API request
  const response = await fetch(
    `http://127.0.0.1:8000/api/getBrandList`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  return result.data;
}

export async function customerRegister(postData:any) {
  // const { first_name, last_name, email, telephone, password } = filter;
 
  // const postData = {
  //   first_name : first_name,
  //   last_name : last_name,
  //   email : email,
  //   telephone : telephone,
  //   password:password
  // }
 
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
    `http://127.0.0.1:8000/api/customerRegister`, requestOptions
  );

  // Parse the response as JSON
  const result = await response.json(); 
  return result;

}

export async function checkOTPverifiy(filterOtp: otpProps) {
  const { otp,telephone } = filterOtp;
 
  const postData = {
    otp : otp,
    telephone : telephone
    
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
    `http://127.0.0.1:8000/api/verifyOTP`, requestOptions
  );

  // Parse the response as JSON
  const result = await response.json(); 
  return result;
}

export async function customerForgetPassword(filterOtp: customerForgetPassProps) {
  const { email } = filterOtp;
 
  const postData = {
    email : email
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
    `http://127.0.0.1:8000/api/customerForgetPassword`, requestOptions
  );

  // Parse the response as JSON
  const result = await response.json(); 
  return result;

}
export async function customerForgPassOTPVerify(filterOtp: customerForgetPassOTPProps) {
  const { otp,email } = filterOtp;
 
  const postData = {
    otp:otp,
    email : email
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
    `http://127.0.0.1:8000/api/verifyOTPForCustForgetPassword`, requestOptions
  );

  // Parse the response as JSON
  const result = await response.json(); 
  return result;

}
export async function customerResetForgPassord(filterOtp: customerResetForgetPassOTPProps) {
  const { password,email,confirmPassword } = filterOtp;
 
  const postData = {
    password:password,
    email : email,
    confirm_password:confirmPassword
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
    `http://127.0.0.1:8000/api/createCustomerNewPassword`, requestOptions
  );

  // Parse the response as JSON
  const result = await response.json(); 
  return result;

}

export async function customerPlaceOrder(data: any) {
 
var cart = data;

 
  // Set the required headers for the API request
  const headers: HeadersInit = {
    "api-key": "8ec35522e04c46f2b0b3d39e955df0ad",
    "content-type": "application/json",    
  };

  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(cart)
  };



  // Set the required headers for the API request
 
  const response = await fetch(
    `http://127.0.0.1:8000/api/customerPlaceOrder`, requestOptions
  )

  // Parse the response as JSON
  const result = await response.json(); 

  return  result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 
