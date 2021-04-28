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

const hideFrom = () => {
  const formElement = appElement.querySelector('form')!;
  appElement.removeChild(formElement);
}

const showProjects = (projects: DataBase, projectsTemplateSelector: string) => {
  if (!projects.projects.length) {
    return;
  }

  const projectsTemplateElement = document.querySelector(projectsTemplateSelector)!;
  appendTemplate(appElement, projectsTemplateElement as HTMLTemplateElement);
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

  showProjects(database, '#projects-list');
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
// hideFrom();
