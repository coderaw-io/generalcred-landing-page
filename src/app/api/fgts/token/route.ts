import { dataClient } from "@/lib/axios";

import { NextResponse } from "next/server";

export async function POST() {
  const { data } = await dataClient.post("/fgts/token");

  if (!data) {
    return NextResponse.json(
      { error: "Error generating token, please try again." },
      { status: 500 },
    );
  }

  const response = new NextResponse(null, { status: 200 });

  response.cookies.set(
    "general:access_token",
    data.token,
    {
      httpOnly: true,
      maxAge: data.expiresIn,
      path: '/',
      sameSite: 'strict',
      secure: true,
    }
  );

  return response;
}
