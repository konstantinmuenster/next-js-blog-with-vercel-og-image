export const ProfileContent = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", marginTop: "80px" }}>
        <img
          alt="Vercel"
          height={180}
          src="data:image/svg+xml,%3Csvg width='116' height='100' fill='black' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E"
          width={180}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "48px",
          }}
        >
          <span
            style={{
              fontSize: "56px",
              color: "#222",
              paddingTop: "32px",
              fontFamily: "'Noto Sans', sans-serif",
              fontWeight: 700,
            }}
          >
            Your Name
          </span>
          <span
            style={{
              fontSize: "28px",
              color: "#222",
              fontFamily: "'Noto Sans', sans-serif",
              fontWeight: 500,
            }}
          >
            Frontend Developer
          </span>
        </div>
      </div>
      <span
        style={{
          fontSize: "18px",
          color: "#222",
          fontFamily: "'Noto Sans', sans-serif",
          fontWeight: 500,
        }}
      >
        yourname.com
      </span>
    </div>
  );
};
