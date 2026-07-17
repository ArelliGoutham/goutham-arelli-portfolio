import { ImageResponse } from "next/og";
import { getAllPosts, getPost } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  try {
    return getAllPosts().map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post;
  try {
    post = getPost(slug);
  } catch {
    return new ImageResponse(
      (
        <div
          style={{
            width: "1200px",
            height: "630px",
            background: "#0a1628",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "white", fontSize: "48px", fontWeight: "bold" }}>
            Goutham Arelli
          </span>
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  const formatted = new Date(`${post.date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0a1628 0%, #0b2a4a 55%, #0a1628 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#0b4f9c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.05em",
            }}
          >
            GA
          </div>
          <span
            style={{
              color: "#8fa8c8",
              fontSize: "15px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Goutham Arelli · Blog
          </span>
        </div>

        {/* Title block */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "40px",
            paddingBottom: "32px",
          }}
        >
          {/* Tags */}
          {post.tags.length > 0 && (
            <div style={{ display: "flex", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(11, 79, 156, 0.25)",
                    color: "#93c5fd",
                    padding: "5px 14px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(11, 79, 156, 0.45)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <span
            style={{
              color: "white",
              fontSize: post.title.length > 60 ? "40px" : "50px",
              fontWeight: "700",
              lineHeight: "1.18",
              letterSpacing: "-0.02em",
              maxWidth: "960px",
            }}
          >
            {post.title}
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "24px",
          }}
        >
          <span style={{ color: "#5b7fa0", fontSize: "15px" }}>{formatted}</span>
          <span style={{ color: "#0b4f9c", fontSize: "15px", letterSpacing: "0.04em" }}>
            goutham-arelli.vercel.app
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
