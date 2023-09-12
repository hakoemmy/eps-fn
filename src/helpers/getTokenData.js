import jwtDecode from "jwt-decode";
import store from "store";

export default function getTokenData() {
  try {
    const token = store.get("token");
    return jwtDecode(token);
  } catch (error) {
    return {};
  }
}
