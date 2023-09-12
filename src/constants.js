export const baseURL = process.env.REACT_APP_BACKEND_URL;
export const token = localStorage.getItem("token");

export const phonePattern = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
export const idPattern = /^\d{2}[0-1][0-9][0-3]\d\d{4}[0-1]\d{2}$/;
export const passportPattern = /[a-zA-Z]{2}[0-9]{7}/;


export const IS_MOBILE = '(max-width: 760px)';

export const PAGINATION = {
  limit: 50,
  page: 1,
}

export const roleAccess = {
  VENDOR_LEVEL: ["VENDOR"],
  PLATFORM_LEVEL: ["ADMIN", "PROCUREMENT_OFFICER","STAFF_USER"],
  ALL_LEVELS: ["ADMIN", "PROCUREMENT_OFFICER","STAFF_USER", "VENDOR"],
};

export const colPros = {
  third: {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
  },
  half: {
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24,
  },
  full: {
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24,
  },
  gutter: 16
};
