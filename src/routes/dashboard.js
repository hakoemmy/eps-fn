import Dashboard from "components/dashboard";
import { roleAccess } from "../constants";
import { subscriptionNames } from "../constants";

const { LOADING_AND_OFFLOADING } = subscriptionNames;

const dashboard = {
  name: "dashboard",
  protected: true,
  path: "/",
  component: Dashboard,
  access: roleAccess.ALL_LEVELS
};

export default dashboard;
