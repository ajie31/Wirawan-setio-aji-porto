export const ToolsOverlay = ({
  innerWidth,
  innerHeight,
  handleCursorPosition,
}) => (
  <>
    <rect
      width={innerWidth}
      height={innerHeight}
      opacity="0"
      onMouseMove={(e) => handleCursorPosition(e)}
    />
  </>
);
