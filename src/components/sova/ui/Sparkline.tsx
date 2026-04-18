import { useMemo } from "react";

interface SparklineProps {
  values: number[];
  width?: number;
  height?: number;
  color?: string;
  showArea?: boolean;
  showDot?: boolean;
  animated?: boolean;
  className?: string;
}

export function Sparkline({
  values,
  width = 64,
  height = 24,
  color = "hsl(var(--amber))",
  showArea = true,
  showDot = true,
  animated = true,
  className = "",
}: SparklineProps) {
  const { line, area, lastPoint } = useMemo(() => {
    if (values.length < 2) return { line: "", area: "", lastPoint: { x: 0, y: 0 } };
    
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const padding = 2;
    
    const points = values.map((v, i) => {
      const x = (i / (values.length - 1)) * width;
      const y = height - padding - ((v - min) / range) * (height - padding * 2);
      return { x, y };
    });
    
    const lineStr = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');
    const areaStr = `${lineStr} L${width},${height} L0,${height} Z`;
    
    return { 
      line: lineStr, 
      area: areaStr, 
      lastPoint: points[points.length - 1] 
    };
  }, [values, width, height]);

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`}
      className={className}
    >
      <defs>
        <linearGradient id="sparkline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {showArea && (
        <path
          d={area}
          fill="url(#sparkline-gradient)"
          className={animated ? "animate-[fadeIn_600ms_ease-out]" : ""}
        />
      )}
      
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={animated ? "animate-[drawLine_800ms_ease-out]" : ""}
        style={animated ? { 
          strokeDasharray: width * 2, 
          strokeDashoffset: 0,
        } : undefined}
      />
      
      {showDot && lastPoint && (
        <g>
          <circle
            cx={lastPoint.x}
            cy={lastPoint.y}
            r="4"
            fill={color}
            fillOpacity="0.2"
            className={animated ? "animate-pulse" : ""}
          />
          <circle
            cx={lastPoint.x}
            cy={lastPoint.y}
            r="2"
            fill={color}
          />
        </g>
      )}
    </svg>
  );
}
