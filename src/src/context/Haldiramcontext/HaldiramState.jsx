import HalidramContext from "./HaldiramContext";
import React, { useState, useEffect } from "react";
import axios from "axios";

const HaldiramState = (props) => {

    const port = "http://192.168.29.5:8089"

    const [name, setName] = useState("Sumit")
    const [mall, setMall] = useState([])
    const [RegionName, setRegionName] = useState("")
    const [ShopName, setShopName] = useState("")


    // All API's State is Here 

    const [Region, setRegion] = useState([]);
    const [store, setStore] = useState([]);
    const [counter, setCounter] = useState([]);
    const [device, setDevice] = useState([]);



    // const jj = {"ShopName": "", "DeviceType": "", "tempType": "", "Value": "" }

    const getMall = async () => {
        const response = await axios.get('./departementdata.json')
        setMall(response.data);

    }



    useEffect(() => {
        getMall();
        // getTemp();
        // console.log(mall);
        // getAllStores_withRegionId(1);
        // addRegion("money");
        // updateRegion(1,"rakesh")
    }, [])


    const colorchange = {
        "HotMax": 75,
        "HotMin": 65,
        "ColdMax": 5,
        "ColdMin": 1,
        "CompMax": 33,
        "CompMin": 18
    }

    //  ********************* **** FOR REGION API ***********************************  // 


    // get ALL the region
    const getAllRegion = async () => {
        try {
            const response = await fetch(`${port}/region/all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await response.json();

            console.log(json);
            // setRegion(json);
            return json;

        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }
    }

    // get a single region

    const getRegion = async (id) => {
        try {
            const response = await fetch(`${port}/region/?regionId=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json();
            console.log(json);


        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }
    }

    // Add the Region  

    const addRegion = async (regionName) => {
        try {
            const response = await fetch(`${port}/region/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ regionName: regionName })

            })
            const json = await response.json();
            console.log(json);


        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }
    }

    // Delete the Region 

    const deleteRegion = async (id) => {
        try {
            const response = await fetch(`${port}/region/delete?regionId=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const json = await response.json();
            console.log(json);

        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }
    }

    // Update the Region 

    const updateRegion = async (id, regionName) => {
        try {
            const response = await fetch(`${port}/region/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "regionId": id,
                    "regionName": regionName
                })
            })
            const json = await response.json();
            console.log(json);

        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }
    }




    //  ********************* **** FOR STORE API ***********************************  // 


    // get ALL the Store
    const getAllStore = async () => {
        try {
            const response = await fetch(`${port}/store/getAll`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await response.json();

            console.log(json);
            setRegion(json);

        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }
    }

    //  get All the Store in Region

    const getAllStoreInRegion = async (Region_id) => {
        try {
            const response = await axios.get(`${port}/store/region?regionId=${Region_id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await response.data;

            setStore(json);

        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }
    }

    // get store By ID

    const getStoreById = async (storeId) => {
        try {
            const response = await fetch(`${port}/store/get?storeId=${storeId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await response.json();

            console.log(json);
            // setRegion(json);

        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }
    }

    // Add Store in Region

    const addStore = async (storeData) => {
        try {
            const response = await fetch(`${port}/store/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(storeData)
            })

            const json = await response.json();

            console.log(json);

        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }

    }

    // Delete store 

    const deleteStore = async (storeId) => {
        try {
            const response = await fetch(`${port}/store/delete?storeId=${storeId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify(storeData)
            })

            const json = await response.json();

            console.log(json);

        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }

    }

    // Update the region

    const updateStore = async (storeData) => {
        try {
            const response = await fetch(`${port}/store/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(storeData)
            })

            const json = await response.json();

            console.log(json);

        } catch (error) {
            console.log("Error Occured", error.message);
            console.log("Error Occured", error);
        }

    }













    return (
        <HalidramContext.Provider value={{ name, setName, getMall, mall, ShopName, setShopName, RegionName, setRegionName, colorchange, getAllRegion,addStore }} >
            {props.children}
        </HalidramContext.Provider>
    )
}


export default HaldiramState;


