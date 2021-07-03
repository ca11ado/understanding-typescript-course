type Project = {
  title: string;
  description: string;
  people: string;
};

class DataBase {
  projects: Project[];

  constructor() {
    this.projects = [];
  }

  add(project: Project) {
    this.projects.push(project);
  }

  getLast() {
    return this.projects[this.projects.length -1];
  }
}

// Отобразить шаблон в приложении
const appendTemplate = (appElement: HTMLElement, templateElement: HTMLTemplateElement) => {
  const element = templateElement.content.cloneNode(true);
  appElement.appendChild(element);
}

const showFrom = () => {
  const formTemplate = document.querySelector('#project-input') as HTMLTemplateElement;
  const formElement = formTemplate!.content.cloneNode(true);
  appElement?.appendChild(formElement!);
};

const showProjectsList = () => {
  const projectsTemplate = document.querySelector('#project-list') as HTMLTemplateElement;
  const projectsElement = projectsTemplate!.content.cloneNode(true);

  appElement?.appendChild(projectsElement);
}

const hideFrom = () => {
  const formElement = appElement.querySelector('form')!;
  appElement.removeChild(formElement);
}

const showProject = (project: Project) => {
  const projectTemplateElement = document.querySelector('#single-project') as HTMLTemplateElement;
  const projectElement = projectTemplateElement!.content.cloneNode(true) as HTMLElement;

  const titleElement = document.createElement('span');
  titleElement.innerText = `Project: ${project.title}`;
  titleElement.style.marginRight = '10px';
  const descriptionElement = document.createElement('span');
  descriptionElement.innerText = `Description: ${project.description}`;

  projectElement.querySelector('li')!.appendChild(titleElement);
  projectElement.querySelector('li')!.appendChild(descriptionElement);

  appElement.querySelector('ul')!.appendChild(projectElement);
}

const saveProjectListener = (event: Event) => {
  event.preventDefault();
  console.log('%c custom log', 'color:red;', event?.target?.constructor.name);
  if (!(event.target instanceof HTMLButtonElement)) {
    return;
  }

  console.log('saving project');

  const form = event.currentTarget! as HTMLInputElement;
  const title = form.querySelector('#title')! as HTMLInputElement;
  const description = form.querySelector('#description')! as HTMLInputElement;
  const people = form.querySelector('#people')! as HTMLInputElement;

  database.add({
    title: title.value,
    description: description.value,
    people: people.value,
  });

  showProject(database.getLast());
}

// listeners
document
  .querySelector('#app')!
  .addEventListener('click', saveProjectListener);

// init
const database = new DataBase();
const appElement = document.querySelector('#app') as HTMLElement;
const formTemplate = document.querySelector('#project-input') as HTMLTemplateElement;

showFrom();
showProjectsList();
// hideFrom();
