// import { NextResponse } from "next/server";
// import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

// export const POST = withApiAuthRequired(async (req, res) => {
//   try {
//     const { accessToken } = await getAccessToken();
//     console.log(accessToken);

//     const response = await fetch(
//       "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/oauth/token",
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//           client_id: "m4kc3OhyVh35XEKXD9DTHeQ8e6ikAIBf",
//           client_secret:
//             "RgiFO5KriIl5gp1ib6IgrMtH1ylzDqC8A2QgQYlrcz6AAoac1jJ90cRc3ltJm7Y3",

//           audience: "https://auth-app",
//           grant_type: "client_credentials",
//         },
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
// });

// import { NextResponse } from "next/server";
// import { getAccessToken } from "@auth0/nextjs-auth0";

// export const POST = async (req: any, res: any) => {
//   // if (req.method !== "POST") {
//   //   res.setHeader("Allow", ["POST"]);
//   //   return res.status(405).end(`Method ${req.method} Not Allowed`);
//   // }

//   try {
//     const { accessToken } = await getAccessToken();
//     console.log(accessToken);

//     const response = await fetch(
//       "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/oauth/token",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // body: JSON.stringify({
//         //   client_id: "m4kc3OhyVh35XEKXD9DTHeQ8e6ikAIBf",
//         //   client_secret:
//         //     "RgiFO5KriIl5gp1ib6IgrMtH1ylzDqC8A2QgQYlrcz6AAoac1jJ90cRc3ltJm7Y3",
//         //   audience: "https://auth-app",
//         //   grant_type: "client_credentials",
//         // }),
//       }
//     );

//     if (!response.ok) {
//       return res
//         .status(response.status)
//         .json({ error: "Failed to fetch data from API" });
//     }

//     const data = await response.json();
//     return res.status(200).json({ data });
//   } catch (error) {
//     console.error("Error fetching access token or API data:", error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// };

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/oauth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: "m4kc3OhyVh35XEKXD9DTHeQ8e6ikAIBf",
          client_secret:
            "RgiFO5KriIl5gp1ib6IgrMtH1ylzDqC8A2QgQYlrcz6AAoac1jJ90cRc3ltJm7Y3",
          audience: "https://auth-app",
          grant_type: "client_credentials",
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text(); // Get the full error text
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
