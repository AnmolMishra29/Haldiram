import HalidramContext from "./HaldiramContext";
import React, { useState, useEffect } from "react";
import axios from "axios";

const HaldiramState = (props) => {
  const port = "http://192.168.29.5:8089";

  const [name, setName] = useState("Sumit");
  const [mall, setMall] = useState([]);
  const [RegionName, setRegionName] = useState("");
  const [ShopName, setShopName] = useState("");

  // All API's State is Here

  const [Region, setRegion] = useState([]);
  const [store, setStore] = useState([]);
  const [counter, setCounter] = useState([]);
  const [device, setDevice] = useState([]);
  const [role, SetRole] = useState("");

  // const jj = {"ShopName": "", "DeviceType": "", "tempType": "", "Value": "" }

  const getMall = async () => {
    const response = await axios.get("./departementdata.json");
    setMall(response.data);
  };

  useEffect(() => {
    getMall();
    // getTemp();
    // console.log(mall);
    // getAllStores_withRegionId(1);
    // addRegion("money");
    // updateRegion(1,"rakesh")
  }, []);

  // Alert system

  const [alert, Setalert] = useState(null);

  const showalert = (type, message) => {
    Setalert({
      type: type,
      message: message,
    });

    setTimeout(() => {
      Setalert(null);
    }, 3000);
  };

  const colorchange = {
    HotMax: 75,
    HotMin: 65,
    ColdMax: 5,
    ColdMin: 1,
    CompMax: 33,
    CompMin: 18,
  };

  //  ************************* FOR Admin Controller ***********************************  //

  // save User

  const saveUser = async (user) => {
    try {
      const response = await fetch(`${port}/admin/addUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // get ALL the Role
  const getAllRole = async () => {
    try {
      const response = await fetch(`${port}/admin/getRoles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      return json;
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // delete User

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${port}/admin/deleteUser?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Update User

  const updateUser = async (user) => {
    try {
      const response = await fetch(`${port}/admin/updateUser`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  ************************* Counter-Controller API ***********************************  //

  // get ALL the Counter In Store

  const getAllCounterInStore = async (storeId) => {
    try {
      const response = await fetch(
        `${port}/counter/getAll?storeId=${storeId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  get Counter By Device Id

  const getCounterByDeviceId = async (deviceId) => {
    try {
      const response = await axios.get(
        `${port}/store/region?regionId=${deviceId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.data;

      setStore(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Get Counter By ID

  const getCounterById = async (counterId) => {
    try {
      const response = await fetch(`${port}/store/get?storeId=${counterId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Add Counter

  const addCounter = async (counter) => {
    try {
      const response = await fetch(`${port}/counter/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(counter),
      });

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Delete store

  const deleteCounter = async (counterId) => {
    try {
      const response = await fetch(
        `${port}/counter/delete?counterId=${counterId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(storeData)
        }
      );

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Update the store

  const updateCounter = async (counterData) => {
    try {
      const response = await fetch(`${port}/counter/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(counterData),
      });

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  ************************* Counter-set-point-Controller API ***********************************  //

  // Get Counter Set Point In Counter

  const getCounterSetPointInCounter = async (counterId) => {
    try {
      const response = await fetch(
        `${port}/counter-set-Point/counter?counterId=${counterId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Get Counter Set Point By Id

  const getCounterSetPointById = async (counterSetPointId) => {
    try {
      const response = await fetch(
        `${port}/counter-set-Point/get?counterSetPointId=${counterSetPointId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Save Counter Set Point

  const saveCounterSetPoint = async (counterSetPoint) => {
    try {
      const response = await fetch(
        `${port}/counter-set-Point/add
        `,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(counterSetPoint),
        }
      );

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Update Counter Set Point

  const updateCounterSetPoint = async (counterSetPoint) => {
    try {
      const response = await fetch(`${port}/counter/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(counterSetPoint),
      });

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  ************************* FOR Counter Time Controller API ***********************************  //

  const getAllCounterTimeInCounter = async (counterId) => {
    try {
      const response = await fetch(
        `${port}/counter-time/getAll?counterId=${counterId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  ************************* Device Controller API ***********************************  //

  // get ALL the Device

  const getAllDevice = async (storeId) => {
    try {
      const response = await fetch(`${port}/device`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Add Counter

  const addDevice = async (device) => {
    try {
      const response = await fetch(`${port}/device/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(device),
      });

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  get Device By Id

  const getDeviceById = async (deviceId) => {
    try {
      const response = await axios.get(
        `${port}/device/deviceId?deviceId=${deviceId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.data;

      setStore(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Get Counter By ID

  const getDeviceByCounter = async (counterId) => {
    try {
      const response = await fetch(
        `${port}/device/counterId?counterId=${counterId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Delete Device

  const deleteDevice = async (deviceId) => {
    try {
      const response = await fetch(
        `${port}/device/delete?deviceId=${deviceId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(storeData)
        }
      );

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Update the Device

  const updateDevice = async (device) => {
    try {
      const response = await fetch(`${port}/device/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(device),
      });

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  ************************* FOR DEVICE-TYPE-Controller API ***********************************  //

  // Get All Device Type

  const getAllDeviceType = async () => {
    try {
      const response = await fetch(`${port}/device-type/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // add Device type

  const addDeviceType = async (deviceType) => {
    try {
      const response = await fetch(`${port}/device-type/add`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deviceType),
      });
      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Get Device Type By Id

  const getDeviceTypeById = async (deviceTypeId) => {
    try {
      const response = await fetch(
        `${port}/device-type/get?deviceTypeId=${deviceTypeId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Update Device type

  const updateDeviceType = async (deviceType) => {
    try {
      const response = await fetch(`${port}/device-type/update`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(deviceType),
      });
      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  ************************* FOR REGION API ***********************************  //

  // get ALL the region
  const getAllRegion = async () => {
    try {
      const response = await fetch(`${port}/region/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      // console.log(json);
      // setRegion(json);
      return json;
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // get a single region

  const getRegion = async (id) => {
    try {
      const response = await fetch(`${port}/region/?regionId=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Add the Region

  const addRegion = async (regionName) => {
    try {
      const response = await fetch(`${port}/region/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ regionName: regionName }),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Delete the Region

  const deleteRegion = async (id) => {
    try {
      const response = await fetch(`${port}/region/delete?regionId=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Update the Region

  const updateRegion = async (id, regionName) => {
    try {
      const response = await fetch(`${port}/region/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          regionId: id,
          regionName: regionName,
        }),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  ************************* FOR STORE API ***********************************  //

  // get ALL the Store
  const getAllStore = async () => {
    try {
      const response = await fetch(`${port}/store/getAll`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      console.log(json);
      setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  get All the Store in Region

  const getAllStoreInRegion = async (Region_id) => {
    try {
      const response = await axios.get(
        `${port}/store/region?regionId=${Region_id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const json = await response.data;

      setStore(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // get store By ID

  const getStoreById = async (storeId) => {
    try {
      const response = await fetch(`${port}/store/get?storeId=${storeId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      console.log(json);
      // setRegion(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Add Store in Region

  const addStore = async (storeData) => {
    try {
      const response = await fetch(`${port}/store/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storeData),
      });

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Delete store

  const deleteStore = async (storeId) => {
    try {
      const response = await fetch(`${port}/store/delete?storeId=${storeId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(storeData)
      });

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  // Update the store

  const updateStore = async (storeData) => {
    try {
      const response = await fetch(`${port}/store/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storeData),
      });

      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  //  ************************* FOR TELEMETRY CONTROLLER API ***********************************  //

  const getAllTelemetryByCounter = async (counterId) => {
    try {
      const response = await fetch(
        `${port}/telemetry/counter?counterId=${counterId}`,
        {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();

      console.log(json);
    } catch (error) {
      console.log("Error Occured", error.message);
      console.log("Error Occured", error);
    }
  };

  return (
    <HalidramContext.Provider
      value={{
        name,
        setName,
        getMall,
        mall,
        ShopName,
        setShopName,
        RegionName,
        setRegionName,
        colorchange,
        getAllRegion,
        addStore,
        role,
        SetRole,
        Setalert,
        showalert,
        alert,
      }}
    >
      {props.children}
    </HalidramContext.Provider>
  );
};

export default HaldiramState;
