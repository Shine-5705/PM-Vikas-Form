import { keyAreasData } from '../data/surveyData';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

const severityConfig = {
  High: { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', icon: AlertTriangle, dot: 'bg-red-500' },
  Medium: { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', icon: AlertCircle, dot: 'bg-amber-500' },
  Low: { color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', icon: Info, dot: 'bg-blue-400' },
};

export default function KeyAreasTable() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Key Areas to Improve</h3>
        <p className="text-xs text-gray-400 mt-0.5">Identified from open feedback and response patterns</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide w-8">#</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Area</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden md:table-cell">Issue Identified</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Severity</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Mentions</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide hidden lg:table-cell">Suggested Action</th>
            </tr>
          </thead>
          <tbody>
            {keyAreasData.map((row, i) => {
              const cfg = severityConfig[row.severity as keyof typeof severityConfig];
              const Icon = cfg.icon;
              return (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/70 transition-colors">
                  <td className="px-4 py-3 text-xs font-bold text-gray-400">{i + 1}</td>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-gray-800 text-xs">{row.area}</span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className="text-xs text-gray-500">{row.issue}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${cfg.color} ${cfg.bg} ${cfg.border}`}>
                      <Icon size={11} />
                      {row.severity}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-800">{row.frequency}</span>
                      <span className="text-xs text-gray-400">({row.respondents})</span>
                    </div>
                    <div className="w-16 h-1 bg-gray-100 rounded-full mt-1">
                      <div
                        className={`h-full rounded-full ${cfg.dot}`}
                        style={{ width: row.respondents }}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    <span className="text-xs text-gray-500 leading-relaxed">{row.suggestion}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
