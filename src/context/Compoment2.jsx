import React from "react";
import Context from "./Context";
import { useContext } from "react";
const Component2 = () =>{
    const Details = useContext(Context)
    return (
        <h1>C-2 Age = {Details.Age}</h1>
    )
}
export default Component2;