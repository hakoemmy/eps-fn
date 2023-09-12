import moment from "moment";
import { DEFAULT_IDENTIFICATION_TYPE } from '../../constants';

export const dateFormatter = (date) => {
  return date ? moment(date).format('YYYY-MM-DD') : undefined
}

export const momentFormatter = (date) => {
  return date ? moment(date) : undefined
}

export const breakdownToFormValue = (breakdown = {}) => {
  const {
    currentMileage,
    imageUrl,
    driverId,
    truckId,
    companyId,
    categoryId,
    dateDown,
    dateUp,
    details,
  } = breakdown;
  return {
    details,
    imageUrl,
    currentMileage,
    dateDown: momentFormatter(dateDown),
    dateUp: momentFormatter(dateUp),
    categoryId,
    driverId,
    truckId,
    companyId,
  };
};

export const userToFormValue = (user = {}) => {
  const { 
    firstName, 
    lastName, 
    roleId, 
    email, 
    telephone 
  } = user;
  return {
    firstName,
    lastName,
    roleId,
    email,
    telephone,
  };
};

export const companyToFormValue = (company = {}) => {
  const { name, telephone, address, modules = [] } = company;
  let formModules = {};
  modules.forEach(({ name }) => {
    formModules[name] = true
  });
  return {
    name,
    telephone,
    address,
    ...formModules,
  };
};

export const scheduleToFormValue = (schedule = {}) => {
  const {
    startDate,
    endDate,
    availability,
    reason,
    routeId,
    truckId
  } = schedule;
  return {
    startDate: momentFormatter(startDate),
    endDate: momentFormatter(endDate),
    availability: availability === 'available',
    reason,
    routeId,
    truckId
  }
};

export const eventToFormValue = (eventData = {}) => {
  const {
    event,
    eventDate,
    remindViaEmail,
    truckId
  } = eventData;
  return {
    event,
    eventDate: momentFormatter(eventDate),
    remindViaEmail,
    truckId
  }
}

export const loadToFormValues = (load = {}) => {
  const {
    routeId,
    truckId,
    driverId,
    loadingTicketNumber,
    loadedQuantity,
    offloadingTicketNumber,
    offloadedQuantity,
    loadingDriver,
    offloadingDriver,
    loadingDate,
    offloadingDate,
  } = load;
  return {
    routeId,
    truckId,
    driverId,
    loadingTicketNumber,
    loadedQuantity,
    offloadingTicketNumber,
    offloadedQuantity,
    loadingDriver,
    offloadingDriver,
    loadingDate: momentFormatter(loadingDate),
    offloadingDate: momentFormatter(offloadingDate),
  }
}

export const horseToFormValues = (horse = {}) => {
  const {
    fleetNumber,
    serviceMileage,
    serviceIntervals,
    model,
    make,
    vinNumber,
    rotranExpiryDate,
    CofExpiryDate,
    engineNumber,
    horseInstallment,
    horseRegistration,
    horseInsurance,
    workingDaysPerMonth,
    loadCapacity,
    companyId,
    productId
  } = horse;
  return {
    fleetNumber,
    serviceMileage,
    serviceIntervals,
    model,
    make,
    vinNumber,
    rotranExpiryDate: momentFormatter(rotranExpiryDate),
    CofExpiryDate: momentFormatter(CofExpiryDate),
    engineNumber,
    horseInstallment,
    horseRegistration,
    horseInsurance,
    workingDaysPerMonth,
    loadCapacity,
    companyId,
    productId
  }
};

export const trailerToFormValues = (trailer = {}) => {
  const {
    leaderRegistration,
    followerRegistration,
    leaderCOFExpiryDate,
    followerCOFExpiryDate,
    trailerInstallment,
    trailerInsurance,
    leaderROTRANExpiryDate,
    followerROTRANExpiryDate
  } = trailer;
  return {
    leaderRegistration,
    followerRegistration,
    leaderCOFExpiryDate: momentFormatter(leaderCOFExpiryDate),
    followerCOFExpiryDate: momentFormatter(followerCOFExpiryDate),
    trailerInstallment,
    trailerInsurance,
    leaderROTRANExpiryDate: momentFormatter(leaderROTRANExpiryDate),
    followerROTRANExpiryDate: momentFormatter(followerROTRANExpiryDate)
  }
}

export const truckToFormValues = (truck = {}) => {
  const {
    horseId,
    trailerId,
    productId,
    telephone,
    loadingCapacity,
    maintenanceRates,
    fleetConPremium,
    airtimeAndDataCosts,
    email,
    trackerCost
  } = truck;
  return {
    horseId,
    trailerId,
    productId,
    telephone,
    loadingCapacity,
    maintenanceRates,
    fleetConPremium,
    airtimeAndDataCosts,
    email,
    trackerCost
  }
};

export const driverToFormValues = (driver = {}) => {
  const {
    firstName,
    lastName,
    gender,
    loadingBonus,
    telephone,
    salary,
    email,
    offloadingBonus,
    identificationType = DEFAULT_IDENTIFICATION_TYPE,
    identificationNumber
  } = driver;
  return {
    firstName,
    lastName,
    gender,
    loadingBonus,
    telephone,
    salary,
    email,
    offloadingBonus,
    identificationType,
    identificationNumber
  }
};

export const fuelDepotToFormValues = (fuelDepot = {}) => {
  const {
    name,
    address,
    telephone,
    email
  } = fuelDepot;
  return {
    name,
    address,
    telephone,
    email
  }
};

export const siteToFormValues = (site = {}) => {
  const {
    siteName,
    siteAddress,
    gpsLocation,
    productId,
    siteType
  } = site;
  return {
    siteName,
    siteAddress,
    gpsLocation,
    productId,
    siteType
  }
}

export const routeToFormValues = (route = {}) => {
  const {
    loadingSiteId,
    offloadingSiteId,
    distance,
    turnAroundTime,
    possibleTrips,
    rate,
    clientId,
    routeName
  } = route;
  return {
    loadingSiteId,
    offloadingSiteId,
    distance,
    turnAroundTime,
    possibleTrips,
    rate,
    clientId,
    routeName
  }
};

export const modulesToFormValues = (module = {}) => {
  const {
    displayName,
    pricing
  } = module;
  return {
    displayName,
    pricing
  }
}
