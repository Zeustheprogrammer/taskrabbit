import { createContext, useState } from "react";

const UserContext = createContext()

const UserProvider = ({childern})=> {
    const {isAuthenticated, setIsAuthenticated} = useState(fasle);
    return(
        <UserContext.Provider isAuthenticated = {isAuthenticated} setIsAuthenticated = {setIsAuthenticated}>    
            {childern}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserProvider
}