// import { initAuth0 } from "@auth0/nextjs-auth0";

// export default initAuth0({
//   domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
//   clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
//   clientSecret: process.env.AUTH0_CLIENT_SECRET,
//   scope: "openid profile email",
//   redirectUri: "http://localhost:3000/api/callback",
//   postLogoutRedirectUri: "http://localhost:3000/",
//   session: {
//     cookieSecret: process.env.SESSION_COOKIE_SECRET,
//     cookieLifetime: 60 * 60 * 8,
//     storeIdToken: true,
//     storeAccessToken: true,
//     storeRefreshToken: true,
//   },
// });