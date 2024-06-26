// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     const tokenResponse = await fetch(
//       "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/oauth/token",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           client_id: "m4kc3OhyVh35XEKXD9DTHeQ8e6ikAIBf",
//           client_secret:
//             "RgiFO5KriIl5gp1ib6IgrMtH1ylzDqC8A2QgQYlrcz6AAoac1jJ90cRc3ltJm7Y3",
//           audience: "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/api/v2/",
//           grant_type: "client_credentials",
//         }),
//       }
//     );

//     const tokenData = await tokenResponse.json();
//     const accessToken = tokenData.access_token;

//     // Fetch users
//     const usersResponse = await fetch(
//       "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/api/v2/users",
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     if (!usersResponse.ok) {
//       throw new Error(`Error fetching users: ${usersResponse.statusText}`);
//     }
//     const usersData = await usersResponse.json();
//     return NextResponse.json(usersData);
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     // Fetch the access token from Auth0
//     const tokenResponse = await fetch(
//       "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/oauth/token",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           client_id: "m4kc3OhyVh35XEKXD9DTHeQ8e6ikAIBf",
//           client_secret:
//             "RgiFO5KriIl5gp1ib6IgrMtH1ylzDqC8A2QgQYlrcz6AAoac1jJ90cRc3ltJm7Y3",
//           audience: "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/api/v2/",
//           grant_type: "client_credentials",
//           scope: "read:users",
//         }),
//       }
//     );

//     const tokenData = await tokenResponse.json();

//     if (!tokenResponse.ok) {
//       throw new Error(
//         `Error fetching access token: ${tokenResponse.statusText} - ${tokenData.error_description}`
//       );
//     }

//     const accessToken = tokenData.access_token;

//     // Fetch users using the Management API
//     const usersResponse = await fetch(
//       "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/api/v2/users",
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );

//     const usersData = await usersResponse.json();

//     if (!usersResponse.ok) {
//       throw new Error(`Error fetching users: ${usersResponse.statusText}`);
//     }

//     return NextResponse.json(usersData);
//   } catch (error: any) {
//     console.error("Error fetching users:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// pages/api/users.js

// import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

// export default withApiAuthRequired(async function handler(req, res) {
//   const { accessToken } = getSession(req, res);

//   try {
//     const response = await fetch(
//       "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/api/v2/users",
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch users");
//     }

//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(error.status || 500).end(error.message);
//   }
// });

import { getSession, getAccessToken } from "@auth0/nextjs-auth0";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // const accessTokenCookie = req.cookies.get("accessToken");
    // const accessToken = accessTokenCookie?.value;

    // if (!accessToken) {
    //   console.error("No access token found in cookies.");
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    // }

    // console.log("Access Token:", accessToken);
    // const session = await getSession();
    // const { accessToken } = await getAccessToken();

    // console.log("login callback");
    // console.log(session?.user);
    // console.log(accessToken);

    const tokenResponse = await fetch(
      `https://dev-q53dzuk0m4ze6hvy.us.auth0.com/oauth/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: "m4kc3OhyVh35XEKXD9DTHeQ8e6ikAIBf",
          client_secret:
            "RgiFO5KriIl5gp1ib6IgrMtH1ylzDqC8A2QgQYlrcz6AAoac1jJ90cRc3ltJm7Y3",
          audience: "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/api/v2/",
          grant_type: "client_credentials",
          scope: "read:users",
        }),
      }
    );

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error(
        `Error fetching access token: ${tokenResponse.status} - ${errorText}`
      );
    }

    const tokenData = await tokenResponse.json();
    console.log("Token Data:", tokenData);
    const accessToken = tokenData.access_token;
    console.log("Access Token:", accessToken);

    if (!accessToken) {
    }

    const response = await fetch(
      "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/api/v2/users",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
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
