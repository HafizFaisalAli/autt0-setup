// pages/api/check-session.ts
import { NextApiRequest, NextApiResponse } from "next";
import {
  getSession,
  getAccessToken,
  withApiAuthRequired,
} from "@auth0/nextjs-auth0";

export const GET = withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    if (!session) {
      return res.status(401).json({
        error: "not_authenticated",
        description:
          "The user does not have an active session or is not authenticated",
      });
    }

    // If session exists, user is authenticated
    const { user }: any = session;
    return res.status(200).json({
      message: "User is authenticated",
      user,
    });
  }
);
