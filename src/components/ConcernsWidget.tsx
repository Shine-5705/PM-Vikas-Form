import { concernsData } from '../data/surveyData';

export default function ConcernsWidget() {
  const total = concernsData.hasConcerns + concernsData.noConcerns + concernsData.noFeedback;
  const concernsPct = ((concernsData.hasConcerns / total) * 100).toFixed(1);
  const noConcernsPct = ((concernsData.noConcerns / total) * 100).toFixed(1);
  const noFeedbackPct = ((concernsData.noFeedback / total) * 100).toFixed(1);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-0.5">Concerns & Feedback</h3>
      <p className="text-xs text-gray-400 mb-4">Phase 3 — Do you have any concerns?</p>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="flex items-center gap-2 text-xs text-gray-600 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
              Have Concerns
            </span>
            <span className="text-xs font-bold text-gray-700">{concernsData.hasConcerns} <span className="text-gray-400 font-normal">({concernsPct}%)</span></span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-red-400 rounded-full transition-all duration-700" style={{ width: `${concernsPct}%` }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="flex items-center gap-2 text-xs text-gray-600 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              No Concerns
            </span>
            <span className="text-xs font-bold text-gray-700">{concernsData.noConcerns} <span className="text-gray-400 font-normal">({noConcernsPct}%)</span></span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-400 rounded-full transition-all duration-700" style={{ width: `${noConcernsPct}%` }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="flex items-center gap-2 text-xs text-gray-600 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" />
              No Feedback
            </span>
            <span className="text-xs font-bold text-gray-700">{concernsData.noFeedback} <span className="text-gray-400 font-normal">({noFeedbackPct}%)</span></span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gray-300 rounded-full transition-all duration-700" style={{ width: `${noFeedbackPct}%` }} />
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-400">Total respondents</span>
        <span className="text-sm font-bold text-gray-700">{total.toLocaleString()}</span>
      </div>
    </div>
  );
}
