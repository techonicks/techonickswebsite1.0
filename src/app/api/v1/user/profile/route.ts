import { isAuthenticated } from "@/lib/auth/auth";
import dbConnect from "@/lib/db/db.connect";
import { UserInfo } from "@/models/userInfo.model";
import { DB_NAME } from "@/utils/constants";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const token = cookies().get("token")?.value;
  if (!isAuthenticated(token)) {
    return NextResponse.json({
      success: false,
      status: "I",
      message: "User is not authenticated, login first",
    });
  }

  if (!token) {
    return NextResponse.json({
      success: false,
      status: "I",
      message: "User not found",
    });
  }

  const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET!);
  console.log(decodedToken?._id);

  await dbConnect(DB_NAME);
  const user = await UserInfo.findById(decodedToken?._id);

  if (user) {
    return NextResponse.json({
      success: true,
      status: "S",
      message: "User found successfully",
      response: user,
    });
  } else {
    return NextResponse.json({
      success: false,
      status: "I",
      message: "User not found",
    });
  }
}
