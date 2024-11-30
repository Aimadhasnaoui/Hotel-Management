import { createContext } from "react";
import { useState } from "react";
export const storeApi = createContext()

export  function ContexApi({children}) {
  const [open, setOpen] = useState(false);
  // const [openUpdate, closeUpdate] = useState(true);
  const [openform, closeform] = useState(false);
  const [dataCabins,setdataCabins] = useState([]);
  const handleOpen = () => {
    setOpen(true);
  };
    return (
        <storeApi.Provider value={{open,setOpen,handleOpen,openform, closeform,dataCabins,setdataCabins}}>
            {children}
        </storeApi.Provider>
    )
}
