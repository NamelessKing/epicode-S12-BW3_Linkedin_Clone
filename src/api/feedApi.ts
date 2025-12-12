import { API_BASE_URL} from "../config/constants"
import type { Feed } from "../types/feedPost"



export const fetchFeed = async (): Promise<Feed[]> => {
  const response = await fetch(API_BASE_URL + "/posts/", {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return response.json()
}

export const newFeedPost = async (post: string): Promise<Feed> => {
  const response = await fetch(API_BASE_URL + "/posts/", {
      method: "POST",
    headers: {
      Authorization: `Bearer ${ACTIVE_TOKEN}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({text: post}) 
  })
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return await response.json()
}