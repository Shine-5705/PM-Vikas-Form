import { X } from 'lucide-react';
import { q1Data, q2Data, q3Data, q4Data, q5Data, q6Data, q7Data, q8Data, q9Data, q10Data, q11Data } from '../data/surveyData';

const questions = [
  { q: "Q1. How did you come to know about PM VIKAS scheme?", data: q1Data },
  { q: "Q2. Have you completed your training under PM VIKAS?", data: q2Data },
  { q: "Q3. Are you currently employed or self-employed?", data: q3Data },
  { q: "Q4. Did you receive a job offer or placement opportunity after training?", data: q4Data },
  { q: "Q5. Is your current job related to the training you received?", data: q5Data },
  { q: "Q6. How satisfied are you with your current job or livelihood?", data: q6Data },
  { q: "Q7. What is your current monthly income range?", data: q7Data },
  { q: "Q8. Did your training adequately prepare you for this job?", data: q8Data },
  { q: "Q9. Did your training provider (PIA) support you in getting a job?", data: q9Data },
  { q: "Q10. Are you still continuing in the same job after 3 months?", data: q10Data },
  { q: "Q11. Would you recommend PM VIKAS training to others?", data: q11Data },
];

function MiniBar({ data }: { data: { label: string; value: number; color: string }[] }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  return (
    <div className="space-y-1.5">
      {data.map((d, i) => (
        <div key={i}>
          <div className="flex justify-between text-xs mb-0.5">
            <span className="text-gray-600">{d.label}</span>
            <span className="font-semibold text-gray-700">{d.value.toLocaleString()} ({((d.value / total) * 100).toFixed(1)}%)</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${(d.value / total) * 100}%`, background: d.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

interface Props { onClose: () => void }

export default function NPSDialog({ onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-3xl">
          <div>
            <h2 className="text-lg font-bold text-white">IVR Questionnaire Responses</h2>
            <p className="text-xs text-blue-200">PM VIKAS Trainee Feedback — All 11 Questions</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
          >
            <X size={16} className="text-white" />
          </button>
        </div>
        <div className="overflow-y-auto flex-1 px-6 py-4 space-y-5">
          {questions.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-4 hover:border-blue-200 transition-colors">
              <p className="text-sm font-semibold text-gray-700 mb-3">{item.q}</p>
              <MiniBar data={item.data} />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-400">
                  Total: {item.data.reduce((s, d) => s + d.value, 0).toLocaleString()} responses
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 rounded-b-3xl">
          <p className="text-xs text-gray-400 text-center">Data from IVR survey — Jan 2025 to Apr 2025 · 1,248 total responses</p>
        </div>
      </div>
    </div>
  );
}
