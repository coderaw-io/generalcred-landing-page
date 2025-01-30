import { ContractResponse } from "@/@types/fgts/contract";
import { dataClient } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id
  const accessToken = request.cookies.get("general:access_token")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Error get access token." },
      { status: 401 }
    );
  }

  const response = await dataClient.get<ContractResponse>(`/fgts/contract?id=${id}`,
    {
      headers: {
        Token: `Bearer ${accessToken}`,
      },
    });

  if (!response) {
    return NextResponse.json(
      { error: "Error get contract data, please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json(response.data, { status: 200 });
}