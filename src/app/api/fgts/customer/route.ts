import { dataClient } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { customer, customer_service_id } = await request.json();

  const formData = {
    customer,
    customer_service_id,
  };

  const accessToken = request.cookies.get("general:access_token")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Error get access token." },
      { status: 401 }
    );
  }

  const response = await dataClient.post("/fgts/customer",
    formData,
    {
      headers: {
        Token: `${accessToken}`,
      },
    });

  if (!response) {
    return NextResponse.json(
      { error: "Error generating customer, please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json(response.data, { status: 200 });
}
