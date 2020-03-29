import * as firebase from 'firebase'

const config = {
   apiKey: "AIzaSyCOac6_QTTHTK7dDYVNC4h4BvIfxt16XKc",
   authDomain: "expensify-352d1.firebaseapp.com",
   databaseURL: "https://expensify-352d1.firebaseio.com",
   projectId: "expensify-352d1",
   storageBucket: "expensify-352d1.appspot.com",
   messagingSenderId: "891837541858",
   appId: "1:891837541858:web:8800d0608b9d02ad5addbb",
   measurementId: "G-KMPRETRM9K"
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val())
// })

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val())
// })

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//    console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//    const expenses = []
//    snapshot.forEach((child) => {
//       const expense = {
//          id: child.key,
//          ...child.val()
//       }
//       expenses.push(expense)
//    })
//    console.log(expenses)
// })

// const expenses = [
//    {
//       description: 'Car',
//       note: 'Car expense',
//       amount: 20000,
//       createdAt: 200000000
//    },{
//       description: 'Shopping',
//       note: 'Clothes',
//       amount: 500,
//       createdAt: 1000000
//    },{
//       description: 'Rent',
//       note: 'Monthly rend',
//       amount: 700,
//       createdAt: 0
//    }
// ]

// expenses.forEach((expense) => {
//    database.ref('expenses').push(expense)
// })

// database.ref().on('value', (snapshot) => {
//    const val = snapshot.val()
//    const name = val.name
//    const title = val.job.title
//    const company = val.job.company
//    console.log(`${name} is a ${title} at ${company}`)
// })

// database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val())
// })

// database.ref()
//    .once('value')
//    .then((snapshot) => {
//       console.log(snapshot.val())
//    })
//    .catch((e) => {
//       console.log('Error fetching data', e)
//    })

// database.ref().set({
//    name: "André",
//    age: 29,
//    stressLevel: 6,
//    job: {
//       title: 'Software Developer',
//       company: 'Google'
//    },
//    location: {
//       city: 'Florianópolis',
//       country: 'Brazil'
//    }
// }).then(() => {
//    console.log('Data is saved')
// }).catch((error) => {
//    console.log('Data not saved.', error)
// })