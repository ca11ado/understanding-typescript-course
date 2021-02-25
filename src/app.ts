interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Dog {
  type: 'dog';
  runngingSpeed: number;
}

type Animal = Bird | Dog;

function movingAnimal(animal: Animal) {
  switch(animal.type) {
    case 'bird':
      return animal.flyingSpeed;
    case 'dog':
      return animal.runngingSpeed;
  }
}
