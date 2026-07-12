import { createContext, useState } from "react";
import { loginApi, logoutApi } from "../api/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email, password) => {
    try {
      const response = await loginApi({
        email,
        password,
      });

      const user = {
        ...response.data.data,
        role: response.data.role,
      };

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);

      return user;
    } catch (error) {
      // BARIS INI DITAMBAHKAN UNTUK MENAMPILKAN ERROR ASLI DI CONSOLE BROWSER
      console.error("Detail Error Login:", error.response ? error.response.data : error.message);
      return null;
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
    } catch (error) {
      console.error("Error Logout:", error);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
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