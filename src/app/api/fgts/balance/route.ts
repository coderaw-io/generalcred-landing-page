import { FgtsBalanceResponse } from "@/@types/fgts/loan";
import { dataClient } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { cpf, installments, rate } = await request.json();

  const formData = {
    cpf: cpf,
    installments: installments,
    rate: rate,
  };

  const accessToken = request.cookies.get("general:access_token")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Error get access token." },
      { status: 401 }
    );
  }

  const response = await dataClient.post<FgtsBalanceResponse>("/fgts/balance",
    formData,
    {
      headers: {
        Token: `Bearer ${accessToken}`,
      },
    });

  if (!response) {
    return NextResponse.json(
      { error: "Error generating token, please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json(response.data, { status: 200 });
}
