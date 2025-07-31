import { ImageResponse } from "next/og";
import { sortedPosts } from "@/lib/utils";

export const runtime = "edge";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = sortedPosts.find((p) => p._meta.path === slug);

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Post Not Found
      </div>,
      {
        ...size,
      }
    );
  }

  return new ImageResponse(
    <div
      style={{
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "80px",
        fontFamily: "Geist Sans, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
            textAlign: "left",
          }}
        >
          {post.title}
        </h1>
        {post.description && (
          <p
            style={{
              fontSize: "32px",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.4,
              marginBottom: "40px",
            }}
          >
            {post.description}
          </p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "24px",
          }}
        >
          <span>{post.time}</span>
        </div>
        <div
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          noelrohi.com
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
