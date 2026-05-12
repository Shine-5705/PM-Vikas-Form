export const surveyMetadata = {
  totalResponses: 1248,
  completionRate: 87.4,
  avgResponseTime: "2m 34s",
  dateRange: "Jan 2025 – Apr 2025",
};

// Q1: How did you come to know about PM VIKAS scheme?
export const q1Data = [
  { label: "Social Media", value: 412, color: "#3b82f6" },
  { label: "Newspaper", value: 287, color: "#10b981" },
  { label: "Training Institute / PIA", value: 398, color: "#f59e0b" },
  { label: "Any Other Medium", value: 151, color: "#ef4444" },
];

// Q2: Have you completed your training?
export const q2Data = [
  { label: "Yes", value: 1089, color: "#10b981" },
  { label: "No", value: 159, color: "#ef4444" },
];

// Q3: Are you currently employed or self-employed?
export const q3Data = [
  { label: "Yes", value: 876, color: "#10b981" },
  { label: "No", value: 372, color: "#ef4444" },
];

// Q4: Did you receive a job offer or placement opportunity?
export const q4Data = [
  { label: "Yes", value: 794, color: "#10b981" },
  { label: "No", value: 454, color: "#ef4444" },
];

// Q5: Is your current job related to the training?
export const q5Data = [
  { label: "Yes", value: 521, color: "#10b981" },
  { label: "No", value: 389, color: "#ef4444" },
  { label: "Partially", value: 338, color: "#f59e0b" },
];

// Q6: How satisfied are you with your current job?
export const q6Data = [
  { label: "Very Satisfied", value: 398, color: "#10b981" },
  { label: "Satisfied", value: 512, color: "#3b82f6" },
  { label: "Not Satisfied", value: 338, color: "#ef4444" },
];

// Q7: Current monthly income range
export const q7Data = [
  { label: "Below ₹10,000", value: 312, color: "#ef4444" },
  { label: "₹10,000–₹15,000", value: 489, color: "#f59e0b" },
  { label: "Above ₹15,000", value: 447, color: "#10b981" },
];

// Q8: Did training adequately prepare you?
export const q8Data = [
  { label: "Yes", value: 821, color: "#10b981" },
  { label: "No", value: 427, color: "#ef4444" },
];

// Q9: Did PIA support you in getting a job?
export const q9Data = [
  { label: "Yes", value: 734, color: "#10b981" },
  { label: "No", value: 514, color: "#ef4444" },
];

// Q10: Still continuing in the same job after 3 months?
export const q10Data = [
  { label: "Yes", value: 612, color: "#10b981" },
  { label: "No", value: 287, color: "#ef4444" },
  { label: "Not Applicable", value: 349, color: "#6b7280" },
];

// Q11: Would you recommend PM VIKAS to others?
export const q11Data = [
  { label: "Yes", value: 967, color: "#10b981" },
  { label: "No", value: 281, color: "#ef4444" },
];

// NPS Score calculation based on Q11
// Promoters = Yes, Detractors = No, Passives = 0
export const npsData = {
  promoters: 967,
  passives: 0,
  detractors: 281,
  total: 1248,
  score: Math.round(((967 - 281) / 1248) * 100),
};

// Positive feedback keywords
export const positiveKeywords = [
  { text: "good training", value: 312 },
  { text: "placement", value: 278 },
  { text: "helpful", value: 256 },
  { text: "skills", value: 234 },
  { text: "confidence", value: 198 },
  { text: "opportunity", value: 187 },
  { text: "certification", value: 176 },
  { text: "practical", value: 165 },
  { text: "employment", value: 154 },
  { text: "trainer", value: 143 },
  { text: "support", value: 132 },
  { text: "salary", value: 121 },
  { text: "PIA", value: 112 },
  { text: "job", value: 298 },
  { text: "improvement", value: 89 },
];

// Negative / improvement feedback keywords
export const negativeKeywords = [
  { text: "outdated content", value: 198 },
  { text: "practical sessions", value: 187 },
  { text: "hands-on training", value: 176 },
  { text: "trainer quality", value: 165 },
  { text: "fast-paced classes", value: 154 },
  { text: "theory only", value: 143 },
  { text: "language barrier", value: 132 },
  { text: "insufficient practice", value: 121 },
  { text: "poor explanation", value: 112 },
  { text: "low engagement", value: 98 },
  { text: "no real projects", value: 87 },
  { text: "outdated syllabus", value: 76 },
  { text: "unclear concepts", value: 65 },
  { text: "batch overcrowding", value: 54 },
];

// Phase 3 open feedback word cloud
export const phase3Keywords = [
  { text: "good training", value: 289 },
  { text: "placement support", value: 245 },
  { text: "practical sessions", value: 223 },
  { text: "job", value: 312 },
  { text: "helpful trainers", value: 198 },
  { text: "skills development", value: 187 },
  { text: "outdated content", value: 176 },
  { text: "certification", value: 165 },
  { text: "language barrier", value: 143 },
  { text: "confidence", value: 132 },
  { text: "hands-on training", value: 121 },
  { text: "trainer quality", value: 112 },
  { text: "opportunity", value: 198 },
  { text: "employment", value: 154 },
  { text: "batch overcrowding", value: 98 },
  { text: "theory only", value: 87 },
  { text: "support", value: 143 },
  { text: "PIA", value: 123 },
  { text: "salary growth", value: 112 },
  { text: "improvement", value: 101 },
];

// Phase 3 concerns data
export const concernsData = {
  hasConcerns: 389,
  noConcerns: 743,
  noFeedback: 116,
};

// Key areas to improve
export const keyAreasData = [
  {
    area: "Curriculum & Content",
    issue: "Outdated syllabus not aligned with industry needs",
    frequency: 198,
    severity: "High",
    respondents: "15.9%",
    suggestion: "Update course content every 6 months with industry inputs",
  },
  {
    area: "Practical Training",
    issue: "Insufficient hands-on practice and real-world projects",
    frequency: 187,
    severity: "High",
    respondents: "15.0%",
    suggestion: "Increase practical hours to minimum 60% of total training time",
  },
  {
    area: "Trainer Quality",
    issue: "Inconsistent trainer expertise across PIAs",
    frequency: 165,
    severity: "High",
    respondents: "13.2%",
    suggestion: "Mandatory trainer certification and periodic quality audits",
  },
  {
    area: "Language Barrier",
    issue: "Training delivered in language not understood by trainees",
    frequency: 143,
    severity: "Medium",
    respondents: "11.5%",
    suggestion: "Provide regional language support and multilingual materials",
  },
  {
    area: "Placement Support",
    issue: "Limited job placement assistance post training",
    frequency: 132,
    severity: "Medium",
    respondents: "10.6%",
    suggestion: "Strengthen PIA-industry tie-ups for guaranteed placements",
  },
  {
    area: "Batch Size",
    issue: "Overcrowded batches reducing individual attention",
    frequency: 98,
    severity: "Medium",
    respondents: "7.9%",
    suggestion: "Cap batch size at 25-30 trainees per batch",
  },
  {
    area: "Engagement",
    issue: "Low engagement and monotonous teaching methods",
    frequency: 87,
    severity: "Low",
    respondents: "7.0%",
    suggestion: "Introduce gamification and interactive learning tools",
  },
  {
    area: "Post-Training Support",
    issue: "No mentorship or follow-up after course completion",
    frequency: 76,
    severity: "Low",
    respondents: "6.1%",
    suggestion: "Create alumni network and 3-month post-placement support",
  },
];

// Positive vs Negative response counts per question
export const responseBreakdown = [
  { question: "Q1", positive: 412 + 398, negative: 287 + 151, total: 1248 },
  { question: "Q2", positive: 1089, negative: 159, total: 1248 },
  { question: "Q3", positive: 876, negative: 372, total: 1248 },
  { question: "Q4", positive: 794, negative: 454, total: 1248 },
  { question: "Q5", positive: 521 + 338, negative: 389, total: 1248 },
  { question: "Q6", positive: 398 + 512, negative: 338, total: 1248 },
  { question: "Q7", positive: 489 + 447, negative: 312, total: 1248 },
  { question: "Q8", positive: 821, negative: 427, total: 1248 },
  { question: "Q9", positive: 734, negative: 514, total: 1248 },
  { question: "Q10", positive: 612, negative: 287, total: 1248 },
  { question: "Q11", positive: 967, negative: 281, total: 1248 },
];
