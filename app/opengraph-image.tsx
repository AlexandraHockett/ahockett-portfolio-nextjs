import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alexandra Hockett — Full Stack & AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <img
        src="https://alexandrahockett.com/logo-video.png"
        style={{ width: "1200px", height: "630px", objectFit: "cover" }}
      />
    ),
    { ...size }
  );
}
