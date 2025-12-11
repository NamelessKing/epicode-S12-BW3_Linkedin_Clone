// UserProfile interface matching the API response
export interface UserProfile {
  _id: string;
  name: string;
  surname: string;
  email: string;
  username: string;
  bio: string;
  title: string;
  area: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface UpdatedUserProfile {
  name?: string;
  surname?: string;
  email?: string;
  username?: string;
  bio?: string;
  title?: string;
  area?: string;
  image?: string;
}

export interface UpdateProfileImage {
  userId?: string;
  image?: File;
}
