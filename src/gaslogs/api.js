

// THIS FILE WAS NOT USED, BUT I DIDN'T WANT TO ERASE BEFORE PRESENTATION
// AND RISK BREAKING SOMETHING. WILL DELETE AFTER GRADUATION




// import apiUrl from '../apiConfig'
//
// export const handleErrors = res => {
//   if (res.ok) {
//     return res
//   } else  {
//     throw new Error('Recieved status in 400 or 500 range.')
//   }
// }
//
// export const createGasLog = credentials => {
//   return fetch(apiUrl + '/gas_logs', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization':`Token token=${user.token}`
//     },
//   })
// }
//
// export const signIn = credentials => {
//   return fetch(apiUrl + '/sign-in', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//     })
//   })
// }
//
// export const signOut = user => {
//   return fetch(apiUrl + '/sign-out', {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization':`Token token=${user.token}`
//     }
//   })
// }
//
// export const changePassword = (passwords, user) => {
//   return fetch(apiUrl + '/change-password', {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization':`Token token=${user.token}`
//     },
//     body: JSON.stringify({
//     })
//   })
// }
