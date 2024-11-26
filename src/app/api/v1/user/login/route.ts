import { isLoggedIn } from "@/lib/auth/auth";
import dbConnect from "@/lib/db/db.connect";
import { UserInfo } from "@/models/userInfo.model";
import { DB_NAME } from "@/utils/constants";
import { comparePasswords } from "@/utils/functions/passwordManager";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const token = cookies().get('token')?.value
  if (isLoggedIn(token)) {
    return NextResponse.json({
      success: false,
      status: "I",
      message: "User already logged in",
    });
  }

  const { email, password } = await req.json();
  await dbConnect(DB_NAME);
  const user = await UserInfo.findOne({ email });
  if (!user) {
    return NextResponse.json({
      success: false,
      status: "N",
      message: "User not found",
    });
  }
  const isMatch = await comparePasswords(password, user.password);
  if (isMatch) {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET!);
    console.log(token);

    cookies().set("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
    });
    return NextResponse.json({
      success: true,
      status: "S",
      message: "User Logged in successfully",
      response: user,
    });
  }
}
