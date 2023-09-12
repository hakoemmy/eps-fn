const getRoutes = (routes = []) => ({
  protectedRoutes: routes.filter((route) => route.protected),
  unprotectedRoutes: routes.filter((route) => !route.protected),
});

export default getRoutes;
