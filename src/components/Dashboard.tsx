import { Users, TrendingUp, BarChart2, CheckCircle } from 'lucide-react';
import StatCard from './StatCard';
import PieChart from './PieChart';
import BarChart from './BarChart';
import ResponseHistogram from './ResponseHistogram';
import WordCloud from './WordCloud';
import NPSGauge from './NPSGauge';
import KeyAreasTable from './KeyAreasTable';
import ConcernsWidget from './ConcernsWidget';
import {
  surveyMetadata,
  q1Data, q5Data, q6Data, q7Data, q10Data,
  positiveKeywords, negativeKeywords, phase3Keywords,
} from '../data/surveyData';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
              <BarChart2 size={18} className="text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold text-gray-800 leading-none">PM VIKAS Analytics</h1>
              <p className="text-xs text-gray-400 mt-0.5">IVR Trainee Feedback Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-xs text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
              {surveyMetadata.dateRange}
            </span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
              Live Data
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {/* Section: Overview Stats */}
        <section>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              label="Total Responses"
              value={surveyMetadata.totalResponses.toLocaleString()}
              sub="Across all 11 questions"
              color="text-blue-600"
              icon={<Users size={18} className="text-blue-500" />}
            />
            <StatCard
              label="Completion Rate"
              value={`${surveyMetadata.completionRate}%`}
              sub="IVR survey completion"
              color="text-emerald-600"
              icon={<CheckCircle size={18} className="text-emerald-500" />}
            />
            <StatCard
              label="Avg Response Time"
              value={surveyMetadata.avgResponseTime}
              sub="Per respondent"
              color="text-amber-600"
              icon={<TrendingUp size={18} className="text-amber-500" />}
            />
            <StatCard
              label="NPS Score"
              value="+55"
              sub="Excellent benchmark"
              color="text-emerald-600"
              icon={<BarChart2 size={18} className="text-emerald-500" />}
            />
          </div>
        </section>

        {/* Section: Key Insights — only the charts that matter */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key Insights</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <PieChart
              data={q1Data}
              title="Q1. Awareness Channel"
              question="How did you come to know about PM VIKAS scheme?"
            />
            <PieChart
              data={q5Data}
              title="Q5. Job Relevance"
              question="Is your current job related to the training you received?"
            />
            <PieChart
              data={q6Data}
              title="Q6. Job Satisfaction"
              question="How satisfied are you with your current job or livelihood?"
            />
            <BarChart
              data={q7Data}
              title="Q7. Monthly Income Range"
              question="What is your current monthly income range?"
              horizontal
            />
            <PieChart
              data={q10Data}
              title="Q10. Job Retention (3 months)"
              question="Are you still continuing in the same job after 3 months?"
            />
            <NPSGauge />
          </div>
        </section>

        {/* Section: Response Overview Histogram */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Response Breakdown — All 11 Questions</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <ResponseHistogram />
        </section>

        {/* Section: Word Clouds */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Keyword Analysis — Word Clouds</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WordCloud
              words={positiveKeywords}
              title="Areas Doing Fine"
              subtitle="Keywords from positive feedback responses"
              positiveColor={true}
            />
            <WordCloud
              words={negativeKeywords}
              title="Key Areas to Improve"
              subtitle="Keywords from feedback highlighting issues"
              positiveColor={false}
            />
          </div>
        </section>

        {/* Section: Phase 3 */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phase 3 — Open Feedback</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <WordCloud
                words={phase3Keywords}
                title="Open Feedback Word Cloud"
                subtitle="All keywords from Phase 3 open-ended responses"
              />
            </div>
            <ConcernsWidget />
          </div>
        </section>

        {/* Section: Key Areas Table */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key Areas to Improve — Detailed View</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <KeyAreasTable />
        </section>

      </main>

      <footer className="text-center py-6 text-xs text-gray-400 border-t border-gray-200 mt-8 bg-white">
        PM VIKAS IVR Feedback Analytics · Data period: {surveyMetadata.dateRange} · {surveyMetadata.totalResponses.toLocaleString()} total responses
      </footer>
    </div>
  );
}
