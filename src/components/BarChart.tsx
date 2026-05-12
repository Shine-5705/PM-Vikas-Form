import { useState } from 'react';

interface BarData {
  label: string;
  value: number;
  color: string;
}

interface BarChartProps {
  data: BarData[];
  title: string;
  question?: string;
  horizontal?: boolean;
}

export default function BarChart({ data, title, question, horizontal = false }: BarChartProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const max = Math.max(...data.map(d => d.value));
  const total = data.reduce((s, d) => s + d.value, 0);

  if (horizontal) {
    return (
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{title}</h3>
        {question && <p className="text-xs text-gray-400 mb-4 leading-relaxed">{question}</p>}
        <div className="space-y-3">
          {data.map((d, i) => (
            <div key={i} className="group" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-600 font-medium">{d.label}</span>
                <span className="text-xs font-semibold text-gray-800">{d.value.toLocaleString()} <span className="text-gray-400 font-normal">({((d.value / total) * 100).toFixed(1)}%)</span></span>
              </div>
              <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out flex items-center justify-end pr-2"
                  style={{
                    width: `${(d.value / max) * 100}%`,
                    background: d.color,
                    opacity: hovered === null || hovered === i ? 1 : 0.5,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-0.5">{title}</h3>
      {question && <p className="text-xs text-gray-400 mb-4 leading-relaxed">{question}</p>}
      <div className="flex items-end gap-2 h-40 mt-2">
        {data.map((d, i) => (
          <div
            key={i}
            className="flex flex-col items-center flex-1 group cursor-pointer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className={`text-xs font-bold mb-1 transition-opacity ${hovered === i ? 'opacity-100' : 'opacity-0'}`} style={{ color: d.color }}>
              {d.value}
            </span>
            <div
              className="w-full rounded-t-lg transition-all duration-300"
              style={{
                height: `${(d.value / max) * 120}px`,
                background: d.color,
                opacity: hovered === null || hovered === i ? 1 : 0.5,
              }}
            />
            <span className="text-xs text-gray-500 mt-1 text-center leading-tight">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
