import React from "react";
import Context from "./Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Component1 = () =>{

    const Details = useContext(Context)
    const navigation = useNavigate();
    console.log(Details)
    const Fun = () =>{
        navigation('/c2')
    }
    return (
        <>
        <h1>C-1 Age = {Details.Age}</h1>
        <button onClick={() => Details.setAge(Details.Age+1)}>Click</button>

        <button onClick={Fun}>Change to C2</button>
        </>
    )
}
export default Component1;