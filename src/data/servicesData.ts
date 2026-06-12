export interface Service {
  slug: string;
  title: string;
  description: string;
  heroDescription: string;
  features: string[];
  process: { step: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: Record<string, Service> = {
  "counselling": {
    slug: "counselling",
    title: "Free Counselling",
    description: "Personalized guidance for course & university selection",
    heroDescription: "Get expert guidance from our experienced counselors who understand your aspirations and help you choose the right course, university, and country for your study abroad journey.",
    features: [
      "One-on-one personalized counseling sessions",
      "Profile evaluation and assessment",
      "Course and university shortlisting",
      "Country comparison and selection",
      "Career guidance and planning",
      "Scholarship opportunities exploration"
    ],
    process: [
      { step: "Book a Session", description: "Schedule a free counseling session at your convenient time" },
      { step: "Profile Assessment", description: "Our experts evaluate your academic background and goals" },
      { step: "University Shortlisting", description: "Get a curated list of universities matching your profile" },
      { step: "Application Strategy", description: "Develop a comprehensive application plan" }
    ],
    benefits: [
      "100% free counseling with no hidden charges",
      "Access to counselors with 10+ years experience",
      "Personalized recommendations based on your profile",
      "Information about latest admission trends",
      "Ongoing support throughout your journey"
    ],
    faqs: [
      { question: "Is the counseling session really free?", answer: "Yes, our initial counseling sessions are completely free with no hidden charges." },
      { question: "How long is a counseling session?", answer: "Each session typically lasts 30-45 minutes, depending on your queries." },
      { question: "Can I have multiple sessions?", answer: "Absolutely! You can schedule follow-up sessions as needed." }
    ]
  },
  "test-preparation": {
    slug: "test-preparation",
    title: "Test Preparation",
    description: "IELTS, TOEFL, PTE, GRE & GMAT coaching",
    heroDescription: "Ace your study abroad entrance exams with our comprehensive test preparation programs. Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, and SAT.",
    features: [
      "Expert faculty with proven track records",
      "Comprehensive study materials",
      "Regular mock tests and assessments",
      "Personalized feedback and improvement plans",
      "Flexible batch timings",
      "Online and offline classes available"
    ],
    process: [
      { step: "Diagnostic Test", description: "Take a free diagnostic test to assess your current level" },
      { step: "Customized Plan", description: "Receive a personalized study plan based on your target score" },
      { step: "Intensive Training", description: "Attend regular classes with expert trainers" },
      { step: "Mock Tests", description: "Practice with full-length mock tests in exam-like conditions" }
    ],
    benefits: [
      "Small batch sizes for personalized attention",
      "Proven teaching methodologies",
      "Score improvement guarantee",
      "Access to extensive practice resources",
      "Flexible scheduling options"
    ],
    faqs: [
      { question: "Which tests do you offer coaching for?", answer: "We offer coaching for IELTS, TOEFL, PTE, GRE, GMAT, SAT, and other standardized tests." },
      { question: "How long is the preparation course?", answer: "Courses range from 4 weeks to 12 weeks depending on your target score and current level." },
      { question: "Do you offer online classes?", answer: "Yes, we offer both online and offline classes to suit your convenience." }
    ]
  },
  "admission-assistance": {
    slug: "admission-assistance",
    title: "Admission Assistance",
    description: "Complete application & documentation support",
    heroDescription: "Navigate the complex university admission process with ease. Our experts handle everything from application forms to document preparation and submission.",
    features: [
      "University application form assistance",
      "Document compilation and review",
      "Application fee payment guidance",
      "Deadline tracking and reminders",
      "Interview preparation support",
      "Admission offer evaluation"
    ],
    process: [
      { step: "Document Collection", description: "Gather all required academic and personal documents" },
      { step: "Application Preparation", description: "Complete application forms with accuracy" },
      { step: "Submission & Tracking", description: "Submit applications and track their status" },
      { step: "Offer Acceptance", description: "Evaluate offers and accept the best one" }
    ],
    benefits: [
      "Error-free application submissions",
      "Timely submission before deadlines",
      "Expert review of all documents",
      "Regular status updates",
      "Support for multiple university applications"
    ],
    faqs: [
      { question: "How many universities can I apply to?", answer: "We recommend applying to 5-8 universities across different tiers for best chances." },
      { question: "Do you help with document verification?", answer: "Yes, we verify all your documents before submission to avoid rejections." },
      { question: "What if my application gets rejected?", answer: "We help you analyze the rejection and reapply or apply to alternative universities." }
    ]
  },
  "sop-lor-writing": {
    slug: "sop-lor-writing",
    title: "SOP & LOR Writing",
    description: "Professional statement & recommendation drafting",
    heroDescription: "Stand out with compelling Statements of Purpose and Letters of Recommendation. Our expert writers craft personalized documents that highlight your strengths.",
    features: [
      "Professional SOP writing services",
      "LOR drafting and formatting",
      "Personal statement editing",
      "Resume/CV optimization",
      "Multiple revision rounds",
      "University-specific customization"
    ],
    process: [
      { step: "Information Gathering", description: "Detailed questionnaire to understand your background and goals" },
      { step: "Draft Creation", description: "Expert writers create your personalized SOP/LOR" },
      { step: "Review & Feedback", description: "You review the draft and provide feedback" },
      { step: "Final Delivery", description: "Receive polished, submission-ready documents" }
    ],
    benefits: [
      "Written by experienced professionals",
      "Tailored to specific universities",
      "Highlight your unique strengths",
      "Unlimited revisions",
      "Quick turnaround time"
    ],
    faqs: [
      { question: "How long does it take to write an SOP?", answer: "Typically 3-5 business days for the first draft, with revisions completed within 24 hours." },
      { question: "Can you write SOPs for multiple universities?", answer: "Yes, we customize your SOP for each university's specific requirements." },
      { question: "Do you provide LOR templates for recommenders?", answer: "Yes, we provide comprehensive templates and can also draft LORs for recommender review." }
    ]
  },
  "education-loans": {
    slug: "education-loans",
    title: "Education Loans",
    description: "Loan assistance & scholarship guidance",
    heroDescription: "Finance your education abroad with our comprehensive loan assistance and scholarship guidance. We help you find the best funding options for your study abroad journey.",
    features: [
      "Education loan processing assistance",
      "Bank and NBFC tie-ups",
      "Scholarship search and application",
      "Financial documentation support",
      "Loan comparison and selection",
      "Collateral and non-collateral loan options"
    ],
    process: [
      { step: "Financial Assessment", description: "Evaluate your funding requirements" },
      { step: "Loan Options", description: "Present best loan options from partner banks" },
      { step: "Documentation", description: "Assist with loan application documents" },
      { step: "Approval & Disbursement", description: "Follow up until loan disbursement" }
    ],
    benefits: [
      "Partnerships with leading banks",
      "Competitive interest rates",
      "Fast processing times",
      "Coverage up to 100% of expenses",
      "Scholarship matching services"
    ],
    faqs: [
      { question: "What expenses are covered by education loans?", answer: "Tuition fees, living expenses, travel, books, and equipment are typically covered." },
      { question: "Do I need collateral for an education loan?", answer: "Both collateral and non-collateral options are available depending on the loan amount." },
      { question: "Can you help find scholarships?", answer: "Yes, we actively search and help you apply for relevant scholarships." }
    ]
  },
  "visa-processing": {
    slug: "visa-processing",
    title: "Visa Processing",
    description: "Expert visa application & interview prep",
    heroDescription: "Secure your student visa with our expert guidance. We handle documentation, application submission, and prepare you for visa interviews.",
    features: [
      "Visa documentation checklist",
      "Application form filling assistance",
      "Financial documentation guidance",
      "Visa interview preparation",
      "Embassy appointment scheduling",
      "Post-visa travel briefing"
    ],
    process: [
      { step: "Document Preparation", description: "Compile all required visa documents" },
      { step: "Application Filing", description: "Complete and submit visa application" },
      { step: "Interview Prep", description: "Mock interviews and preparation sessions" },
      { step: "Visa Collection", description: "Collect your approved visa" }
    ],
    benefits: [
      "High visa success rate",
      "Expert guidance on documentation",
      "Mock visa interview sessions",
      "End-to-end support",
      "Knowledge of country-specific requirements"
    ],
    faqs: [
      { question: "What is your visa success rate?", answer: "We maintain a visa success rate of over 95% across all countries." },
      { question: "How early should I apply for a visa?", answer: "We recommend starting the process at least 3 months before your intended travel date." },
      { question: "Do you help with visa rejections?", answer: "Yes, we analyze rejection reasons and help you reapply with a stronger application." }
    ]
  },
  "accommodation": {
    slug: "accommodation",
    title: "Accommodation",
    description: "Safe & affordable housing assistance",
    heroDescription: "Find safe and comfortable accommodation in your study destination. We help you choose between university housing, private apartments, and homestays.",
    features: [
      "University dormitory assistance",
      "Private accommodation search",
      "Homestay arrangements",
      "Rental agreement guidance",
      "Safety and location assessment",
      "Budget-friendly options"
    ],
    process: [
      { step: "Requirement Analysis", description: "Understand your accommodation preferences and budget" },
      { step: "Options Presentation", description: "Present curated accommodation options" },
      { step: "Booking Assistance", description: "Help with booking and deposits" },
      { step: "Move-in Support", description: "Guide you through the move-in process" }
    ],
    benefits: [
      "Pre-verified safe accommodations",
      "Budget-friendly options",
      "Close to university campus",
      "Support with rental agreements",
      "24/7 emergency assistance"
    ],
    faqs: [
      { question: "Should I choose university or private accommodation?", answer: "University accommodation is easier for first-year students, while private options offer more independence." },
      { question: "How much should I budget for accommodation?", answer: "Costs vary by country; we provide detailed estimates based on your destination." },
      { question: "Can you help if I face issues with my accommodation?", answer: "Yes, we provide ongoing support for any accommodation-related issues." }
    ]
  },
  "forex-travel": {
    slug: "forex-travel",
    title: "Forex & Travel",
    description: "Foreign exchange & travel arrangements",
    heroDescription: "Get the best forex rates and hassle-free travel arrangements. We help with currency exchange, flight bookings, travel insurance, and pre-departure preparations.",
    features: [
      "Competitive forex rates",
      "International debit/credit cards",
      "Flight booking assistance",
      "Travel insurance guidance",
      "Pre-departure orientation",
      "Airport pickup coordination"
    ],
    process: [
      { step: "Forex Requirements", description: "Calculate your forex needs for initial expenses" },
      { step: "Currency Exchange", description: "Get competitive rates through our partners" },
      { step: "Travel Booking", description: "Book flights and travel insurance" },
      { step: "Pre-Departure Briefing", description: "Comprehensive orientation before you leave" }
    ],
    benefits: [
      "Best forex rates guaranteed",
      "Multiple currency options",
      "Travel insurance at discounted rates",
      "Comprehensive pre-departure support",
      "24/7 travel assistance"
    ],
    faqs: [
      { question: "How much forex should I carry initially?", answer: "We recommend carrying 2-3 months of living expenses in forex." },
      { question: "Do you help with travel insurance?", answer: "Yes, we help you choose the best travel insurance covering medical and other emergencies." },
      { question: "Can you arrange airport pickup?", answer: "Yes, we coordinate with local contacts or university services for airport pickup." }
    ]
  }
};
