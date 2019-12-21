import DashboardView from '../views/dashboard.view';
import WeaterController from './weather.controller';

class DashboardController {
  constructor() {
    this.tag = 'router-outlet';
    this.render();
    this.weaterController = new WeaterController();
  }

  render() {
    document.getElementsByTagName(this.tag)[0].innerHTML = DashboardView.html();
  }
}

export default DashboardController;
