export interface Course {
  slug: string;
  title: string;
  description: string;
  heroDescription: string;
  programs: string[];
  careerOptions: string[];
  topDestinations: string[];
  eligibility: string[];
  whyStudy: string[];
}

export const coursesData: Record<string, Course> = {
  "medicine-healthcare": {
    slug: "medicine-healthcare",
    title: "Medicine & Healthcare",
    description: "MBBS, Nursing, Allied Health Sciences, Pharmacy",
    heroDescription: "Pursue a rewarding career in healthcare with world-class medical education. Study MBBS, Nursing, Pharmacy, and Allied Health Sciences at globally recognized universities.",
    programs: [
      "MBBS / MD (Doctor of Medicine)",
      "Bachelor of Nursing (BSN)",
      "Bachelor of Pharmacy (B.Pharm)",
      "Allied Health Sciences",
      "Physiotherapy",
      "Public Health",
      "Dentistry (BDS)",
      "Veterinary Science"
    ],
    careerOptions: [
      "Medical Doctor / Physician",
      "Registered Nurse",
      "Pharmacist",
      "Physiotherapist",
      "Healthcare Administrator",
      "Medical Researcher",
      "Dentist",
      "Public Health Specialist"
    ],
    topDestinations: ["Russia", "Ukraine", "Georgia", "Philippines", "Kazakhstan", "UK", "USA", "Australia"],
    eligibility: [
      "10+2 with Physics, Chemistry & Biology",
      "Minimum 50% aggregate marks",
      "NEET qualification (for Indian students)",
      "English proficiency (IELTS/TOEFL may be required)"
    ],
    whyStudy: [
      "Globally recognized medical degrees",
      "Affordable tuition fees compared to private colleges",
      "Hands-on clinical experience",
      "Opportunity to practice medicine worldwide",
      "State-of-the-art medical facilities"
    ]
  },
  "information-technology": {
    slug: "information-technology",
    title: "Information Technology",
    description: "Computer Science, Data Science, AI, Cybersecurity",
    heroDescription: "Shape the future with cutting-edge technology education. Master Computer Science, Artificial Intelligence, Data Science, and Cybersecurity at top global universities.",
    programs: [
      "Bachelor of Computer Science",
      "Master of Data Science",
      "Artificial Intelligence & Machine Learning",
      "Cybersecurity",
      "Software Engineering",
      "Information Systems",
      "Cloud Computing",
      "Blockchain Technology"
    ],
    careerOptions: [
      "Software Developer / Engineer",
      "Data Scientist",
      "AI/ML Engineer",
      "Cybersecurity Analyst",
      "Cloud Architect",
      "Full Stack Developer",
      "DevOps Engineer",
      "IT Consultant"
    ],
    topDestinations: ["USA", "Canada", "UK", "Germany", "Australia", "Ireland", "Netherlands", "Singapore"],
    eligibility: [
      "10+2 with Mathematics",
      "Bachelor's degree for Master's programs",
      "GRE scores (for some universities)",
      "English proficiency (IELTS/TOEFL)"
    ],
    whyStudy: [
      "High demand for IT professionals globally",
      "Excellent salary packages",
      "Work opportunities in Silicon Valley & tech hubs",
      "Innovation-driven curriculum",
      "Strong industry connections"
    ]
  },
  "engineering": {
    slug: "engineering",
    title: "Engineering",
    description: "Mechanical, Civil, Electrical, Electronics",
    heroDescription: "Build the world of tomorrow with an engineering degree from prestigious international universities. Specialize in Mechanical, Civil, Electrical, or Electronics Engineering.",
    programs: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication",
      "Chemical Engineering",
      "Aerospace Engineering",
      "Biomedical Engineering",
      "Environmental Engineering"
    ],
    careerOptions: [
      "Mechanical Engineer",
      "Civil Engineer",
      "Electrical Engineer",
      "Project Manager",
      "Design Engineer",
      "Quality Assurance Engineer",
      "Research & Development Engineer",
      "Consulting Engineer"
    ],
    topDestinations: ["Germany", "USA", "UK", "Canada", "Australia", "France", "Netherlands", "Japan"],
    eligibility: [
      "10+2 with Physics, Chemistry & Mathematics",
      "Entrance exam scores (JEE/SAT for some countries)",
      "English proficiency (IELTS/TOEFL)",
      "Bachelor's degree for Master's programs"
    ],
    whyStudy: [
      "Globally recognized engineering degrees",
      "Access to advanced research facilities",
      "Strong industry partnerships",
      "Internship opportunities with top companies",
      "High employability rates"
    ]
  },
  "business-mba": {
    slug: "business-mba",
    title: "Business & MBA",
    description: "MBA, Finance, Marketing, HR, International Business",
    heroDescription: "Accelerate your business career with an MBA or business degree from world-renowned business schools. Specialize in Finance, Marketing, HR, or International Business.",
    programs: [
      "Master of Business Administration (MBA)",
      "Bachelor of Business Administration (BBA)",
      "Master of Finance",
      "Marketing Management",
      "Human Resource Management",
      "International Business",
      "Entrepreneurship",
      "Supply Chain Management"
    ],
    careerOptions: [
      "Business Analyst",
      "Management Consultant",
      "Financial Analyst",
      "Marketing Manager",
      "HR Manager",
      "Investment Banker",
      "Entrepreneur",
      "Operations Manager"
    ],
    topDestinations: ["USA", "UK", "Canada", "France", "Germany", "Australia", "Singapore", "Switzerland"],
    eligibility: [
      "Bachelor's degree (any discipline)",
      "GMAT/GRE scores",
      "Work experience (2-5 years for MBA)",
      "English proficiency (IELTS/TOEFL)"
    ],
    whyStudy: [
      "Global networking opportunities",
      "Learn from industry leaders",
      "Case-study based learning",
      "Strong placement records",
      "Leadership development"
    ]
  },
  "law-legal-studies": {
    slug: "law-legal-studies",
    title: "Law & Legal Studies",
    description: "LLB, LLM, International Law, Corporate Law",
    heroDescription: "Pursue a distinguished career in law with internationally recognized legal education. Specialize in Corporate Law, International Law, Human Rights, or Intellectual Property.",
    programs: [
      "Bachelor of Laws (LLB)",
      "Master of Laws (LLM)",
      "International Law",
      "Corporate Law",
      "Intellectual Property Law",
      "Human Rights Law",
      "Environmental Law",
      "Criminal Justice"
    ],
    careerOptions: [
      "Advocate / Barrister",
      "Corporate Lawyer",
      "Legal Consultant",
      "Judge / Magistrate",
      "Legal Analyst",
      "Compliance Officer",
      "Human Rights Lawyer",
      "Patent Attorney"
    ],
    topDestinations: ["UK", "USA", "Canada", "Australia", "Germany", "Netherlands", "Ireland", "Singapore"],
    eligibility: [
      "10+2 for LLB programs",
      "LLB degree for LLM programs",
      "LSAT scores (for some universities)",
      "English proficiency (IELTS/TOEFL)"
    ],
    whyStudy: [
      "Learn from prestigious law schools",
      "Understanding of international legal systems",
      "Networking with global legal professionals",
      "High earning potential",
      "Impactful career opportunities"
    ]
  },
  "architecture-design": {
    slug: "architecture-design",
    title: "Architecture & Design",
    description: "Architecture, Interior Design, Urban Planning",
    heroDescription: "Create inspiring spaces and structures with a degree in Architecture or Design. Study at renowned institutions known for innovation in sustainable design and urban planning.",
    programs: [
      "Bachelor of Architecture (B.Arch)",
      "Master of Architecture (M.Arch)",
      "Interior Design",
      "Urban Planning",
      "Landscape Architecture",
      "Sustainable Design",
      "Industrial Design",
      "Graphic Design"
    ],
    careerOptions: [
      "Architect",
      "Interior Designer",
      "Urban Planner",
      "Landscape Architect",
      "Project Manager",
      "Sustainability Consultant",
      "Design Director",
      "CAD Specialist"
    ],
    topDestinations: ["Italy", "UK", "USA", "Germany", "Netherlands", "Spain", "Australia", "France"],
    eligibility: [
      "10+2 with Mathematics",
      "NATA/JEE scores (for Indian students)",
      "Portfolio of design work",
      "English proficiency (IELTS/TOEFL)"
    ],
    whyStudy: [
      "Learn from world-famous architects",
      "Access to cutting-edge design software",
      "Study iconic architecture firsthand",
      "Sustainable design focus",
      "Creative career opportunities"
    ]
  },
  "hospitality-tourism": {
    slug: "hospitality-tourism",
    title: "Hospitality & Tourism",
    description: "Hotel Management, Culinary Arts, Event Management",
    heroDescription: "Enter the exciting world of hospitality and tourism. Study Hotel Management, Culinary Arts, or Event Management at world-class institutions with industry placements.",
    programs: [
      "Bachelor of Hotel Management",
      "Culinary Arts",
      "Event Management",
      "Tourism Management",
      "Resort & Spa Management",
      "Food & Beverage Management",
      "Airline & Airport Management",
      "Cruise Line Management"
    ],
    careerOptions: [
      "Hotel Manager",
      "Executive Chef",
      "Event Planner",
      "Tourism Officer",
      "Restaurant Manager",
      "Travel Consultant",
      "Cruise Director",
      "Hospitality Entrepreneur"
    ],
    topDestinations: ["Switzerland", "France", "UK", "USA", "Australia", "UAE", "Singapore", "Spain"],
    eligibility: [
      "10+2 (any stream)",
      "Passion for hospitality industry",
      "Good communication skills",
      "English proficiency (IELTS/TOEFL)"
    ],
    whyStudy: [
      "Paid internship opportunities",
      "Global career prospects",
      "Hands-on practical training",
      "Work in luxury hotels & resorts",
      "Travel the world"
    ]
  },
  "arts-humanities": {
    slug: "arts-humanities",
    title: "Arts & Humanities",
    description: "Fine Arts, Media, Psychology, Sociology",
    heroDescription: "Explore human creativity and society with a degree in Arts & Humanities. Study Fine Arts, Psychology, Media Studies, or Sociology at prestigious global universities.",
    programs: [
      "Bachelor of Fine Arts",
      "Psychology",
      "Sociology",
      "Media & Communication",
      "Film Studies",
      "Philosophy",
      "History",
      "Literature"
    ],
    careerOptions: [
      "Psychologist / Counselor",
      "Journalist / Media Professional",
      "Social Worker",
      "Content Creator",
      "Film Director",
      "Museum Curator",
      "Professor / Researcher",
      "Public Relations Specialist"
    ],
    topDestinations: ["UK", "USA", "Canada", "Australia", "Netherlands", "France", "Germany", "Italy"],
    eligibility: [
      "10+2 (any stream)",
      "Portfolio for Fine Arts",
      "English proficiency (IELTS/TOEFL)",
      "Bachelor's degree for Master's programs"
    ],
    whyStudy: [
      "Develop critical thinking skills",
      "Explore diverse cultures",
      "Creative career opportunities",
      "Strong research foundation",
      "Impactful social contributions"
    ]
  },
  "sciences-research": {
    slug: "sciences-research",
    title: "Sciences & Research",
    description: "Physics, Chemistry, Biology, Environmental Science",
    heroDescription: "Discover the mysteries of the universe with a degree in Sciences. Study Physics, Chemistry, Biology, or Environmental Science at research-intensive universities.",
    programs: [
      "Bachelor of Science (Physics)",
      "Bachelor of Science (Chemistry)",
      "Bachelor of Science (Biology)",
      "Environmental Science",
      "Biotechnology",
      "Marine Science",
      "Astronomy & Astrophysics",
      "Geology"
    ],
    careerOptions: [
      "Research Scientist",
      "Laboratory Technician",
      "Environmental Consultant",
      "Biotechnologist",
      "Quality Control Analyst",
      "Science Teacher / Professor",
      "Pharmaceutical Researcher",
      "Data Analyst"
    ],
    topDestinations: ["USA", "UK", "Germany", "Canada", "Australia", "Switzerland", "Netherlands", "Japan"],
    eligibility: [
      "10+2 with Science subjects",
      "Strong academic record",
      "GRE scores (for Master's/PhD)",
      "English proficiency (IELTS/TOEFL)"
    ],
    whyStudy: [
      "Access to world-class research facilities",
      "Funding & scholarship opportunities",
      "Contribute to scientific discoveries",
      "Collaborate with leading researchers",
      "High-impact career paths"
    ]
  },
  "education-teaching": {
    slug: "education-teaching",
    title: "Education & Teaching",
    description: "B.Ed, M.Ed, TESOL, Educational Leadership",
    heroDescription: "Shape future generations with a degree in Education. Study teaching methodologies, educational leadership, or TESOL at internationally recognized institutions.",
    programs: [
      "Bachelor of Education (B.Ed)",
      "Master of Education (M.Ed)",
      "TESOL / TEFL",
      "Educational Leadership",
      "Special Education",
      "Curriculum Development",
      "Early Childhood Education",
      "Educational Psychology"
    ],
    careerOptions: [
      "School Teacher",
      "University Professor",
      "Education Consultant",
      "Curriculum Developer",
      "School Principal",
      "Special Education Teacher",
      "ESL Teacher",
      "Education Policy Analyst"
    ],
    topDestinations: ["UK", "USA", "Canada", "Australia", "New Zealand", "Ireland", "Singapore", "Germany"],
    eligibility: [
      "Bachelor's degree for B.Ed/M.Ed",
      "Passion for teaching",
      "English proficiency (IELTS/TOEFL)",
      "Teaching experience (preferred for some programs)"
    ],
    whyStudy: [
      "Make a difference in students' lives",
      "Learn innovative teaching methods",
      "Global teaching opportunities",
      "Job security & stability",
      "Continuous professional development"
    ]
  }
};
