import { useState } from 'react';
import { responseBreakdown } from '../data/surveyData';

export default function ResponseHistogram() {
  const [hovered, setHovered] = useState<number | null>(null);

  const maxTotal = Math.max(...responseBreakdown.map(d => d.total));

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Positive vs Negative Responses per Question</h3>
      <p className="text-xs text-gray-400 mb-4">Stacked response count across all 11 IVR questions</p>
      <div className="flex items-end gap-1.5 h-44 overflow-x-auto pb-1">
        {responseBreakdown.map((d, i) => (
          <div
            key={i}
            className="flex flex-col items-center flex-1 min-w-[52px] cursor-pointer group"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === i && (
              <div className="absolute z-10 bg-gray-800 text-white text-xs rounded-lg px-3 py-2 -mt-16 pointer-events-none whitespace-nowrap shadow-lg">
                <div className="font-semibold mb-1">{d.question}</div>
                <div className="text-green-300">Positive: {d.positive.toLocaleString()}</div>
                <div className="text-red-300">Negative: {d.negative.toLocaleString()}</div>
              </div>
            )}
            <div className="relative flex flex-col w-full rounded-t-md overflow-hidden" style={{ height: `${(d.total / maxTotal) * 140}px` }}>
              <div
                className="w-full transition-all duration-300"
                style={{
                  height: `${(d.negative / d.total) * 100}%`,
                  background: '#ef4444',
                  opacity: hovered === null || hovered === i ? 1 : 0.4,
                }}
              />
              <div
                className="w-full transition-all duration-300"
                style={{
                  height: `${(d.positive / d.total) * 100}%`,
                  background: '#10b981',
                  opacity: hovered === null || hovered === i ? 1 : 0.4,
                }}
              />
            </div>
            <span className="text-xs text-gray-500 mt-1 font-medium">{d.question}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-3">
        <span className="flex items-center gap-1.5 text-xs text-gray-500"><span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" /> Positive</span>
        <span className="flex items-center gap-1.5 text-xs text-gray-500"><span className="w-3 h-3 rounded-sm bg-red-500 inline-block" /> Negative</span>
      </div>
    </div>
  );
}
