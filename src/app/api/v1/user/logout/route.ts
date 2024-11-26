import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (!request.cookies.get("token")) {
    return NextResponse.json({
      success: false,
      status: "F",
      message: "User is already logged out",
    });
  }

  request.cookies.clear();
  NextResponse.json({
    success: true,
    status: "S",
    message: "User logged out successfully",
  });
}
