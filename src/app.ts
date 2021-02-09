const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', () => {
    console.log('%c custom log', 'color:red;', 'button click');
  });
}
