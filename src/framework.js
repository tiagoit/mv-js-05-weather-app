import DashboardController from './controllers/dashboard.controller';

class Framework {
  /**
   * Select the route handler and call App#render.
   * @param {string} routeName
   */
  static activateRoute(routeName) {
    const handlers = {
      index: { controller: DashboardController },
    };

    const route = handlers[routeName];
    const Controller = handlers[routeName].controller;
    return new Controller();
  }
}

export default Framework;
