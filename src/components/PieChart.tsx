import { useState } from 'react';

interface Slice {
  label: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: Slice[];
  title: string;
  question?: string;
}

export default function PieChart({ data, title, question }: PieChartProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const total = data.reduce((s, d) => s + d.value, 0);

  let cumulativeAngle = -90;
  const slices = data.map((d, i) => {
    const angle = (d.value / total) * 360;
    const startAngle = cumulativeAngle;
    cumulativeAngle += angle;
    const endAngle = cumulativeAngle;

    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const cx = 80, cy = 80, r = hovered === i ? 76 : 70;
    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));
    const largeArc = angle > 180 ? 1 : 0;

    return {
      ...d,
      path: `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`,
      midAngle: startAngle + angle / 2,
    };
  });

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{title}</h3>
      {question && <p className="text-xs text-gray-400 mb-3 leading-relaxed">{question}</p>}
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 160 160" className="w-36 h-36 flex-shrink-0">
          {slices.map((s, i) => (
            <path
              key={i}
              d={s.path}
              fill={s.color}
              opacity={hovered === null || hovered === i ? 1 : 0.55}
              className="transition-all duration-200 cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
          <circle cx="80" cy="80" r="38" fill="white" />
          {hovered !== null ? (
            <>
              <text x="80" y="76" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1f2937">
                {((data[hovered].value / total) * 100).toFixed(1)}%
              </text>
              <text x="80" y="90" textAnchor="middle" fontSize="7" fill="#6b7280">
                {data[hovered].label}
              </text>
            </>
          ) : (
            <>
              <text x="80" y="76" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1f2937">
                {total.toLocaleString()}
              </text>
              <text x="80" y="90" textAnchor="middle" fontSize="7" fill="#6b7280">
                responses
              </text>
            </>
          )}
        </svg>
        <div className="flex flex-col gap-2 min-w-0">
          {data.map((d, i) => (
            <div
              key={i}
              className="flex items-center gap-2 cursor-pointer group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-125" style={{ background: d.color }} />
              <span className="text-xs text-gray-600 truncate">{d.label}</span>
              <span className="text-xs font-semibold text-gray-800 ml-auto pl-1 flex-shrink-0">
                {((d.value / total) * 100).toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
