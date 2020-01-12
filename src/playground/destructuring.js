// const person = {
//    name: 'André',
//    age: 29,
//    location: {
//       city: 'Florianópolis',
//       temp: 26
//    }
// }

// const { name = 'Anonymous', age } = person
// const { city, temp: temperature } = person.location

// console.log(`${name} is ${age}`)
// console.log(`It's ${temperature} in ${city}`)

// const book = {
//    title: 'Ego is the Enermy',
//    author: 'Ryan',
//    publisher: {
//       name: 'Penguin'
//    }
// }

// const { name: publisherName = 'Self-Publisher' } = book.publisher

// console.log(publisherName)

const [ street, , city] = ['Rua Laércio Costa 105', 'Trindade', 'Florianópolis']

console.log(`You are in ${street}, ${city}`)