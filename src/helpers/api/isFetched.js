import store from "redux/store";
import { isEqual } from "lodash";

export const isFetched = (state, page, filters = {}) => {
  const { success, pages = [], filters: initialFilters } = state;
  return pages.find((pg) => pg === page) &&
    isEqual(initialFilters, filters) &&
    success;
};

export const istendersFetched = (page) => {
  const { tenders } = store.getState().load;
  return isFetched(tenders, page);
};

