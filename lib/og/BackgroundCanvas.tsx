import { ReactNode } from "react";

export const BackgroundCanvas = ({ children }: { children?: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "linear-gradient(to right, #e8cbc0, #636fa4)",
        padding: "32px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          padding: "64px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
