import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {

  response.status(200).json({
    body: {
        message:"Todo Ok"
    },
    query: request.query,
    cookies: request.cookies,
  });
}