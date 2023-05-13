import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = (props) => {
  const [List, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <Context.Provider value={[List, setList, loading, setLoading]}>
      {" "}
      {props.org}{" "}
    </Context.Provider>
  );
};
