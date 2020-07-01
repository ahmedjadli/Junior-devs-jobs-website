import React, { useState } from "react";
import HeaderCpt from "./components/header";
import { Layout } from "antd";
import Main from "./containers/main";

const App = () => {
  const [theme, settheme] = useState("light");
  return (
    <Layout>
      <HeaderCpt theme={theme} />
      <Main />
    </Layout>
  );
};

export default App;
