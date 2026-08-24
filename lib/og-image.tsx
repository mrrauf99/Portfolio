type OgFrameProps = {
  eyebrow: string;
  title: string;
  titleSize?: number;
  description?: string;
  descriptionMaxWidth?: number;
};

export function ogFrame({
  eyebrow,
  title,
  titleSize = 96,
  description,
  descriptionMaxWidth = 800,
}: OgFrameProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#FAFAF7",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 56,
          left: 56,
          width: 48,
          height: 48,
          borderTop: "3px solid #B5602F",
          borderLeft: "3px solid #B5602F",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 56,
          right: 56,
          width: 48,
          height: 48,
          borderBottom: "3px solid #B5602F",
          borderRight: "3px solid #B5602F",
        }}
      />
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#B5602F",
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: titleSize,
          fontWeight: 700,
          color: "#17140F",
          marginTop: 20,
        }}
      >
        {title}
      </div>
      {description && (
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#6B655A",
            marginTop: 24,
            maxWidth: descriptionMaxWidth,
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
}
