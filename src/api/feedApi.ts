import { API_BASE_URL, ACTIVE_TOKEN } from "../config/constants"

export const fetchFeed = async () => {
  const response = await fetch(API_BASE_URL + "/posts/", {
    headers: {
      Authorization: `Bearer ${ACTIVE_TOKEN}`,
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}
// export const fetchFeed = async () => {

//     fetch(API_BASE_URL + "/posts/", {
//         headers: {
//               Authorization: `Bearer ${ACTIVE_TOKEN}`,
//               "Content-Type": "application/json",
//             },
//     })
//         .then((res) => {
//             if (res.ok) {
//             return res.json()
//             } else {
//                 throw new Error
//             }
//         })
//         .then((feed) => {
//             const limitedArray = []
//             limitedArray.push(feed)
//             limitedArray.reverse().slice(0, 49)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }
