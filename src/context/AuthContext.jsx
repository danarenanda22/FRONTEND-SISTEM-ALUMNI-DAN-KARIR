import { createContext, useState } from "react";

export const AuthContext =
  createContext();

function AuthProvider({ children }) {

  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("user");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  // LOGIN

  const login = (email, password) => {

    // ADMIN

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {

      const adminUser = {
        name: "Administrator",
        role: "admin",
      };

      setUser(adminUser);

      localStorage.setItem(
        "user",
        JSON.stringify(adminUser)
      );

      return adminUser;
    }

    // ALUMNI

    if (
      email === "alumni@gmail.com" &&
      password === "alumni123"
    ) {

      const alumniUser = {
        name: "Budi Santoso",
        role: "alumni",
      };

      setUser(alumniUser);

      localStorage.setItem(
        "user",
        JSON.stringify(alumniUser)
      );

      return alumniUser;
    }

    return null;
  };

  // LOGOUT

  const logout = () => {

    setUser(null);

    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;