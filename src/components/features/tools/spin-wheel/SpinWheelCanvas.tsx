import { type WheelSegment } from "@/utils/tools/spin-wheel/spinWheelUtils";
import { calculateSegmentPath } from "@/utils/tools/spin-wheel/spinWheelUtils";
interface SpinWheelCanvasProps {
  segments: WheelSegment[];
  rotation: number;
  isSpinning: boolean;
}

export default function SpinWheelCanvas({
  segments,
  rotation,
  isSpinning,
}: SpinWheelCanvasProps) {
  const spinDuration = isSpinning ? 5 : 0;

  return (
    <div className="flex-1 relative flex items-center justify-center min-h-100">
      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-purple-500/10 to-transparent blur-[80px] rounded-full pointer-events-none" />

      {/* Pointer */}
      <div className="absolute top-[calc(50%-185px)] md:top-[calc(50%-225px)] left-1/2 -translate-x-1/2 z-30 rotate-180">
        <div className="relative">
          <div
            className="
              w-0 h-0
              border-l-14 border-l-transparent
              border-r-14 border-r-transparent
              border-b-28 border-b-white
              drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]
            "
          />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/40 blur-xl rounded-full" />
        </div>
      </div>

      {/* Wheel */}
      <div
        className="relative size-80 md:size-105 rounded-full shadow-[0_0_60px_rgba(14,165,233,0.15)] border-4 border-white/20 glass-panel overflow-hidden"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning
            ? `transform ${spinDuration}s cubic-bezier(0.17, 0.67, 0.12, 0.99)`
            : "none",
        }}
      >
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
        >
          {segments.length > 0 ? (
            segments.map((segment, index) => (
              <g key={index}>
                <path
                  d={calculateSegmentPath(segment.startAngle, segment.endAngle)}
                  fill={segment.color}
                  stroke="#1e293b"
                  strokeWidth="0.5"
                />
                <text
                  x="50"
                  y="50"
                  fontSize="4"
                  fontWeight="700"
                  fill="#0f172a"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{
                    writingMode: "vertical-rl",
                    paintOrder: "stroke",
                    stroke: "rgba(255,255,255,0.85)",
                    strokeWidth: 0.6,
                  }}
                  transform={`
                    rotate(${
                      segment.startAngle +
                      (segment.endAngle - segment.startAngle) / 2
                    } 50 50)
                    translate(0 -32)
                  `}
                >
                  {segment.name}
                </text>
              </g>
            ))
          ) : (
            // Default wheel when no entries
            <>
              <circle cx="50" cy="50" r="50" fill="#1e293b" opacity="0.5" />
              <text
                x="50"
                y="50"
                fill="white"
                fontSize="5"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                opacity="0.3"
              >
                Add Entries
              </text>
            </>
          )}

          {/* Center circle */}
          <circle
            cx="50"
            cy="50"
            r="12"
            fill="#0f172a"
            stroke="#ffffff"
            strokeOpacity="0.2"
            strokeWidth="2"
          />
          <circle cx="50" cy="50" r="4" fill="#0ea5e9" />
        </svg>
      </div>
    </div>
  );
}
