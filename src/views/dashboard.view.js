class DashboardView {
  static html() {
    return `
      <app-weather></app-weather>
      <div id="message"></div>
      <div class="lds-ring hidden"><div></div><div></div><div></div>`;
  }
}

export default DashboardView;
