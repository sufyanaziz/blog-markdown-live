import React, { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = props => {
  const [blog, setBlog] = useState([]);
  const [loadingBlog, setLoadingBlog] = useState(false);

  const addNewBlog = data => {
    setBlog([...blog, data]);
    window.alert("Success add new blog");
  };

  return (
    <Context.Provider
      value={{
        blog: { all_blog: blog },
        addNewBlog,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

const ContextConsumer = Context.Consumer;

export { Context, ContextProvider, ContextConsumer };
