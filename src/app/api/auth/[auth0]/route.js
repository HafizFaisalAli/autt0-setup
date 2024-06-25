// app/api/auth/[auth0]/route.js
import { handleAuth } from "@auth0/nextjs-auth0";

export const GET = handleAuth();

// pages / api / auth / [auth0].js;
// import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

// export default handleAuth({
//   login: handleLogin({
//     authorizationParams: {
//       client_id: "m4kc3OhyVh35XEKXD9DTHeQ8e6ikAIBf",
//       client_secret:
//         "RgiFO5KriIl5gp1ib6IgrMtH1ylzDqC8A2QgQYlrcz6AAoac1jJ90cRc3ltJm7Y3",

//       audience: "https://auth-app",
//       grant_type: "client_credentials",
//     },
//   }),
// });

// import { NextResponse } from "next/server";
// import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";

// export const POST = withApiAuthRequired(async (req, res) => {
//   try {
//     const { accessToken } = await getAccessToken();
//     console.log(accessToken);

//     const response = await fetch(
//       "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/dbconnections/signup",
//       {
//         headers: {
//           "Content-Type": "application/json",
//           client_id: "m4kc3OhyVh35XEKXD9DTHeQ8e6ikAIBf",

//           email: "afraw@gmail.com",
//           password: "12345678$Ahe",
//           connection: "Username-Password-Authentication",
//           username: "johndoe",
//           given_name: "John",
//           family_name: "Doe",
//           name: "John Doe",
//           nickname: "johnny",
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
