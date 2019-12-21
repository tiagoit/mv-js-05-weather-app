class AppService {
  static message(m) {
    document.getElementById('message').innerHTML = m;
  }

  static loading(show) {
    const action = show ? 'remove' : 'add';
    document.querySelector('.lds-ring').classList[action]('hidden');
  }
}

export default AppService;
