let logged;

function sendAnalytics(data: string) {
  console.log('%c custom log', 'color:red;', data);
  logged = true;
}

sendAnalytics('The data');
