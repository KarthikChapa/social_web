import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Pawan Kalyan",
      profilePic:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/pawan-kalyan-1688459123-sixteen_nine.jpg?VersionId=09HbyhBvSwXACz9JLufghdhEjWBsqbTB&size=690:388",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
