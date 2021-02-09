const button = document.querySelector('button')!;

button.addEventListener('click', () => {
  console.log('%c custom log', 'color:red;', 'button click');
});
