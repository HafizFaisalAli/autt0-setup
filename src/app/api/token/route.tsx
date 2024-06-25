import type { NextApiRequest, NextApiResponse } from "next";
import request from "request";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const options = {
      method: "POST",
      url: "https://dev-q53dzuk0m4ze6hvy.us.auth0.com/oauth/token",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        client_id: "HQ7iirlUypFNP5lxMtqQVeV9MDkjT6cK",
        client_secret:
          "7lqrIEtRmt93YN4O7xUyKdltKEZpQV5mIquMMmOQKEpL_ylpUWvOiZqGibLVam92",
        audience: "https:/myapi",
        grant_type: "client_credentials",
      }),
    };

    request(options, (error, response, body) => {
      if (error) {
        console.error("Error getting token:", error);
        res.status(500).json({ error: "Failed to get token" });
      } else {
        console.log("Response status code:", response.statusCode);
        console.log("Response body:", body);
        res.status(response.statusCode).json(JSON.parse(body));
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
