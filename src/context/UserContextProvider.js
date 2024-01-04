import React ,{useState} from "react";
import UserContext from "./UserContext";

const UserContextProvider =({children})=>{
    const [darkMode, setDarkMode] = useState(false);
    return(
     <UserContext.Provider value={{darkMode,setDarkMode}}>
        {children}
     </UserContext.Provider>
    )
}
export default UserContextProvider