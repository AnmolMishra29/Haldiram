import HalidramContext from "./HaldiramContext";
import React, { useState } from "react";
import axios from "axios";

const HaldiramState = (props) => {
    const [name, setName] = useState("Sumit")
    const [mall, setMall] = useState([])

    const getMall = async () => {
        const response = await axios.get('./departementdata.json')
        setMall(response.data);
    }

    return (
        <HalidramContext.Provider value={{ name, setName, getMall, mall }} >
            {props.children}
        </HalidramContext.Provider>
    )
}


export default HaldiramState;


