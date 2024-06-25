// "use server";
// import { NextResponse } from "next/server";
// import { NextApiRequest, NextApiResponse } from "next";

// import {
//   getAccessToken,
//   withApiAuthRequired,
//   getSession,
// } from "@auth0/nextjs-auth0";

// export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const session = getSession(req, res);

//     if (!session) {
//       return res.status(401).json({
//         error: "not_authenticatedvfdvvfv",
//         description:
//           "The user does not have an active session or is not authenticated",
//       });
//     }

//     const { user }: any = session;
//     console.log("Authenticated user:", user);

//     const { accessToken } = await getAccessToken();
//     console.log("Access Token:", accessToken);
//     const response = await fetch(
//       "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/dbconnections/signup",
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//         body: JSON.stringify({
//           client_id: "m4kc3OhyVh35XEKXD9DTHeQ8e6ikAIBf",
//           email: "user1@gmail.com",
//           password: "12345678$Ahe",
//           connection: "Username-Password-Authentication",
//           username: "johndoe",
//           given_name: "John",
//           family_name: "Doe",
//           name: "John Doe",
//           nickname: "johnny",
//         }),
//       }
//     );

//     if (!response.ok) {
//       return NextResponse.json(
//         { error: "Failed to fetch data from API" },
//         { status: response.status }
//       );
//     }

//     const data = await response.json();
//     return NextResponse.json({ data });
//   } catch (error) {
//     console.error("Error fetching access token or API data:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// };

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/dbconnections/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: "m4kc3OhyVh35XEKXD9DTHeQ8e6ikAIBf",
          email: "user7@gmail.com",
          password: "12345678$Ahe",
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