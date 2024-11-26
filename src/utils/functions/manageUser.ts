import { useState } from "react";

// const [user,setUser]=useState({})
const [user, setUser] = useState({});

export const setNewUser = (newUser: any) => {
  setUser(newUser);
};

export const getNewUser = () => {
  return user;
};
