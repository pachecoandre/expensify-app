import * as firebase from 'firebase'

const config = {
   apiKey: process.env.FIREBASE_API_KEY,
   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
   databaseURL: process.env.FIREBASE_DATABASE_URL,
   projectId: process.env.FIREBASE_PROJECT_ID,
   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.FIREBASE_API_ID,
   measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(config)

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

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