import { API_BASE_URL } from "../config/constants";
import { getActiveToken } from "../config/auth";
import type { Feed } from "../types/feedPost";

export const fetchFeed = async (): Promise<Feed[]> => {
  const token = getActiveToken();

  if (!token) {
    throw new Error("No active token found. Please login.");
  }

  const response = await fetch(API_BASE_URL + "/posts/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const newFeedPost = async (post: string): Promise<Feed> => {
  const token = getActiveToken();

  if (!token) {
    throw new Error("No active token found. Please login.");
  }

  const response = await fetch(API_BASE_URL + "/posts/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ text: post }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};
