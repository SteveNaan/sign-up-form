 function check() {
    if (document.getElementById('password').value ==
      document.getElementById('passwordCheck').value) {
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Passwords are not matching';
    }
  }