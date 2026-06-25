import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alexandra Hockett — Full Stack Developer & AI Integration Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  return new ImageResponse(
    (
      <img
        src={`${baseUrl}/logo-video.png`}
        style={{ width: "1200px", height: "630px", objectFit: "cover" }}
      />
    ),
    { ...size }
  );
}
