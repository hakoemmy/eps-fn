export const toTableRow = (id, data = {}) => {
  return {
    ...data,
    key: id,
  }
};

export const tenderToTableRow = (tender = {}) => {
  const { id, truckLoad = {}, loadRoute = {}  } = tender;
  const { fleetNumber } = truckLoad;
  const { routeName } = loadRoute;
  return toTableRow(id, {
    ...tender,
    truck: fleetNumber,
    route: routeName
  })
}

export const tendersToTableRows = (tenders = []) => {
  return tenders.map((tender) => tenderToTableRow(tender))
}

