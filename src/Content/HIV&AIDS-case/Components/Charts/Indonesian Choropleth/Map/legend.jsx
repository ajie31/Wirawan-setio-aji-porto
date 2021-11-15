const padding = 0.7;

const offsetY = 22;

const barWidth = 60;
const barHeight = 8;
const height = 12;

const mainColor = "#635F5D";
const secondaryColor = " #8E8883";
const textPadding = 10;

export const Legend = ({ colorScale, innerWidth }) => {
  const ticks = ["No Data", ...colorScale.ticks(5)];
  return (
    <g
      transform={`translate(${
        (innerWidth - barWidth * 5 + 10) / 2
      },${offsetY})`}
      className="legend-group"
    >
      {ticks.map((tick, i) => {
        return i === 0 ? (
          <g key={i} className="legend-mark">
            <rect
              width={barWidth}
              height={barHeight}
              stroke={mainColor}
              strokeWidth={0.2}
              fill="#b3b3b3"
            />
            <g transform={`translate(${barWidth / 2},0)`} className="tick">
              <text
                dy={height + textPadding}
                fill={secondaryColor}
                fontSize="11"
                textAnchor="middle"
              >
                {tick}
              </text>
            </g>
          </g>
        ) : (
          <g
            key={i}
            transform={`translate(${10 + i * barWidth},0)`}
            className="legend-mark"
          >
            <rect
              width={barWidth}
              height={barHeight}
              stroke={mainColor}
              strokeWidth={0.2}
              fill={colorScale(tick)}
            />
            <g className="tick">
              <line stroke={mainColor} strokeWidth={0.7} y2={height} />
              <text
                dy={height + textPadding}
                fill={secondaryColor}
                fontSize="11"
                textAnchor="middle"
              >
                {tick}
              </text>
            </g>
          </g>
        );
      })}
    </g>
  );
};
