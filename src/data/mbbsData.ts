export interface MBBSUniversity {
  name: string;
  slug: string;
  location: string;
  tuitionFee: string;
  duration: string;
  recognition: string[];
  established?: string;
  ranking?: string;
  totalFee?: string;
  hostelFee?: string;
  eligibility?: string[];
  advantages?: string[];
  about?: string;
  image?: string;
}

export interface MBBSCountry {
  name: string;
  slug: string;
  flag: string;
  heroImage: string;
  description: string;
  universities: MBBSUniversity[];
  benefits: string[];
  eligibility: string[];
  documents: string[];
  outlook?: string;
  keyFeatures?: string[];
  advantages?: string[];
  disadvantages?: string[];
  feeStructure?: string[];
  whyStudy?: string[];
  extraInfo?: string[];
  topUniversitiesNote?: string;
}

const generateSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const defaultHeroImage = "/assets/unsplash-1523580846011-d3a5bc25702b.jpg";
const defaultEligibility = [
  "Minimum 50% in PCB (typical baseline; varies by university)",
  "NEET qualification required for Indian students (as per NMC guidelines)",
  "Age 17+ at admission",
  "Valid passport and academic documents",
  "English proficiency may be required by some universities",
];

const defaultDocuments = [
  "10th & 12th marksheets",
  "NEET scorecard",
  "Valid passport",
  "Birth certificate",
  "Passport-size photographs",
  "Medical fitness certificate",
  "Bank statements / sponsor letter",
  "University offer letter and visa forms",
];

const defaultKeyFeatures = [
  "Multiple intakes depending on university calendar",
  "Clinical training in affiliated teaching hospitals",
  "English-medium programs available at selected universities",
  "International student support services",
];

const defaultAdvantages = [
  "Global exposure and diverse patient cases",
  "Program options across public and private universities",
  "Structured curriculum with clinical focus",
  "Counsellor support for documentation and visa",
];

const defaultDisadvantages = [
  "Fees and recognition vary by university; due diligence required",
  "Living costs can vary widely by city",
  "Local language may be needed for some clinical rotations",
  "Visa timelines can be strict depending on intake",
];

const defaultFeeStructure = [
  "Tuition fee: varies by university and program duration",
  "Hostel/accommodation: depends on city and housing type",
  "Living expenses: food, transport, utilities",
  "Insurance, visa, and administrative charges",
  "One-time admission/registration fees (if applicable)",
];

const defaultWhyStudy = [
  "Opportunity to study medicine in a global environment",
  "Access to different healthcare systems and clinical protocols",
  "Eligibility to take licensing exams after graduation (check latest rules)",
  "Guided pathway for Indian students from admission to visa",
];

const defaultExtraInfo = [
  "We verify university recognition and eligibility before finalizing a shortlist.",
  "We provide a personalized budget sheet during counselling.",
];

const defaultUniversityRecognition = ["WDOMS (verify)", "NMC eligibility (verify)"];

const buildUniversity = (
  name: string,
  location: string,
  overrides: Partial<MBBSUniversity> = {},
): MBBSUniversity => ({
  name,
  slug: generateSlug(name),
  location,
  tuitionFee: "Contact for latest",
  duration: "5-6 years",
  recognition: defaultUniversityRecognition,
  ...overrides,
});

const buildCountryDescription = (name: string) =>
  `${name} is a popular destination for students exploring MBBS options abroad. Programs, fees, and admissions vary by university and intake.`;

const buildCountryOutlook = (name: string) =>
  `Our counsellors evaluate recognition, language of instruction, clinical exposure, and total cost to help you plan MBBS in ${name}.`;

interface CountryTemplateInput {
  name: string;
  slug: string;
  flag: string;
  heroImage?: string;
  description?: string;
  outlook?: string;
  keyFeatures?: string[];
  advantages?: string[];
  disadvantages?: string[];
  feeStructure?: string[];
  whyStudy?: string[];
  extraInfo?: string[];
  benefits?: string[];
  eligibility?: string[];
  documents?: string[];
  universities?: MBBSUniversity[];
  topUniversitiesNote?: string;
}

const createCountryTemplate = (input: CountryTemplateInput): MBBSCountry => ({
  name: input.name,
  slug: input.slug,
  flag: input.flag,
  heroImage: input.heroImage || defaultHeroImage,
  description: input.description || buildCountryDescription(input.name),
  outlook: input.outlook || buildCountryOutlook(input.name),
  keyFeatures: input.keyFeatures || defaultKeyFeatures,
  advantages: input.advantages || defaultAdvantages,
  disadvantages: input.disadvantages || defaultDisadvantages,
  feeStructure: input.feeStructure || defaultFeeStructure,
  whyStudy: input.whyStudy || defaultWhyStudy,
  extraInfo: input.extraInfo || defaultExtraInfo,
  benefits: input.benefits || defaultKeyFeatures,
  eligibility: input.eligibility || defaultEligibility,
  documents: input.documents || defaultDocuments,
  universities: input.universities || [],
  topUniversitiesNote: input.topUniversitiesNote || "Shortlist shared after profile review.",
});

export const mbbsCountries: MBBSCountry[] = [
  {
    name: "Russia",
    slug: "russia",
    flag: "🇷🇺",
    heroImage: "/assets/unsplash-1513326738677-b964603b136d.jpg",
    description: "Russia is one of the top destinations for MBBS abroad with world-class medical universities, affordable fees, and globally recognized degrees.",
    universities: [
      { 
        name: "Bashkir State Medical University", 
        slug: "bashkir-state-medical-university",
        location: "Ufa", 
        tuitionFee: "₹3.5L/year", 
        totalFee: "₹21L (6 years)",
        hostelFee: "₹40,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1932",
        ranking: "Top 10 in Russia",
        about: "Bashkir State Medical University is one of the oldest and most prestigious medical universities in Russia. Founded in 1932, it has trained over 40,000 doctors who work in Russia and abroad. The university offers world-class medical education with modern facilities and experienced faculty.",
        eligibility: ["50% in PCB for General Category", "40% in PCB for Reserved Categories", "NEET Qualified", "Age: 17-25 years"],
        advantages: ["Low tuition fees", "NMC & WHO approved", "English medium instruction", "Indian mess available", "Safe campus environment", "Direct admission without donation"]
      },
      { 
        name: "Altai State Medical University", 
        slug: "altai-state-medical-university",
        location: "Barnaul", 
        tuitionFee: "₹3.2L/year", 
        totalFee: "₹19.2L (6 years)",
        hostelFee: "₹35,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1954",
        about: "Altai State Medical University is a leading medical institution in Siberia, known for quality education and research.",
        eligibility: ["50% in PCB for General Category", "40% in PCB for Reserved Categories", "NEET Qualified"],
        advantages: ["Affordable fees", "Modern infrastructure", "English medium", "Indian food available"]
      },
      { 
        name: "Crimean Federal University", 
        slug: "crimean-federal-university",
        location: "Simferopol", 
        tuitionFee: "₹3L/year", 
        totalFee: "₹18L (6 years)",
        hostelFee: "₹30,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1931",
        about: "Crimean Federal University offers excellent medical education with a beautiful campus near the Black Sea.",
        eligibility: ["50% in PCB for General Category", "40% in PCB for Reserved Categories", "NEET Qualified"],
        advantages: ["Scenic location", "Modern facilities", "Affordable fees", "English medium"]
      },
      { 
        name: "Far Eastern Federal University", 
        slug: "far-eastern-federal-university",
        location: "Vladivostok", 
        tuitionFee: "₹4L/year", 
        totalFee: "₹24L (6 years)",
        hostelFee: "₹45,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1899",
        ranking: "Top 15 in Russia",
        about: "Far Eastern Federal University is one of Russia's leading universities with state-of-the-art medical facilities.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Modern campus", "Research opportunities", "International exposure"]
      },
      { 
        name: "Kabardino-Balkarian State University", 
        slug: "kabardino-balkarian-state-university",
        location: "Nalchik", 
        tuitionFee: "₹2.8L/year", 
        totalFee: "₹16.8L (6 years)",
        hostelFee: "₹30,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1957",
        about: "Kabardino-Balkarian State University offers quality medical education at very affordable rates.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Most affordable", "Good climate", "English medium"]
      },
      { 
        name: "Kazan State Medical University", 
        slug: "kazan-state-medical-university",
        location: "Kazan", 
        tuitionFee: "₹4L/year", 
        totalFee: "₹24L (6 years)",
        hostelFee: "₹50,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1814",
        ranking: "Top 5 in Russia",
        about: "Kazan State Medical University is one of the oldest and most prestigious medical universities in Russia, founded in 1814.",
        eligibility: ["50% in PCB for General Category", "40% in PCB for Reserved Categories", "NEET Qualified"],
        advantages: ["Historic university", "Excellent reputation", "Strong alumni network", "Modern facilities"]
      },
      { 
        name: "Kursk State Medical University", 
        slug: "kursk-state-medical-university",
        location: "Kursk", 
        tuitionFee: "₹4.5L/year", 
        totalFee: "₹27L (6 years)",
        hostelFee: "₹55,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1935",
        ranking: "Top 10 in Russia",
        about: "Kursk State Medical University is famous for its English medium program and has trained thousands of international students.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["100% English medium", "Large Indian community", "Excellent teaching"]
      },
      { 
        name: "Orel State University", 
        slug: "orel-state-university",
        location: "Orel", 
        tuitionFee: "₹3.3L/year", 
        totalFee: "₹19.8L (6 years)",
        hostelFee: "₹35,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1931",
        about: "Orel State University offers quality medical education with modern teaching methods.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Affordable fees", "Good infrastructure", "English medium"]
      },
      { 
        name: "Orenburg State Medical University", 
        slug: "orenburg-state-medical-university",
        location: "Orenburg", 
        tuitionFee: "₹3.2L/year", 
        totalFee: "₹19.2L (6 years)",
        hostelFee: "₹35,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1944",
        about: "Orenburg State Medical University is a well-established medical institution with excellent facilities.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Affordable fees", "Safe environment", "Quality education"]
      },
      { 
        name: "Peoples' Friendship University of Russia", 
        slug: "peoples-friendship-university-russia",
        location: "Moscow", 
        tuitionFee: "₹5.5L/year", 
        totalFee: "₹33L (6 years)",
        hostelFee: "₹70,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1960",
        ranking: "Top 3 in Russia",
        about: "RUDN University is one of Russia's most prestigious universities, located in Moscow with students from 150+ countries.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Moscow location", "International exposure", "Excellent facilities", "Strong placements"]
      },
      { 
        name: "Perm State Medical University", 
        slug: "perm-state-medical-university",
        location: "Perm", 
        tuitionFee: "₹3.8L/year", 
        totalFee: "₹22.8L (6 years)",
        hostelFee: "₹40,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1916",
        about: "Perm State Medical University is one of the oldest medical schools in Russia with over a century of excellence.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Historic institution", "Quality education", "Good infrastructure"]
      },
      { 
        name: "Pirogov Russian National Research Medical University", 
        slug: "pirogov-russian-national-research-medical-university",
        location: "Moscow", 
        tuitionFee: "₹6L/year", 
        totalFee: "₹36L (6 years)",
        hostelFee: "₹80,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1906",
        ranking: "Top 2 in Russia",
        about: "Pirogov University is Russia's premier medical university, known for producing top-quality doctors.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Best in Russia", "Moscow location", "Research excellence", "Global recognition"]
      },
      { 
        name: "Rostov State Medical University", 
        slug: "rostov-state-medical-university",
        location: "Rostov-on-Don", 
        tuitionFee: "₹4.5L/year", 
        totalFee: "₹27L (6 years)",
        hostelFee: "₹45,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1930",
        about: "Rostov State Medical University offers excellent medical education with modern facilities.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Good climate", "Modern facilities", "English medium"]
      },
      { 
        name: "Tver State Medical University", 
        slug: "tver-state-medical-university",
        location: "Tver", 
        tuitionFee: "₹3.5L/year", 
        totalFee: "₹21L (6 years)",
        hostelFee: "₹40,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1936",
        about: "Tver State Medical University is located near Moscow and offers quality medical education.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Near Moscow", "Affordable fees", "English medium"]
      },
    ],
    benefits: ["No entrance exam required", "NMC & WHO approved universities", "English medium instruction", "Low tuition fees", "International exposure"],
    eligibility: ["50% in PCB for General", "40% in PCB for Reserved Categories", "NEET Qualified", "17 years of age as on 31st December"],
    documents: ["10th & 12th Marksheets", "NEET Scorecard", "Passport", "Birth Certificate", "Medical Certificate"]
  },
  {
    name: "Kazakhstan",
    slug: "kazakhstan",
    flag: "🇰🇿",
    heroImage: "/assets/unsplash-1565008447742-97f6f38c985c.jpg",
    description: "Kazakhstan offers affordable MBBS programs with excellent infrastructure and NMC-recognized medical universities.",
    universities: [
      { 
        name: "Al-Farabi Kazakh National University", 
        slug: "al-farabi-kazakh-national-university",
        location: "Almaty", 
        tuitionFee: "₹3.5L/year", 
        totalFee: "₹17.5L (5 years)",
        hostelFee: "₹40,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1934",
        ranking: "Top 1 in Kazakhstan",
        about: "Al-Farabi Kazakh National University is the leading university in Kazakhstan with excellent medical facilities.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Top ranked", "Modern campus", "International faculty"]
      },
      { 
        name: "Astana Medical University", 
        slug: "astana-medical-university",
        location: "Astana", 
        tuitionFee: "₹4L/year", 
        totalFee: "₹20L (5 years)",
        hostelFee: "₹45,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1964",
        about: "Astana Medical University is located in the capital city with state-of-the-art facilities.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Capital city", "Modern infrastructure", "Good climate"]
      },
      { 
        name: "Kazakh National Medical University", 
        slug: "kazakh-national-medical-university",
        location: "Almaty", 
        tuitionFee: "₹3.8L/year", 
        totalFee: "₹19L (5 years)",
        hostelFee: "₹42,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1930",
        ranking: "Top 2 in Kazakhstan",
        about: "Kazakh National Medical University is one of the oldest and most prestigious medical universities in Kazakhstan.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Historic institution", "Excellent reputation", "Quality education"]
      },
      { 
        name: "Kokshetau State University", 
        slug: "kokshetau-state-university",
        location: "Kokshetau", 
        tuitionFee: "₹2.8L/year", 
        totalFee: "₹14L (5 years)",
        hostelFee: "₹30,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1962",
        about: "Kokshetau State University offers affordable medical education with good facilities.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Most affordable", "Safe environment", "English medium"]
      },
      { 
        name: "South Kazakhstan Medical Academy", 
        slug: "south-kazakhstan-medical-academy",
        location: "Shymkent", 
        tuitionFee: "₹3L/year", 
        totalFee: "₹15L (5 years)",
        hostelFee: "₹35,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1979",
        about: "South Kazakhstan Medical Academy offers quality medical education at affordable rates.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Affordable fees", "Good infrastructure", "English medium"]
      },
      { 
        name: "Semey State Medical University", 
        slug: "semey-state-medical-university",
        location: "Semey", 
        tuitionFee: "₹2.8L/year", 
        totalFee: "₹14L (5 years)",
        hostelFee: "₹30,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1953",
        about: "Semey State Medical University is known for its quality education and affordable fees.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Affordable fees", "Safe campus", "Quality education"]
      },
    ],
    benefits: ["Affordable fees", "NMC approved", "English medium", "Safe environment", "Modern facilities"],
    eligibility: ["50% in PCB for General", "40% in PCB for Reserved Categories", "NEET Qualified", "17 years of age"],
    documents: ["10th & 12th Marksheets", "NEET Scorecard", "Passport", "Birth Certificate", "Medical Certificate"]
  },
  {
    name: "Kyrgyzstan",
    slug: "kyrgyzstan",
    flag: "🇰🇬",
    heroImage: "/assets/unsplash-1596484552834-6a58f850e0a1.jpg",
    description: "Kyrgyzstan provides quality medical education at the most affordable rates with globally recognized universities.",
    universities: [
      { 
        name: "International School of Medicine", 
        slug: "international-school-of-medicine",
        location: "Bishkek", 
        tuitionFee: "₹3.5L/year", 
        totalFee: "₹17.5L (5 years)",
        hostelFee: "₹40,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "2003",
        about: "International School of Medicine is a modern medical institution with international standards.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["International standards", "Modern facilities", "English medium"]
      },
      { 
        name: "Kyrgyz State Medical Academy", 
        slug: "kyrgyz-state-medical-academy",
        location: "Bishkek", 
        tuitionFee: "₹3L/year", 
        totalFee: "₹15L (5 years)",
        hostelFee: "₹35,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1939",
        ranking: "Top 1 in Kyrgyzstan",
        about: "Kyrgyz State Medical Academy is the premier medical institution in Kyrgyzstan.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Top ranked", "Historic institution", "Excellent faculty"]
      },
      { 
        name: "Asian Medical Institute", 
        slug: "asian-medical-institute",
        location: "Kant", 
        tuitionFee: "₹2.8L/year", 
        totalFee: "₹14L (5 years)",
        hostelFee: "₹30,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "2004",
        about: "Asian Medical Institute offers affordable medical education with modern teaching methods.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Affordable fees", "Modern campus", "Large Indian community"]
      },
      { 
        name: "Osh State University", 
        slug: "osh-state-university",
        location: "Osh", 
        tuitionFee: "₹2.5L/year", 
        totalFee: "₹12.5L (5 years)",
        hostelFee: "₹28,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1951",
        about: "Osh State University is one of the most affordable options for MBBS abroad.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Most affordable", "Indian food available", "Safe environment"]
      },
      { 
        name: "Jalalabad State Medical University", 
        slug: "jalalabad-state-medical-university",
        location: "Jalalabad", 
        tuitionFee: "₹2.5L/year", 
        totalFee: "₹12.5L (5 years)",
        hostelFee: "₹28,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1997",
        about: "Jalalabad State Medical University offers quality education at very affordable rates.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Very affordable", "English medium", "Good faculty"]
      },
    ],
    benefits: ["Most affordable option", "Indian food available", "Large Indian student community", "NMC approved", "No language barrier"],
    eligibility: ["50% in PCB for General", "40% in PCB for Reserved Categories", "NEET Qualified", "17 years of age"],
    documents: ["10th & 12th Marksheets", "NEET Scorecard", "Passport", "Birth Certificate", "Medical Certificate"]
  },
  {
    name: "Nepal",
    slug: "nepal",
    flag: "🇳🇵",
    heroImage: "/assets/unsplash-1544735716-392fe2489ffa.jpg",
    description: "Study MBBS in Nepal with no language barrier, similar culture, and easy travel from India.",
    universities: [
      { 
        name: "Tribhuvan University", 
        slug: "tribhuvan-university",
        location: "Kathmandu", 
        tuitionFee: "₹10L/year", 
        totalFee: "₹55L (5.5 years)",
        hostelFee: "₹60,000/year",
        duration: "5.5 years", 
        recognition: ["NMC", "WHO"],
        established: "1959",
        ranking: "Top 1 in Nepal",
        about: "Tribhuvan University is Nepal's largest and most prestigious university.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Top ranked", "Close to India", "No language barrier"]
      },
      { 
        name: "B.P. Koirala Institute", 
        slug: "bp-koirala-institute",
        location: "Dharan", 
        tuitionFee: "₹8L/year", 
        totalFee: "₹44L (5.5 years)",
        hostelFee: "₹50,000/year",
        duration: "5.5 years", 
        recognition: ["NMC", "WHO"],
        established: "1993",
        about: "B.P. Koirala Institute is a premier medical institution in Nepal.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Quality education", "Good facilities", "Similar culture"]
      },
      { 
        name: "Kathmandu University", 
        slug: "kathmandu-university",
        location: "Dhulikhel", 
        tuitionFee: "₹12L/year", 
        totalFee: "₹66L (5.5 years)",
        hostelFee: "₹70,000/year",
        duration: "5.5 years", 
        recognition: ["NMC", "WHO"],
        established: "1991",
        about: "Kathmandu University is known for its modern approach to medical education.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Modern facilities", "International standards", "Beautiful campus"]
      },
      { 
        name: "National Medical College", 
        slug: "national-medical-college-nepal",
        location: "Birgunj", 
        tuitionFee: "₹7L/year", 
        totalFee: "₹38.5L (5.5 years)",
        hostelFee: "₹45,000/year",
        duration: "5.5 years", 
        recognition: ["NMC", "WHO"],
        established: "1997",
        about: "National Medical College offers quality medical education near the Indian border.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Near Indian border", "Easy travel", "Affordable"]
      },
      { 
        name: "Nobel Medical College", 
        slug: "nobel-medical-college",
        location: "Biratnagar", 
        tuitionFee: "₹7.5L/year", 
        totalFee: "₹41.25L (5.5 years)",
        hostelFee: "₹48,000/year",
        duration: "5.5 years", 
        recognition: ["NMC", "WHO"],
        established: "2006",
        about: "Nobel Medical College is a well-established medical institution in Nepal.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Modern infrastructure", "Quality education", "Good placements"]
      },
    ],
    benefits: ["No language barrier", "Similar culture", "Close to India", "NMC approved", "Easy adaptation"],
    eligibility: ["50% in PCB for General", "NEET Qualified", "17 years of age"],
    documents: ["10th & 12th Marksheets", "NEET Scorecard", "Passport", "Birth Certificate"]
  },
  {
    name: "Bangladesh",
    slug: "bangladesh",
    flag: "🇧🇩",
    heroImage: "/assets/unsplash-1523580846011-d3a5bc25702b.jpg",
    description: "Bangladesh offers high-quality MBBS education with English medium instruction and affordable living costs.",
    universities: [
      { 
        name: "Enam Medical College", 
        slug: "enam-medical-college",
        location: "Dhaka", 
        tuitionFee: "₹4L/year", 
        totalFee: "₹20L (5 years)",
        hostelFee: "₹45,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "2003",
        about: "Enam Medical College is a leading private medical college in Bangladesh.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Quality education", "Modern facilities", "English medium"]
      },
      { 
        name: "Green Life Medical College", 
        slug: "green-life-medical-college",
        location: "Dhaka", 
        tuitionFee: "₹4.2L/year", 
        totalFee: "₹21L (5 years)",
        hostelFee: "₹48,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "2009",
        about: "Green Life Medical College is known for its excellent infrastructure and teaching.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Modern campus", "Excellent faculty", "Good hospital"]
      },
      { 
        name: "Medical College For Women", 
        slug: "medical-college-for-women",
        location: "Dhaka", 
        tuitionFee: "₹3.8L/year", 
        totalFee: "₹19L (5 years)",
        hostelFee: "₹42,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO"],
        established: "1997",
        about: "Medical College For Women is dedicated to women's medical education.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified", "Female candidates only"],
        advantages: ["Women only", "Safe environment", "Quality education"]
      },
      { 
        name: "Dhaka National Medical College", 
        slug: "dhaka-national-medical-college",
        location: "Dhaka", 
        tuitionFee: "₹3.5L/year", 
        totalFee: "₹17.5L (5 years)",
        hostelFee: "₹40,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "2000",
        about: "Dhaka National Medical College offers affordable quality education.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Affordable fees", "Central location", "Good faculty"]
      },
      { 
        name: "International Medical College", 
        slug: "international-medical-college-bangladesh",
        location: "Gazipur", 
        tuitionFee: "₹3.8L/year", 
        totalFee: "₹19L (5 years)",
        hostelFee: "₹42,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO"],
        established: "2000",
        about: "International Medical College offers quality education with international standards.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["International standards", "Modern facilities", "Good placements"]
      },
      { 
        name: "Southern Medical College", 
        slug: "southern-medical-college",
        location: "Chittagong", 
        tuitionFee: "₹3.6L/year", 
        totalFee: "₹18L (5 years)",
        hostelFee: "₹38,000/year",
        duration: "5 years", 
        recognition: ["NMC", "WHO"],
        established: "2008",
        about: "Southern Medical College is a well-established medical institution in Chittagong.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Port city", "Good infrastructure", "Affordable"]
      },
    ],
    benefits: ["English medium", "Affordable living", "Similar culture", "NMC approved", "Quality education"],
    eligibility: ["50% in PCB for General", "NEET Qualified", "17 years of age"],
    documents: ["10th & 12th Marksheets", "NEET Scorecard", "Passport", "Birth Certificate", "Medical Certificate"]
  },
  {
    name: "Egypt",
    slug: "egypt",
    flag: "🇪🇬",
    heroImage: "/assets/unsplash-1539768942893-daf53e448371.jpg",
    description: "Egypt offers world-renowned medical education with ancient universities and modern teaching methods.",
    universities: [
      { 
        name: "Cairo University", 
        slug: "cairo-university",
        location: "Cairo", 
        tuitionFee: "₹5L/year", 
        totalFee: "₹30L (6 years)",
        hostelFee: "₹55,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1908",
        ranking: "Top 1 in Egypt",
        about: "Cairo University is one of Africa's oldest and most prestigious universities.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Historic university", "Excellent reputation", "Strong alumni network"]
      },
      { 
        name: "Alexandria University", 
        slug: "alexandria-university",
        location: "Alexandria", 
        tuitionFee: "₹4.5L/year", 
        totalFee: "₹27L (6 years)",
        hostelFee: "₹50,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO"],
        established: "1938",
        about: "Alexandria University offers excellent medical education in a beautiful coastal city.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Coastal city", "Good climate", "Quality education"]
      },
      { 
        name: "Ain Shams University", 
        slug: "ain-shams-university",
        location: "Cairo", 
        tuitionFee: "₹4.8L/year", 
        totalFee: "₹28.8L (6 years)",
        hostelFee: "₹52,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1950",
        ranking: "Top 3 in Egypt",
        about: "Ain Shams University is one of Egypt's largest and most comprehensive universities.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Large university", "Many departments", "Research opportunities"]
      },
      { 
        name: "Mansoura University", 
        slug: "mansoura-university",
        location: "Mansoura", 
        tuitionFee: "₹4.2L/year", 
        totalFee: "₹25.2L (6 years)",
        hostelFee: "₹45,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO"],
        established: "1962",
        about: "Mansoura University is known for its excellent medical faculty and research.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Research focus", "Good faculty", "Affordable"]
      },
      { 
        name: "Suez Canal University", 
        slug: "suez-canal-university",
        location: "Ismailia", 
        tuitionFee: "₹4L/year", 
        totalFee: "₹24L (6 years)",
        hostelFee: "₹42,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO"],
        established: "1976",
        about: "Suez Canal University offers quality medical education in a strategic location.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Strategic location", "Modern facilities", "Affordable fees"]
      },
    ],
    benefits: ["Ancient universities", "English medium", "Rich cultural experience", "NMC approved", "Affordable fees"],
    eligibility: ["50% in PCB for General", "NEET Qualified", "17 years of age"],
    documents: ["10th & 12th Marksheets", "NEET Scorecard", "Passport", "Birth Certificate", "Medical Certificate"]
  },
  {
    name: "Belarus",
    slug: "belarus",
    flag: "🇧🇾",
    heroImage: "/assets/unsplash-1523580846011-d3a5bc25702b.jpg",
    description: "Belarus provides European standard medical education with globally recognized degrees at affordable costs.",
    universities: [
      { 
        name: "Belarusian State Medical University", 
        slug: "belarusian-state-medical-university",
        location: "Minsk", 
        tuitionFee: "₹4L/year", 
        totalFee: "₹24L (6 years)",
        hostelFee: "₹45,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1921",
        ranking: "Top 1 in Belarus",
        about: "Belarusian State Medical University is the premier medical institution in Belarus.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Top ranked", "Capital city", "European standard"]
      },
      { 
        name: "Grodno State Medical University", 
        slug: "grodno-state-medical-university",
        location: "Grodno", 
        tuitionFee: "₹3.5L/year", 
        totalFee: "₹21L (6 years)",
        hostelFee: "₹38,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1958",
        about: "Grodno State Medical University offers quality education at affordable rates.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Affordable fees", "Historic city", "Good facilities"]
      },
      { 
        name: "Vitebsk State Medical University", 
        slug: "vitebsk-state-medical-university",
        location: "Vitebsk", 
        tuitionFee: "₹3.5L/year", 
        totalFee: "₹21L (6 years)",
        hostelFee: "₹38,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO", "FAIMER"],
        established: "1934",
        about: "Vitebsk State Medical University is known for its excellent faculty and research.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Quality faculty", "Research opportunities", "Affordable"]
      },
      { 
        name: "Gomel State Medical University", 
        slug: "gomel-state-medical-university",
        location: "Gomel", 
        tuitionFee: "₹3.2L/year", 
        totalFee: "₹19.2L (6 years)",
        hostelFee: "₹35,000/year",
        duration: "6 years", 
        recognition: ["NMC", "WHO"],
        established: "1990",
        about: "Gomel State Medical University offers affordable medical education with good facilities.",
        eligibility: ["50% in PCB for General Category", "NEET Qualified"],
        advantages: ["Most affordable in Belarus", "Modern campus", "English medium"]
      },
    ],
    benefits: ["European standard", "English medium", "Safe country", "NMC approved", "Modern infrastructure"],
    eligibility: ["50% in PCB for General", "NEET Qualified", "17 years of age"],
    documents: ["10th & 12th Marksheets", "NEET Scorecard", "Passport", "Birth Certificate", "Medical Certificate"]
  },
  createCountryTemplate({
    name: "Philippines",
    slug: "philippines",
    flag: "🇵🇭",
    universities: [
      buildUniversity("University of the Philippines Manila", "Manila"),
      buildUniversity("University of Santo Tomas Faculty of Medicine and Surgery", "Manila"),
      buildUniversity("Ateneo de Manila University School of Medicine and Public Health", "Pasig, Metro Manila"),
      buildUniversity("De La Salle Medical and Health Sciences Institute", "Dasmarinas"),
      buildUniversity("Cebu Institute of Medicine", "Cebu City"),
    ],
  }),
  createCountryTemplate({
    name: "Georgia",
    slug: "georgia",
    flag: "🇬🇪",
    universities: [
      buildUniversity("Tbilisi State Medical University", "Tbilisi"),
      buildUniversity("David Tvildiani Medical University", "Tbilisi"),
      buildUniversity("Georgian National University SEU", "Tbilisi"),
      buildUniversity("University of Georgia", "Tbilisi"),
      buildUniversity("Batumi Shota Rustaveli State University", "Batumi"),
    ],
  }),
  createCountryTemplate({
    name: "Armenia",
    slug: "armenia",
    flag: "🇦🇲",
    universities: [
      buildUniversity("Yerevan State Medical University", "Yerevan"),
      buildUniversity("Armenian Medical Institute", "Yerevan"),
      buildUniversity("University of Traditional Medicine", "Yerevan"),
      buildUniversity("Yerevan State University Faculty of Medicine", "Yerevan"),
      buildUniversity("St. Theresa Medical University", "Yerevan"),
    ],
  }),
  createCountryTemplate({
    name: "Ukraine",
    slug: "ukraine",
    flag: "🇺🇦",
    universities: [
      buildUniversity("Bogomolets National Medical University", "Kyiv"),
      buildUniversity("Lviv National Medical University", "Lviv"),
      buildUniversity("Kharkiv National Medical University", "Kharkiv"),
      buildUniversity("Odesa National Medical University", "Odesa"),
      buildUniversity("Dnipro State Medical University", "Dnipro"),
    ],
  }),
  createCountryTemplate({
    name: "China",
    slug: "china",
    flag: "🇨🇳",
    universities: [
      buildUniversity("Peking University Health Science Center", "Beijing"),
      buildUniversity("Fudan University Shanghai Medical College", "Shanghai"),
      buildUniversity("Shanghai Jiao Tong University School of Medicine", "Shanghai"),
      buildUniversity("Zhejiang University School of Medicine", "Hangzhou"),
      buildUniversity("Sun Yat-sen University Zhongshan School of Medicine", "Guangzhou"),
    ],
  }),
  createCountryTemplate({
    name: "Poland",
    slug: "poland",
    flag: "🇵🇱",
    universities: [
      buildUniversity("Medical University of Warsaw", "Warsaw"),
      buildUniversity("Jagiellonian University Medical College", "Krakow"),
      buildUniversity("Medical University of Gdansk", "Gdansk"),
      buildUniversity("Poznan University of Medical Sciences", "Poznan"),
      buildUniversity("Medical University of Lublin", "Lublin"),
    ],
  }),
  createCountryTemplate({
    name: "Czech Republic",
    slug: "czech-republic",
    flag: "🇨🇿",
    universities: [
      buildUniversity("Charles University First Faculty of Medicine", "Prague"),
      buildUniversity("Charles University Second Faculty of Medicine", "Prague"),
      buildUniversity("Charles University Third Faculty of Medicine", "Prague"),
      buildUniversity("Masaryk University Faculty of Medicine", "Brno"),
      buildUniversity("Palacky University Faculty of Medicine", "Olomouc"),
    ],
  }),
  createCountryTemplate({
    name: "Croatia",
    slug: "croatia",
    flag: "🇭🇷",
    universities: [
      buildUniversity("University of Zagreb School of Medicine", "Zagreb"),
      buildUniversity("University of Split School of Medicine", "Split"),
      buildUniversity("University of Rijeka Faculty of Medicine", "Rijeka"),
      buildUniversity("Josip Juraj Strossmayer University of Osijek Faculty of Medicine", "Osijek"),
    ],
  }),
  createCountryTemplate({
    name: "Latvia",
    slug: "latvia",
    flag: "🇱🇻",
    universities: [
      buildUniversity("Riga Stradins University", "Riga"),
      buildUniversity("University of Latvia Faculty of Medicine", "Riga"),
    ],
  }),
  createCountryTemplate({
    name: "Uzbekistan",
    slug: "uzbekistan",
    flag: "🇺🇿",
    universities: [
      buildUniversity("Tashkent Medical Academy", "Tashkent"),
      buildUniversity("Samarkand State Medical University", "Samarkand"),
      buildUniversity("Bukhara State Medical Institute", "Bukhara"),
      buildUniversity("Andijan State Medical Institute", "Andijan"),
      buildUniversity("Tashkent Pediatric Medical Institute", "Tashkent"),
    ],
  }),
  createCountryTemplate({
    name: "Mauritius",
    slug: "mauritius",
    flag: "🇲🇺",
    universities: [
      buildUniversity("Sir Seewoosagur Ramgoolam Medical College", "Belle Rive"),
      buildUniversity("Anna Medical College", "Vacoas-Phoenix"),
      buildUniversity("JSS School of Medicine (Mauritius)", "Vacoas"),
      buildUniversity("Dr. D. Y. Patil Medical College (Mauritius)", "Mauritius"),
      buildUniversity("University of Mauritius Faculty of Medicine and Health Sciences", "Reduit"),
    ],
  }),
  createCountryTemplate({
    name: "Italy",
    slug: "italy",
    flag: "🇮🇹",
    universities: [
      buildUniversity("Sapienza University of Rome", "Rome"),
      buildUniversity("University of Milan", "Milan"),
      buildUniversity("University of Bologna", "Bologna"),
      buildUniversity("University of Padua", "Padua"),
      buildUniversity("University of Pavia", "Pavia"),
    ],
  }),
  createCountryTemplate({
    name: "Romania",
    slug: "romania",
    flag: "🇷🇴",
    universities: [
      buildUniversity("Carol Davila University of Medicine and Pharmacy", "Bucharest"),
      buildUniversity("Iuliu Hatieganu University of Medicine and Pharmacy", "Cluj-Napoca"),
      buildUniversity("Grigore T. Popa University of Medicine and Pharmacy", "Iasi"),
      buildUniversity("Victor Babes University of Medicine and Pharmacy", "Timisoara"),
      buildUniversity("University of Medicine and Pharmacy of Craiova", "Craiova"),
    ],
  }),
  createCountryTemplate({
    name: "Hungary",
    slug: "hungary",
    flag: "🇭🇺",
    universities: [
      buildUniversity("Semmelweis University", "Budapest"),
      buildUniversity("University of Debrecen", "Debrecen"),
      buildUniversity("University of Szeged", "Szeged"),
      buildUniversity("University of Pecs", "Pecs"),
    ],
  }),
  createCountryTemplate({
    name: "Turkey",
    slug: "turkey",
    flag: "🇹🇷",
    universities: [
      buildUniversity("Hacettepe University", "Ankara"),
      buildUniversity("Istanbul University-Cerrahpasa", "Istanbul"),
      buildUniversity("Ankara University", "Ankara"),
      buildUniversity("Ege University", "Izmir"),
      buildUniversity("Koc University", "Istanbul"),
    ],
  }),
  createCountryTemplate({
    name: "India",
    slug: "india",
    flag: "🇮🇳",
    description:
      "India offers MBBS programs through government and private medical colleges. Admissions, fees, and seat availability vary by category and institution.",
    outlook:
      "We guide students through NEET-based admissions, college shortlisting, and documentation to find the right MBBS seat in India.",
    keyFeatures: [
      "Large network of government and private medical colleges",
      "NEET-based admission process",
      "5.5-year MBBS including internship",
      "Clinical exposure in diverse hospitals",
    ],
    advantages: [
      "Stay close to home with familiar culture",
      "Strong clinical exposure",
      "Wide range of college options",
      "Eligibility for Indian licensing pathway",
    ],
    disadvantages: [
      "High competition for government seats",
      "Private college fees can be high",
      "Seat availability varies by state quotas",
    ],
    whyStudy: [
      "Established medical education ecosystem",
      "Internship and licensing pathway in India",
      "Access to a wide range of specializations",
    ],
    universities: [
      buildUniversity("All India Institute of Medical Sciences (AIIMS) New Delhi", "New Delhi", {
        duration: "5.5 years (incl. internship)",
      }),
      buildUniversity("Christian Medical College", "Vellore", {
        duration: "5.5 years (incl. internship)",
      }),
      buildUniversity("Armed Forces Medical College", "Pune", {
        duration: "5.5 years (incl. internship)",
      }),
      buildUniversity("Maulana Azad Medical College", "New Delhi", {
        duration: "5.5 years (incl. internship)",
      }),
      buildUniversity("King George's Medical University", "Lucknow", {
        duration: "5.5 years (incl. internship)",
      }),
    ],
    topUniversitiesNote: "Representative list shared; final shortlist depends on NEET rank and counselling.",
  }),
  createCountryTemplate({
    name: "Timor-Leste",
    slug: "timor-leste",
    flag: "🇹🇱",
    universities: [
      buildUniversity("Universidade Nacional Timor Lorosa'e (UNTL) Faculty of Medicine", "Dili"),
      buildUniversity("Universidade Catolica Timorense (UCT) Faculty of Medical Sciences", "Dili"),
      buildUniversity("Universidade da Paz (UNPAZ) Faculty of Medicine", "Dili"),
    ],
  }),
  createCountryTemplate({
    name: "Finland",
    slug: "finland",
    flag: "🇫🇮",
    universities: [
      buildUniversity("University of Helsinki Faculty of Medicine", "Helsinki"),
      buildUniversity("University of Turku Faculty of Medicine", "Turku"),
      buildUniversity("University of Oulu Faculty of Medicine", "Oulu"),
      buildUniversity("Tampere University Faculty of Medicine and Health Technology", "Tampere"),
      buildUniversity("University of Eastern Finland Faculty of Health Sciences", "Kuopio"),
    ],
  }),
  createCountryTemplate({
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    universities: [
      buildUniversity("Trinity College Dublin", "Dublin"),
      buildUniversity("University College Dublin", "Dublin"),
      buildUniversity("University College Cork", "Cork"),
      buildUniversity("University of Galway", "Galway"),
      buildUniversity("Royal College of Surgeons in Ireland", "Dublin"),
    ],
  }),
  createCountryTemplate({
    name: "Malaysia",
    slug: "malaysia",
    flag: "🇲🇾",
    universities: [
      buildUniversity("University of Malaya", "Kuala Lumpur"),
      buildUniversity("Universiti Kebangsaan Malaysia (UKM)", "Bangi"),
      buildUniversity("Universiti Sains Malaysia (USM)", "Penang"),
      buildUniversity("Universiti Putra Malaysia (UPM)", "Serdang"),
      buildUniversity("Monash University Malaysia", "Subang Jaya"),
    ],
  }),
];

export const comparisonData = [
  { parameter: "Course Duration", india: "5.5 years (incl. internship)", abroad: "5-6 years (incl. internship)" },
  { parameter: "Tuition Fees (Total)", india: "₹50 Lakhs - ₹1 Crore+", abroad: "₹15 - ₹25 Lakhs" },
  { parameter: "Admission Process", india: "NEET + Counselling + Donation", abroad: "NEET Qualified (No Donation)" },
  { parameter: "Seat Availability", india: "Limited (~1 Lakh seats)", abroad: "Abundant seats available" },
  { parameter: "Language of Instruction", india: "English", abroad: "English" },
  { parameter: "Global Recognition", india: "NMC Approved", abroad: "NMC, WHO & FAIMER Approved" },
  { parameter: "Clinical Exposure", india: "Good", abroad: "Excellent with diverse cases" },
  { parameter: "Living & Hostel Cost", india: "₹8k - ₹15k/month", abroad: "₹10k - ₹18k/month" },
  { parameter: "Career Opportunities", india: "Practice in India", abroad: "Practice globally (India, UK, USA, etc.)" },
  { parameter: "ROI (Return on Investment)", india: "10-15 years to recover", abroad: "3-5 years to recover" },
];

export const whyStudyAbroadBenefits = [
  {
    title: "Affordable Education",
    description: "Complete your MBBS degree for as low as ₹15-25 lakhs total, compared to ₹50 lakhs to ₹1 crore in Indian private colleges.",
    icon: "wallet"
  },
  {
    title: "No Capitation Fee",
    description: "Zero donation or capitation fees required. Pay only the official university fees with complete transparency.",
    icon: "ban"
  },
  {
    title: "Global Career Scope",
    description: "With internationally recognized degrees, you can pursue medical practice or further studies in countries like USA, UK, Canada, and more.",
    icon: "globe"
  },
  {
    title: "English Medium Programs",
    description: "All our partner universities offer complete MBBS programs in English medium with experienced international faculty.",
    icon: "languages"
  },
  {
    title: "Modern Curriculum",
    description: "Universities follow updated medical curricula aligned with global standards, preparing you for modern healthcare challenges.",
    icon: "book-open"
  },
  {
    title: "Recognized Degrees",
    description: "All universities are approved by NMC (National Medical Commission), WHO, and listed in FAIMER directory.",
    icon: "shield-check"
  },
  {
    title: "Transparent Process",
    description: "GoGlobalEdTechPvtLtd ensures 100% transparency in fees and admission process. No hidden charges or surprises.",
    icon: "receipt"
  },
  {
    title: "Complete Support",
    description: "From admission to visa, accommodation to travel - we provide end-to-end assistance throughout your journey.",
    icon: "briefcase"
  },
];

export const getMBBSCountryBySlug = (slug: string): MBBSCountry | undefined => {
  return mbbsCountries.find(country => country.slug === slug);
};

export const getUniversityBySlug = (universitySlug: string): { university: MBBSUniversity; country: MBBSCountry } | undefined => {
  for (const country of mbbsCountries) {
    const university = country.universities.find(u => u.slug === universitySlug);
    if (university) {
      return { university, country };
    }
  }
  return undefined;
};
