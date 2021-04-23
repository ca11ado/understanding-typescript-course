const appElm = document.querySelector('#app');
const inputElmTemplate = document.querySelector('#project-input') as HTMLTemplateElement;
const formElm = inputElmTemplate!.content.cloneNode(true);

appElm?.appendChild(formElm!);
