
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {

//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses)
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });



// database.ref('expenses').push({
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: 0
// })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: moment(0).subtract(4, 'days').valueOf()
// })

// database.ref('expenses').push({
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createdAt: moment(0).add(4, 'days').valueOf()
// })

// database.ref('notes/-MOae9mz7qixKabiK2n-').remove();


// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref().update({
//     'job/company': 'Agoda'
//   });
// }, 3500);


// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   });

// database.ref().set({
//   name: 'Lucky Naja',
//   age: 9,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });


// database.ref('attributes').set({
//   height: 77,
//   weight: 88
// }).then(() => {
//   console.log('I made a request to change the data.');
// }).catch((e) => {
//   console.log('Failed naja', e);
// });


// database.ref('isSingle').set(false).then(() => {
//   console.log('I made a request to change the data.');
// }).catch((e) => {
//   console.log('Failed naja', e);
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('I remove data.');
// }).catch((e) => {
//   console.log('Failed naja', e);
// });

// database.ref('isSingle').set(null).then(() => {
//     console.log('I remove data.');
//   }).catch((e) => {
//     console.log('Failed naja', e);
//   });
