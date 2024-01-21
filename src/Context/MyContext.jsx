import { createContext, useState, useEffect } from "react";
import Get from "../Services/Get";

export const MyContext = createContext();

export function ComponentContext({children}){
    const [appData, setAppData] = useState(false)
    const value={appData, setAppData}

    useEffect(() => {
        getDataServer()
    }, [])

    async function getDataServer(){
        const dataServer = await Get.getAppData()
        setAppData(dataServer)
    }

    if(!appData){
        return <div className="loader" ><h3>Loading...</h3></div>
    }

    return (
    <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>
)
}