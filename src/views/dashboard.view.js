class DashboardView {
  static render() {
    const html = `
      <div class="container">
        <h1>App works?</h1>
      </div>`;

    document.getElementsByTagName('router-outlet')[0].innerHTML = html;
  }
}

export default DashboardView;
