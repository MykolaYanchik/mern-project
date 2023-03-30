import React from "react";
import links from "../../utils/links";

const Dashboard = React.lazy(() => import("../../pages/Dashboard/Dashboard"));

const routes = [
  {
    path: links.dashboard,
    component: Dashboard,
    title: "Головна",
  },
];

export default routes;
