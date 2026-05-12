import { useState } from 'react';
import { npsData } from '../data/surveyData';
import NPSDialog from './NPSDialog';

export default function NPSGauge() {
  const [open, setOpen] = useState(false);
  const score = npsData.score;
  const total = npsData.total;

  // Gauge arc: -180deg to 0deg semicircle
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const cx = 110, cy = 110, r = 85;
  const startAngle = 180;
  const endAngle = 0;
  const scoreAngle = 180 - ((score + 100) / 200) * 180;

  const needleX = cx + r * Math.cos(toRad(scoreAngle));
  const needleY = cy - r * Math.sin(toRad(scoreAngle - 180));

  const gaugeColor = score >= 50 ? '#10b981' : score >= 0 ? '#f59e0b' : '#ef4444';
  const label = score >= 50 ? 'Excellent' : score >= 20 ? 'Good' : score >= 0 ? 'Fair' : 'Poor';

  const promoterPct = ((npsData.promoters / total) * 100).toFixed(1);
  const passivePct = ((npsData.passives / total) * 100).toFixed(1);
  const detractorPct = ((npsData.detractors / total) * 100).toFixed(1);

  return (
    <>
      <div
        className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setOpen(true)}
      >
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Net Promoter Score</h3>
            <p className="text-xs text-gray-400">Based on Q11: Would you recommend PM VIKAS?</p>
          </div>
          <span className="text-xs bg-blue-50 text-blue-600 font-medium px-2 py-1 rounded-full border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">
            View All 11 Qs
          </span>
        </div>

        <div className="flex flex-col items-center">
          <svg viewBox="0 0 220 130" className="w-full max-w-xs">
            {/* Background track */}
            <path
              d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
              fill="none" stroke="#f3f4f6" strokeWidth="18" strokeLinecap="round"
            />
            {/* Poor zone */}
            <path
              d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx - r * Math.cos(toRad(150))} ${cy - r * Math.sin(toRad(150 - 180))}`}
              fill="none" stroke="#fee2e2" strokeWidth="18" strokeLinecap="butt"
            />
            {/* Fair zone */}
            <path
              d={`M ${cx + r * Math.cos(toRad(150))} ${cy - r * Math.sin(toRad(150 - 180))} A ${r} ${r} 0 0 1 ${cx + r * Math.cos(toRad(60))} ${cy - r * Math.sin(toRad(60 - 180))}`}
              fill="none" stroke="#fef3c7" strokeWidth="18" strokeLinecap="butt"
            />
            {/* Good zone */}
            <path
              d={`M ${cx + r * Math.cos(toRad(60))} ${cy - r * Math.sin(toRad(60 - 180))} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
              fill="none" stroke="#d1fae5" strokeWidth="18" strokeLinecap="round"
            />
            {/* Needle */}
            <line
              x1={cx} y1={cy}
              x2={cx + (r - 10) * Math.cos(toRad(scoreAngle))}
              y2={cy + (r - 10) * Math.sin(toRad(scoreAngle))}
              stroke={gaugeColor} strokeWidth="3" strokeLinecap="round"
            />
            <circle cx={cx} cy={cy} r="5" fill={gaugeColor} />
            <text x={cx} y={cy - 20} textAnchor="middle" fontSize="28" fontWeight="800" fill={gaugeColor}>{score}</text>
            <text x={cx} y={cy - 6} textAnchor="middle" fontSize="10" fill="#6b7280">{label}</text>
            <text x="18" y="125" fontSize="8" fill="#9ca3af">-100</text>
            <text x="195" y="125" fontSize="8" fill="#9ca3af">+100</text>
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="text-center bg-emerald-50 rounded-xl py-2.5 px-1">
            <div className="text-lg font-bold text-emerald-600">{npsData.promoters.toLocaleString()}</div>
            <div className="text-xs text-emerald-500 font-medium">Promoters</div>
            <div className="text-xs text-gray-400">{promoterPct}%</div>
          </div>
          <div className="text-center bg-gray-50 rounded-xl py-2.5 px-1">
            <div className="text-lg font-bold text-gray-500">{npsData.passives.toLocaleString()}</div>
            <div className="text-xs text-gray-400 font-medium">Passives</div>
            <div className="text-xs text-gray-400">{passivePct}%</div>
          </div>
          <div className="text-center bg-red-50 rounded-xl py-2.5 px-1">
            <div className="text-lg font-bold text-red-500">{npsData.detractors.toLocaleString()}</div>
            <div className="text-xs text-red-400 font-medium">Detractors</div>
            <div className="text-xs text-gray-400">{detractorPct}%</div>
          </div>
        </div>
      </div>
      {open && <NPSDialog onClose={() => setOpen(false)} />}
    </>
  );
}
