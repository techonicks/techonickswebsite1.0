"use server";

import { Post } from "@/interfaces/profile.interface";
import dbConnect from "@/lib/db/db.connect";
import UserProfile from "@/models/profile.model";
import { DB_NAME } from "@/utils/constants";

export const getProfile = async (email: string) => {
  await dbConnect(DB_NAME);
  // const profile = await UserProfile.findOne({ userEmail: email });
  // const posts: Post[] = profile.posts.map((post: Post) => ({
  //   image: post.image,
  //   caption: post.caption,
  //   reactions: post.reactions,
  //   comments: post.comments,
  //   createdAt: post.createdAt,
  //   updatedAt: post.updatedAt,
  // }));
};
