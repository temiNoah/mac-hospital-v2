import React, { createContext, useContext, useState } from "react";


const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    username: null,
    email: null,
    picture: null,
    accessToken: null,
    isRegistered: false,
    userType: null,
    selectedService: null,
    isLoggedIn: false,
    authProvider: null
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider };