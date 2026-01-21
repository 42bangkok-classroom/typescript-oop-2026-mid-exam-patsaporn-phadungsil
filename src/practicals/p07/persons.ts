export{}
interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}
interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

function sortPersons(persons: Person[]): Person[] {

  const validPersons = persons.filter(person => {

    if (typeof person.age !== 'number' || person.age < 0 || person.age > 120) {
      return false;
    }
    

    if (!person.firstName || person.firstName.trim() === "") {
      return false;
    }

    return true;
  });

  return validPersons.sort((a, b) => {

    if (a.age !== b.age) {
      return a.age - b.age;
    }

    if (a.firstName !== b.firstName) {
      return a.firstName.localeCompare(b.firstName);
    }
    
 
    return (a.lastName || '').localeCompare(b.lastName || '');
  });
}

const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

console.log(sortPersons(persons));


