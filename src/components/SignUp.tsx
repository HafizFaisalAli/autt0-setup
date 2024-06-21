// "use client";

// import { useUser } from "@auth0/nextjs-auth0/client";

// import { useState } from "react";

// export default function SignUp() {
//   const { user, error, isLoading } = useUser();
//   if (!isLoading) return <>Loading...</>;
//   if (error) return <div>error.message</div>;
//   return user ? (
//     <div>
//       <h1>Logged in</h1>
//       <div>
//         <h1>Do you wish to log out? </h1>
//         <button>
//           {user.name}
//           <a href="/api/auth/logout">Logout</a>
//         </button>
//       </div>
//     </div>
//   ) : (
//     <div>
//       <div>
//         <a href="/api/auth/login">Login</a>
//       </div>
//     </div>
//   );
// }

"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function SignUp() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
