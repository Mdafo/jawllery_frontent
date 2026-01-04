import { MouseEventHandler } from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
  slug?: string;
  customer_id?: string;
}

export interface ReviewProps {
  product_id?: number;
  rating?: number;
  name?: string;
  title?: string;
  comment?: string;
}

export interface CustomerProps{
  first_name?: string;
  last_name?: string;
  email?: string;
  telephone?: string;
  password?: string;
  
}

export interface custAddwithOrderProps{
  fname?: string;
  lname?: string;
  emails?: string;
  telephones?: string;
  password?: string;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  states?: string;
  country?: string;
  shippingAddress?:string;
  orderNotes?:string;
  area?:string
  customer_id?:string
  
}

export interface otpProps{
  otp?: string;
  telephone?: string;  
}

export interface addressProps{
  address_id?: number;
}

export interface customerForgetPassProps{
  email?: string;
}
export interface customerForgetPassOTPProps{
  otp?: string;
  email?: string;
}

export interface customerResetForgetPassOTPProps{
  password?: string;
  confirmPassword?: string;
  email?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}
export interface custAddProps {
  custId: custAddProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
