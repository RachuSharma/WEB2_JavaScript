function createPerson(name, age) {
    return {
      getName: () => name,
        getAge: () => age,
        setName: (newName) => name = newName,
        setAge: (newAge) => age = newAge,
            toString: () => `Name: ${name},Age:  ${age}`,
            equals: person => name === person.getName() && age === person.getAge,
        }
    };