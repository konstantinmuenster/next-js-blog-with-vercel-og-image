export const BlogPostContent = ({ title }: { title: string }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "720px" }}
    >
      <span
        style={{
          fontFamily: "'Noto Sans', sans-serif",
          fontWeight: 700,
          fontSize: "48px",
          lineHeight: "56px",
          color: "#222",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontFamily: "'Noto Sans', sans-serif",
          fontWeight: 500,
          fontSize: "22px",
          color: "#222",
          marginTop: "16px",
          marginBottom: "32px",
        }}
      >
        By Your Name
      </span>
    </div>
  );
};
