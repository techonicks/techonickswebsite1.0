import mongoose, { Schema } from "mongoose";

const userInfoSchema = new Schema(
  {
    avatar: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },
    role: {
      type: String,
      enum: ["incharge", "core-member", "member"],
      required: true,
    },
    year: {
      type: String,
      enum: ["1st", "2nd", "3rd", "4th"],
      required: true,
    },
    department: {
      type: String,
      enum: ["CE", "CSE", "ECE", "EE", "ME"],
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    socials: {
      type: [{ handle: String, link: String }],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const UserInfo = mongoose.models.UserInfo || mongoose.model("UserInfo", userInfoSchema);

export default UserInfo;
