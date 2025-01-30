import { SimulationResponse } from "@/@types/fgts/customer";
import { dataClient } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { nameTableChosen, proposalFgts } = await request.json();

    const formData = {
      nameTableChosen,
      proposalFgts,
    };

    const accessToken = request.cookies.get("general:access_token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { error: "Error get access token." },
        { status: 401 }
      );
    }

    const response = await dataClient.post<SimulationResponse>("/fgts/proposal",
      formData,
      {
        headers: {
          Token: `${accessToken}`,
        },
      });

    if (!response) {
      return NextResponse.json(
        { error: "Error generating proposal, please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.log(error)
  }
}
