import { isEqual } from 'lodash';

export const updateData = (state, payload) => {
  if(isEqual(state.filters, payload.filters)) {
    return [...state.data, ...payload.data]
  }
  return payload.data
}

export const updatePages = (currentPage, pages = []) => {
  return [...pages.filter(page => page !== currentPage), currentPage]
}
