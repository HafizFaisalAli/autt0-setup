import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);

    const response = await fetch(
      `${process.env.AUTH0_ISSUER_BASE_URL}/dbconnections/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.AUTH0_CLIENT_ID,
          email: body.email,
          password: body.password,
          connection: "Username-Password-Authentication",
          //   username: "johndoe",
          //   given_name: "John",
          //   family_name: "Doe",
          //   name: "John Doe",
          //   nickname: "johnny",
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error from Auth0 API: ${response.status} - ${errorText}`);
      return NextResponse.json(
        {
          error: `Failed to fetch data from API: ${response.status} - ${errorText}`,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching access token or API data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
