import React from "react"

export const Button:React.FC<{
    label:string
}>=({label})=>{
    return(
        <button className="bg-gray-300 w-24 border-solid border-2 border-indigo-600 rounded-lg ... border-x-4 border-indigo-500 ...">{label}</button>
    )
};
export const Button2nd:React.FC<{
    label:string
}>=({label})=>{
    return(
        <button className=" transition duration-150 ease-out hover:ease-in w-24 border-solid border-2 border-indigo-600 rounded-lg ... border-x-4 border-indigo-500 ...">{label}</button>
    )
};

export default Button;

