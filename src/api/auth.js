import API from "./axios";

export const loginApi = (data) => {
  return API.post("/login", data);
};

export const logoutApi = () => {
  const token = localStorage.getItem("token");

  return API.post(
    "/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};