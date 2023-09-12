import { replace } from 'lodash';

export const toSelectOption = (value, label) => {
  return {
    value,
    label
  }
}

export const userToSelectOption =  (user = {} ) => {
  const { id, firstName, lastName } = user;
  return toSelectOption(id, `${firstName} ${lastName}`)
};

export const usersToSelectOptions = (users = []) => {
  return users.map((user) => userToSelectOption(user))
};

export const siteToSelectOption = (site = {} ) => {
  const { id, siteName } = site;
  return toSelectOption(id, siteName);
};

export const sitesToSelectOptions = (sites = []) => {
  return sites.map((site) => siteToSelectOption(site))
};

export const productToSelectOption = (product = {}) => {
  const {id, name } = product;
  return toSelectOption(id, name);
};

export const productsToSelectOptions = (products = []) => {
  return products.map(productToSelectOption);
};

export const routeToSelectOption = (route = {} ) => {
  const { id, routeName, loadingSite = {}, offloadingSite = {} } = route;
  const label = routeName || `${loadingSite.siteName} - ${offloadingSite.siteName}`
  return toSelectOption(id, label);
};

export const routesToSelectOptions = (routes = []) => {
  return routes.map((route) => routeToSelectOption(route))
};

export const truckToSelectOption = (truck = {}) => {
  const { id, fleetNumber } = truck;
  return toSelectOption(id, fleetNumber)
};

export const trucksToSelectOptions = (trucks = []) => {
  return trucks.map((truck) => truckToSelectOption(truck))
}

export const driverToSelectOption = (driver = {}) => {
  const { id, firstName, lastName } = driver;
  return toSelectOption(id, `${firstName} ${lastName}`);
}

export const driversToSelectOptions = (drivers = []) => {
  return drivers.map((driver) => driverToSelectOption(driver))
};

export const companyToSelectOption = (company = {}) => {
  const { id, name }  = company;
  return toSelectOption(id, name);
};

export const companiesToSelectOptions = (companies = []) => {
  return companies.map((company) => companyToSelectOption(company));
};

export const trailerToSelectOption = (trailer = {}) => {
  const { leaderRegistration, followerRegistration, id } = trailer;
  return toSelectOption(id, `${leaderRegistration} - ${followerRegistration}`);
};

export const trailersToSelectOptions = (trailers = []) => {
  return trailers.map((trailer) => trailerToSelectOption(trailer))
};

export const horseToSelectOption = (horse = {}) => {
  const {id, fleetNumber } = horse;
  return toSelectOption(id, fleetNumber);
};

export const horsesToSelectOptions = (horses = []) => {
  return horses.map((horse) => horseToSelectOption(horse))
};

export const roleToSelectOption = (role = {}) => {
  const { id, name } = role;
  return toSelectOption(id, replace(name, '_', ' '))
};

export const rolesToSelectOptions = (roles = []) => {
  return roles.map((role) => roleToSelectOption(role))
}

export const breakdownCategoryToSelectOption = (breakdownCategory = {}) => {
  const { id, name } = breakdownCategory;
  return toSelectOption(id, name)
};

export const breakdownCategoriesToSelectOptions = (
  breakdownCategories = []
) => {
  return breakdownCategories.map((breakdownCategory) =>
    breakdownCategoryToSelectOption(breakdownCategory)
  );
};
