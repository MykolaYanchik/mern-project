import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute";

import links from "./utils/links";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

function App() {
  const title = useSelector(({ common }) => common.title);
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        />
        <Route path={links.signIn} element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
