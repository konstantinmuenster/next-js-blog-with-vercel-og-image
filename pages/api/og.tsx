import { ImageResponse } from "@vercel/og";
import { NextApiHandler } from "next";
import {
  BackgroundCanvas,
  BlogPostContent,
  ProfileContent,
} from "../../lib/og";

export const config = {
  runtime: "edge",
};

const fetchNotoSansMedium = fetch(
  new URL("../../public/fonts/NotoSans-Medium.ttf", import.meta.url).href
).then((res) => res.arrayBuffer());

const fetchNotoSansBold = fetch(
  new URL("../../public/fonts/NotoSans-Bold.ttf", import.meta.url).href
).then((res) => res.arrayBuffer());

const handler: NextApiHandler = async (req) => {
  const NotoSansBold = await fetchNotoSansBold;
  const NotoSansMedium = await fetchNotoSansMedium;

  const { searchParams } = new URL(req.url);

  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title") : undefined;

  const Content = hasTitle ? (
    <BlogPostContent title={title} />
  ) : (
    <ProfileContent />
  );

  try {
    return new ImageResponse(<BackgroundCanvas>{Content}</BackgroundCanvas>, {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans",
          data: NotoSansBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Noto Sans",
          data: NotoSansMedium,
          style: "normal",
          weight: 500,
        },
      ],
    });
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};

export default handler;
