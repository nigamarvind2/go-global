export interface University {
  name: string;
  url: string;
}

export interface CountryData {
  name: string;
  slug: string;
  flag: string;
  heroImage: string;
  heroDescription: string;
  highlights: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  universities: University[];
  courses: string[];
  admissionRequirements: string[];
  visaRequirements: string[];
}

export const countryData: Record<string, CountryData> = {
  australia: {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&h=800&fit=crop",
    heroDescription: "For those who envisage a new overseas career, study in Australia has a lot to offer. Though this country sticks to its culture, its modern lifestyle is highly regarded by the aspirants. The Higher education institutions in Australia are ranked among the best in the world. The CRICOS code given to international students declares that study in Australia has achieved worldwide recognition. The higher education courses are shorter and intensive which ensures value for money. Australian universities provide post-study work permits to international students which also play a pivotal role in getting PR. The duration of master courses ranges from one to two years. The visa process is fair and straightforward.",
    highlights: [
      "Globally recognised courses and institutions",
      "Lively and multicultural lifestyle",
      "Reasonable study costs",
      "Beautiful weather and landscapes"
    ],
    benefits: [
      { title: "World-class education", description: "Australian universities offer programs and courses that are recognised globally." },
      { title: "High quality of life", description: "Australia consistently scores well in surveys and studies that measure quality of life." },
      { title: "Superb research opportunities", description: "Australia invests heavily in research and has produced outstanding research in various fields." },
      { title: "Seven out of the top 100 universities in the world", description: "The 2023 QS World University Rankings includes 38 Australian universities. Of those 38 universities, seven is in the top 100." },
      { title: "Many scholarships for international students", description: "These are offered by the Australian government, education institutions, and a number of public and private organisations." },
      { title: "You can study just about anything", description: "The more than 40 universities across Australia offer hundreds of courses and degrees to choose from. You'll be able to find a qualification in almost every discipline and field of study." },
      { title: "You can work while you study", description: "Australia allows student visa holders to work while they're studying. The Department of Home Affairs made a temporary concession in 2022 that allows students to work unlimited hours in any sector." },
      { title: "The opportunity to work in Australia after your studies", description: "The Temporary Graduate Visa (subclass 485) offers international students who've studied in Australia for at least two years the opportunity to apply for temporary permission to work in Australia." },
      { title: "You're protected by TEQSA and the ESOS Act", description: "Australia's Tertiary Education Quality and Standards Agency, or TEQSA, acts as a national regulatory and quality agency for higher education. The Agency monitor quality and regulate university and non-university higher education providers against a set of standards developed by the independent Higher Education Standards Panel." }
    ],
    universities: [
      { name: "University of Melbourne", url: "https://www.unimelb.edu.au/" },
      { name: "University of Adelaide", url: "https://www.adelaide.edu.au/" },
      { name: "University of Sydney", url: "https://www.sydney.edu.au/" },
      { name: "University of Western Australia", url: "https://www.uwa.edu.au/" },
      { name: "University of New South Wales", url: "https://www.unsw.edu.au/" },
      { name: "Queensland University of Technology", url: "https://www.qut.edu.au/" },
      { name: "University of Queensland", url: "https://www.uq.edu.au/" },
      { name: "Macquarie University", url: "https://www.mq.edu.au/" },
      { name: "Monash University", url: "https://www.monash.edu/" },
      { name: "Griffith University", url: "https://www.griffith.edu.au/" },
      { name: "Australian National University", url: "https://www.anu.edu.au/" },
      { name: "University of Newcastle", url: "https://www.newcastle.edu.au/" }
    ],
    courses: [
      "Actuarial Science",
      "Social Work",
      "Nursing",
      "Accountant",
      "Architect",
      "Public Health",
      "MBA",
      "Software Engineers"
    ],
    admissionRequirements: [
      "10th and 12th (for bachelor's course)",
      "IELTS - 6.5 For Masters (if applicable)",
      "SOP for Australia",
      "Bachelor's degree certificate, individual Marklists (for master's course)",
      "Medium of Instruction",
      "Letter of recommendation (2 Nos)",
      "IELTS – 6 Band for Bachelors (if applicable)",
      "Scanned copy of the passport",
      "Experience Letter (if applicable)",
      "Resume or CV"
    ],
    visaRequirements: [
      "Completed Australian student visa application form (157A)",
      "Paid visa application fee – currently AU$650 (~US$438) in most cases",
      "Copy of passport biodata page (some students may be asked to physically provide their passport)",
      "Certificate of Enrolment or Letter of Offer",
      "Evidence of health insurance cover",
      "English proficiency test results",
      "Criminal record check results",
      "Four recent passport-sized photographs",
      "After you have assembled and scanned your supporting documents, you'll need to create an account and apply with the online ImmiAccount application system",
      "Evidence of sufficient funds to cover tuition, travel and living costs. From February 2018, the amount you need to prove you have for living costs (separate from tuition and travel) is set at AU$21,041 (~US$14,185) for a year. If you have dependents (such as a spouse and children), you will also need to show evidence of being able to cover living costs for them, including school fees. Alternatively, you can show evidence that your spouse or parents are willing to support you and that they earn at least AU$62,222 (~US$41,949) a year."
    ]
  },
  uk: {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=800&fit=crop",
    heroDescription: "The United Kingdom is home to some of the world's oldest and most prestigious universities. With centuries of academic excellence, the UK offers a rich cultural experience alongside world-class education. British universities are known for their research excellence and innovative teaching methods. The UK's multicultural environment welcomes students from all over the world, providing a truly international experience. With the Graduate Route visa, international students can stay and work in the UK for up to 2 years after completing their degree.",
    highlights: [
      "Home to world-renowned universities",
      "Rich cultural heritage and history",
      "Graduate Route - 2 year post-study work visa",
      "Shorter course duration saves time and money"
    ],
    benefits: [
      { title: "World-renowned universities", description: "The UK is home to some of the world's oldest and most prestigious universities including Oxford, Cambridge, and Imperial College." },
      { title: "Shorter course duration", description: "Undergraduate degrees typically take 3 years and master's degrees 1 year, saving both time and money compared to other countries." },
      { title: "Rich cultural experience", description: "Experience centuries of history, diverse cultures, and vibrant city life across England, Scotland, Wales, and Northern Ireland." },
      { title: "Four of the world's top 10 universities", description: "The UK consistently ranks highly in global university rankings, with Oxford, Cambridge, Imperial, and UCL in the top 10." },
      { title: "Graduate Route visa", description: "International students can stay and work in the UK for 2 years (3 years for PhD graduates) after completing their studies." },
      { title: "Research excellence", description: "UK universities are at the forefront of research and innovation, contributing significantly to global knowledge and discoveries." },
      { title: "NHS healthcare access", description: "International students studying for 6+ months can access the UK's National Health Service for healthcare during their studies." },
      { title: "Work while studying", description: "International students can work up to 20 hours per week during term time and full-time during holidays." },
      { title: "Global recognition", description: "UK qualifications are recognized and respected by employers and institutions worldwide." }
    ],
    universities: [
      { name: "University of Oxford", url: "https://www.ox.ac.uk/" },
      { name: "University of Cambridge", url: "https://www.cam.ac.uk/" },
      { name: "Imperial College London", url: "https://www.imperial.ac.uk/" },
      { name: "University College London", url: "https://www.ucl.ac.uk/" },
      { name: "University of Edinburgh", url: "https://www.ed.ac.uk/" },
      { name: "University of Manchester", url: "https://www.manchester.ac.uk/" },
      { name: "King's College London", url: "https://www.kcl.ac.uk/" },
      { name: "London School of Economics", url: "https://www.lse.ac.uk/" },
      { name: "University of Warwick", url: "https://warwick.ac.uk/" },
      { name: "University of Bristol", url: "https://www.bristol.ac.uk/" },
      { name: "University of Glasgow", url: "https://www.gla.ac.uk/" },
      { name: "Durham University", url: "https://www.durham.ac.uk/" }
    ],
    courses: [
      "Business & Management",
      "Computer Science",
      "Engineering",
      "Medicine",
      "Law",
      "Data Science",
      "Finance & Economics",
      "Arts & Design"
    ],
    admissionRequirements: [
      "10th and 12th marksheets (for undergraduate)",
      "Bachelor's degree certificate and transcripts (for postgraduate)",
      "IELTS - 6.0 to 7.0 depending on course",
      "Statement of Purpose (SOP)",
      "Letters of recommendation (2-3)",
      "Scanned copy of passport",
      "CV/Resume (for postgraduate)",
      "Portfolio (for arts/design courses)",
      "Work experience (if applicable)",
      "English language proficiency proof"
    ],
    visaRequirements: [
      "Valid passport",
      "Confirmation of Acceptance for Studies (CAS) from your university",
      "Proof of English language proficiency",
      "Financial evidence showing you can support yourself",
      "Tuberculosis (TB) test results if from listed countries",
      "Academic Technology Approval Scheme (ATAS) certificate if required",
      "Immigration Health Surcharge (IHS) payment",
      "Visa application fee (approximately £363)",
      "Biometric information",
      "Proof of accommodation in the UK"
    ]
  },
  usa: {
    name: "United States",
    slug: "usa",
    flag: "🇺🇸",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=800&fit=crop",
    heroDescription: "The United States is the world's leading destination for international students, home to the most prestigious universities and colleges. American higher education emphasizes innovation, research, and practical learning. With diverse campus experiences, cutting-edge facilities, and unparalleled networking opportunities, studying in the USA opens doors to global careers. The Optional Practical Training (OPT) program allows international students to work in their field of study for up to 3 years after graduation in STEM fields.",
    highlights: [
      "Home to Ivy League universities",
      "OPT - Up to 3 years work authorization",
      "World leader in research and innovation",
      "Diverse campus life and networking"
    ],
    benefits: [
      { title: "World's top universities", description: "The US is home to more top-ranked universities than any other country, including Harvard, MIT, Stanford, and the Ivy League schools." },
      { title: "Flexible education system", description: "American universities offer a flexible curriculum allowing students to explore different subjects before declaring a major." },
      { title: "Cutting-edge research", description: "US universities lead the world in research funding and innovation, offering unparalleled opportunities for academic exploration." },
      { title: "Optional Practical Training (OPT)", description: "International students can work in the US for up to 12 months after graduation, extended to 36 months for STEM graduates." },
      { title: "Campus life experience", description: "American universities offer a unique campus experience with extensive facilities, clubs, sports, and social activities." },
      { title: "Networking opportunities", description: "Build connections with global leaders, entrepreneurs, and industry professionals through university networks and alumni associations." },
      { title: "Scholarship opportunities", description: "US universities offer generous financial aid and scholarship programs for international students based on merit and need." },
      { title: "Diverse student body", description: "Study alongside students from every corner of the world in a truly multicultural environment." },
      { title: "Industry connections", description: "Many universities have strong ties with Fortune 500 companies and Silicon Valley, offering internship and job opportunities." }
    ],
    universities: [
      { name: "Harvard University", url: "https://www.harvard.edu/" },
      { name: "Massachusetts Institute of Technology", url: "https://www.mit.edu/" },
      { name: "Stanford University", url: "https://www.stanford.edu/" },
      { name: "Yale University", url: "https://www.yale.edu/" },
      { name: "Princeton University", url: "https://www.princeton.edu/" },
      { name: "Columbia University", url: "https://www.columbia.edu/" },
      { name: "University of Chicago", url: "https://www.uchicago.edu/" },
      { name: "University of Pennsylvania", url: "https://www.upenn.edu/" },
      { name: "California Institute of Technology", url: "https://www.caltech.edu/" },
      { name: "Duke University", url: "https://duke.edu/" },
      { name: "Northwestern University", url: "https://www.northwestern.edu/" },
      { name: "New York University", url: "https://www.nyu.edu/" }
    ],
    courses: [
      "Computer Science",
      "Business Administration",
      "Engineering",
      "Data Science & AI",
      "Medicine & Healthcare",
      "Law",
      "Finance",
      "Biotechnology"
    ],
    admissionRequirements: [
      "High school diploma and transcripts",
      "SAT or ACT scores (for undergraduate)",
      "GRE or GMAT scores (for graduate programs)",
      "TOEFL or IELTS scores",
      "Statement of Purpose (SOP)",
      "Letters of recommendation (2-3)",
      "Resume/CV",
      "Valid passport",
      "Portfolio (for arts/design programs)",
      "Interview (for some programs)"
    ],
    visaRequirements: [
      "Valid passport (at least 6 months beyond intended stay)",
      "Form I-20 from SEVP-approved institution",
      "SEVIS fee payment receipt",
      "DS-160 online application",
      "Visa application fee payment",
      "Passport-sized photograph",
      "Financial documents proving ability to pay",
      "Academic transcripts and test scores",
      "Proof of ties to home country",
      "Visa interview at US Embassy/Consulate"
    ]
  },
  canada: {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    heroImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=800&fit=crop",
    heroDescription: "Canada is one of the most welcoming countries for international students, known for its high-quality education, multicultural society, and excellent post-study work opportunities. Canadian universities are globally recognized for their academic excellence and research. The Post-Graduation Work Permit (PGWP) allows students to work in Canada for up to 3 years after graduation, and Canada's immigration-friendly policies provide clear pathways to permanent residency.",
    highlights: [
      "Affordable tuition compared to US/UK",
      "PGWP - Up to 3 years work permit",
      "Clear pathway to permanent residency",
      "Safe and multicultural environment"
    ],
    benefits: [
      { title: "High-quality education", description: "Canadian universities are known for academic excellence, with several consistently ranking among the world's top institutions." },
      { title: "Affordable tuition fees", description: "Compared to the US and UK, Canadian universities offer competitive tuition fees while maintaining high academic standards." },
      { title: "Post-Graduation Work Permit", description: "The PGWP allows international students to work in Canada for up to 3 years after completing their studies." },
      { title: "Immigration pathways", description: "Canada offers clear pathways to permanent residency through programs like Express Entry and Provincial Nominee Programs." },
      { title: "Safe and welcoming", description: "Canada is consistently ranked as one of the safest and most peaceful countries in the world." },
      { title: "Multicultural society", description: "Canada embraces diversity with people from all backgrounds, making international students feel at home." },
      { title: "Work while studying", description: "International students can work up to 20 hours per week during academic sessions and full-time during breaks." },
      { title: "Bilingual advantage", description: "Study in English or French, gaining valuable bilingual skills that enhance career prospects." },
      { title: "Natural beauty", description: "Experience Canada's stunning landscapes from the Rocky Mountains to the Northern Lights." }
    ],
    universities: [
      { name: "University of Toronto", url: "https://www.utoronto.ca/" },
      { name: "McGill University", url: "https://www.mcgill.ca/" },
      { name: "University of British Columbia", url: "https://www.ubc.ca/" },
      { name: "University of Waterloo", url: "https://uwaterloo.ca/" },
      { name: "University of Alberta", url: "https://www.ualberta.ca/" },
      { name: "McMaster University", url: "https://www.mcmaster.ca/" },
      { name: "University of Montreal", url: "https://www.umontreal.ca/" },
      { name: "University of Calgary", url: "https://www.ucalgary.ca/" },
      { name: "Western University", url: "https://www.uwo.ca/" },
      { name: "Queen's University", url: "https://www.queensu.ca/" },
      { name: "Simon Fraser University", url: "https://www.sfu.ca/" },
      { name: "University of Ottawa", url: "https://www.uottawa.ca/" }
    ],
    courses: [
      "Computer Science",
      "Business & Management",
      "Engineering",
      "Healthcare & Nursing",
      "Data Analytics",
      "Hospitality Management",
      "Environmental Science",
      "Finance & Accounting"
    ],
    admissionRequirements: [
      "10th and 12th marksheets (for undergraduate)",
      "Bachelor's degree and transcripts (for postgraduate)",
      "IELTS - 6.0 to 7.0 overall band",
      "Statement of Purpose (SOP)",
      "Letters of recommendation (2-3)",
      "Valid passport",
      "CV/Resume",
      "GRE/GMAT (for some programs)",
      "Work experience (if applicable)",
      "Portfolio (for creative programs)"
    ],
    visaRequirements: [
      "Valid passport",
      "Letter of Acceptance from a DLI (Designated Learning Institution)",
      "Proof of sufficient funds for tuition and living expenses",
      "Immigration medical examination",
      "Police clearance certificate",
      "Statement of Purpose (study plan)",
      "Proof of ties to home country",
      "Biometrics (fingerprints and photo)",
      "Application fee payment",
      "Quebec Acceptance Certificate (CAQ) if studying in Quebec"
    ]
  },
  germany: {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=800&fit=crop",
    heroDescription: "Germany is Europe's economic powerhouse and a top destination for international students, especially those interested in engineering, technology, and research. Most public universities in Germany offer tuition-free education, even for international students. With its strong economy, excellent job prospects, and high quality of life, Germany provides an ideal environment for academic and professional growth. The Job Seeker Visa allows graduates to stay for up to 18 months to find employment.",
    highlights: [
      "Tuition-free at public universities",
      "Excellence in engineering and technology",
      "Job Seeker Visa for 18 months",
      "Strong economy with job opportunities"
    ],
    benefits: [
      { title: "Tuition-free education", description: "Most public universities in Germany offer tuition-free education for all students, including international students." },
      { title: "Engineering excellence", description: "Germany is world-renowned for engineering and technology education, with strong industry connections." },
      { title: "Job Seeker Visa", description: "Graduates can stay in Germany for up to 18 months after completing their studies to find a job in their field." },
      { title: "Strong economy", description: "Germany has Europe's largest economy with excellent job prospects, especially in automotive, engineering, and IT sectors." },
      { title: "Research opportunities", description: "Germany is a global leader in research and innovation, with world-class research facilities and institutes." },
      { title: "Central European location", description: "Study in the heart of Europe with easy access to travel and explore neighboring countries." },
      { title: "Work while studying", description: "International students can work up to 20 hours per week during studies." },
      { title: "High quality of life", description: "Germany offers excellent infrastructure, healthcare, and a high standard of living at reasonable costs." },
      { title: "Learn German", description: "Learning German opens doors to career opportunities in German-speaking countries and multinational companies." }
    ],
    universities: [
      { name: "Technical University of Munich", url: "https://www.tum.de/" },
      { name: "Ludwig Maximilian University of Munich", url: "https://www.lmu.de/" },
      { name: "Heidelberg University", url: "https://www.uni-heidelberg.de/" },
      { name: "Humboldt University of Berlin", url: "https://www.hu-berlin.de/" },
      { name: "Free University of Berlin", url: "https://www.fu-berlin.de/" },
      { name: "RWTH Aachen University", url: "https://www.rwth-aachen.de/" },
      { name: "University of Freiburg", url: "https://uni-freiburg.de/" },
      { name: "University of Göttingen", url: "https://www.uni-goettingen.de/" },
      { name: "University of Bonn", url: "https://www.uni-bonn.de/" },
      { name: "Technical University of Berlin", url: "https://www.tu.berlin/" },
      { name: "University of Hamburg", url: "https://www.uni-hamburg.de/" },
      { name: "University of Cologne", url: "https://www.uni-koeln.de/" }
    ],
    courses: [
      "Engineering",
      "Computer Science",
      "Automotive Engineering",
      "Business Administration",
      "Mechanical Engineering",
      "Data Science",
      "Renewable Energy",
      "Biotechnology"
    ],
    admissionRequirements: [
      "High school certificate equivalent to Abitur",
      "Bachelor's degree (for master's programs)",
      "German language proficiency (TestDaF/DSH) or English (IELTS/TOEFL)",
      "APS Certificate (for some countries)",
      "Statement of Purpose",
      "Letters of recommendation",
      "CV/Resume",
      "Valid passport",
      "GRE (for some programs)",
      "Portfolio (for design/architecture)"
    ],
    visaRequirements: [
      "Valid passport",
      "University admission letter",
      "Proof of financial resources (blocked account with ~€11,208)",
      "Health insurance proof",
      "Proof of language proficiency",
      "Academic certificates and transcripts",
      "Passport-sized photographs",
      "Visa application form",
      "Proof of accommodation in Germany",
      "Biometric data"
    ]
  },
  ireland: {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    heroImage: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1200&h=800&fit=crop",
    heroDescription: "Ireland offers a unique combination of high-quality education, friendly culture, and excellent career opportunities, especially in the technology sector. As an English-speaking country in the European Union, Ireland provides a gateway to Europe's job market. Many global tech giants including Google, Facebook, Apple, and Microsoft have their European headquarters in Ireland. The Stay Back Option allows graduates to remain in Ireland for up to 2 years to seek employment.",
    highlights: [
      "English-speaking EU country",
      "European Tech Hub",
      "2-year Stay Back Option",
      "Warm and welcoming culture"
    ],
    benefits: [
      { title: "English-speaking country", description: "Study in English without language barriers in one of only two English-speaking countries in the EU." },
      { title: "Tech hub of Europe", description: "Ireland hosts European headquarters of Google, Facebook, Apple, Microsoft, and many other tech giants." },
      { title: "Stay Back Option", description: "Graduates can stay in Ireland for up to 2 years (masters) or 1 year (bachelor's) to find employment." },
      { title: "Gateway to Europe", description: "As an EU member, Ireland provides access to work and travel opportunities across the European Union." },
      { title: "Friendly culture", description: "Ireland is known for its warm, welcoming people and rich cultural heritage." },
      { title: "High graduate employability", description: "Irish university graduates have high employment rates with many finding jobs within months of graduation." },
      { title: "Research excellence", description: "Ireland invests heavily in research, particularly in pharmaceuticals, biotechnology, and ICT." },
      { title: "Safe environment", description: "Ireland is one of the safest countries in the world with a peaceful society." },
      { title: "Rich cultural heritage", description: "Experience Ireland's unique traditions, music, literature, and historic sites." }
    ],
    universities: [
      { name: "Trinity College Dublin", url: "https://www.tcd.ie/" },
      { name: "University College Dublin", url: "https://www.ucd.ie/" },
      { name: "National University of Ireland Galway", url: "https://www.nuigalway.ie/" },
      { name: "University College Cork", url: "https://www.ucc.ie/" },
      { name: "Dublin City University", url: "https://www.dcu.ie/" },
      { name: "University of Limerick", url: "https://www.ul.ie/" },
      { name: "Maynooth University", url: "https://www.maynoothuniversity.ie/" },
      { name: "Technological University Dublin", url: "https://www.tudublin.ie/" },
      { name: "Royal College of Surgeons", url: "https://www.rcsi.com/" },
      { name: "Cork Institute of Technology", url: "https://www.cit.ie/" },
      { name: "Galway-Mayo Institute of Technology", url: "https://www.gmit.ie/" },
      { name: "Waterford Institute of Technology", url: "https://www.wit.ie/" }
    ],
    courses: [
      "Computer Science & IT",
      "Business & Finance",
      "Pharmaceutical Sciences",
      "Data Analytics",
      "Digital Marketing",
      "Biotechnology",
      "Engineering",
      "Healthcare Management"
    ],
    admissionRequirements: [
      "High school transcripts",
      "Bachelor's degree (for postgraduate)",
      "IELTS - 6.0 to 6.5 overall band",
      "Statement of Purpose",
      "Letters of recommendation (2)",
      "Valid passport",
      "CV/Resume",
      "Work experience (if applicable)",
      "Portfolio (for creative courses)",
      "Academic transcripts"
    ],
    visaRequirements: [
      "Valid passport",
      "Letter of acceptance from Irish institution",
      "Evidence of tuition fee payment",
      "Proof of sufficient funds (€10,000 per year)",
      "Private medical insurance",
      "Evidence of English language proficiency",
      "Proof of accommodation",
      "Academic transcripts and certificates",
      "Police clearance certificate",
      "Visa application fee"
    ]
  },
  "new-zealand": {
    name: "New Zealand",
    slug: "new-zealand",
    flag: "🇳🇿",
    heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&h=800&fit=crop",
    heroDescription: "New Zealand offers a perfect blend of world-class education and an unparalleled quality of life. Known for its stunning natural beauty, safe environment, and welcoming culture, New Zealand is an ideal destination for international students. All eight universities in New Zealand are ranked in the top 3% globally. The Post-Study Work Visa allows graduates to stay and work in New Zealand for up to 3 years, with clear pathways to residency.",
    highlights: [
      "All 8 universities in top 3% globally",
      "Safe and peaceful country",
      "3-year Post-Study Work Visa",
      "Stunning natural landscapes"
    ],
    benefits: [
      { title: "World-class universities", description: "All eight New Zealand universities are ranked in the top 3% worldwide, offering globally recognized qualifications." },
      { title: "Safe and peaceful", description: "New Zealand is consistently ranked as one of the safest and most peaceful countries in the world." },
      { title: "Post-Study Work Visa", description: "Graduates can work in New Zealand for up to 3 years after completing their studies, depending on their qualification level." },
      { title: "Quality of life", description: "New Zealand offers an exceptional quality of life with clean air, beautiful landscapes, and a balanced lifestyle." },
      { title: "Practical learning", description: "New Zealand education emphasizes hands-on, practical learning with strong industry connections." },
      { title: "Work while studying", description: "International students can work up to 20 hours per week during term time and full-time during holidays." },
      { title: "Pathway to residency", description: "New Zealand offers clear pathways to permanent residency for skilled graduates." },
      { title: "Adventure lifestyle", description: "Experience world-famous adventure activities from bungee jumping to hiking in pristine national parks." },
      { title: "Welcoming culture", description: "New Zealand's multicultural society and Māori heritage create a unique and inclusive environment." }
    ],
    universities: [
      { name: "University of Auckland", url: "https://www.auckland.ac.nz/" },
      { name: "University of Otago", url: "https://www.otago.ac.nz/" },
      { name: "Victoria University of Wellington", url: "https://www.wgtn.ac.nz/" },
      { name: "University of Canterbury", url: "https://www.canterbury.ac.nz/" },
      { name: "University of Waikato", url: "https://www.waikato.ac.nz/" },
      { name: "Massey University", url: "https://www.massey.ac.nz/" },
      { name: "Lincoln University", url: "https://www.lincoln.ac.nz/" },
      { name: "Auckland University of Technology", url: "https://www.aut.ac.nz/" }
    ],
    courses: [
      "Agriculture & Forestry",
      "Environmental Science",
      "Tourism & Hospitality",
      "Engineering",
      "Information Technology",
      "Healthcare & Nursing",
      "Business Management",
      "Film & Media Studies"
    ],
    admissionRequirements: [
      "High school transcripts",
      "Bachelor's degree (for postgraduate)",
      "IELTS - 6.0 to 6.5 overall band",
      "Statement of Purpose",
      "Letters of recommendation",
      "Valid passport",
      "CV/Resume",
      "Work experience (if applicable)",
      "Portfolio (for creative courses)",
      "English medium instruction proof"
    ],
    visaRequirements: [
      "Valid passport",
      "Offer of place from a New Zealand institution",
      "Evidence of sufficient funds (NZ$20,000 per year)",
      "Return travel arrangements or funds",
      "Medical and chest X-ray certificates",
      "Police clearance certificate",
      "Proof of accommodation",
      "Student visa application form",
      "Visa application fee",
      "Health insurance"
    ]
  },
  france: {
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=800&fit=crop",
    heroDescription: "France is one of the world's most popular study destinations, renowned for its prestigious universities, rich culture, and excellent quality of life. From the Grandes Écoles to world-class business schools, France offers exceptional education at affordable costs. The country's central European location makes it perfect for exploring the continent. After graduation, international students can apply for a job-seeker visa or work permit.",
    highlights: [
      "Prestigious Grandes Écoles",
      "Affordable living costs",
      "Rich art and culture",
      "Central European location"
    ],
    benefits: [
      { title: "World-renowned institutions", description: "France is home to prestigious Grandes Écoles and top business schools like INSEAD, HEC Paris, and ESSEC." },
      { title: "Affordable education", description: "Public university tuition fees are among the lowest in the world, even for international students." },
      { title: "Cultural experience", description: "Experience world-famous art, cuisine, fashion, and history in one of the world's cultural capitals." },
      { title: "Central location", description: "France's location in the heart of Europe makes it easy to travel and explore neighboring countries." },
      { title: "Research opportunities", description: "France is a leader in research with strong programs in engineering, science, and humanities." },
      { title: "Post-study options", description: "Graduates can apply for a temporary residence permit to seek employment in France." },
      { title: "Learn French", description: "Learning French opens doors to opportunities in 29 French-speaking countries worldwide." },
      { title: "Student life", description: "Enjoy vibrant student cities like Paris, Lyon, and Toulouse with excellent infrastructure and social life." },
      { title: "Healthcare", description: "International students have access to France's excellent healthcare system at reduced costs." }
    ],
    universities: [
      { name: "Sorbonne University", url: "https://www.sorbonne-universite.fr/" },
      { name: "École Normale Supérieure", url: "https://www.ens.psl.eu/" },
      { name: "HEC Paris", url: "https://www.hec.edu/" },
      { name: "Sciences Po Paris", url: "https://www.sciencespo.fr/" },
      { name: "ESSEC Business School", url: "https://www.essec.edu/" },
      { name: "École Polytechnique", url: "https://www.polytechnique.edu/" },
      { name: "University of Paris", url: "https://u-paris.fr/" },
      { name: "INSEAD", url: "https://www.insead.edu/" },
      { name: "Grenoble Alpes University", url: "https://www.univ-grenoble-alpes.fr/" },
      { name: "University of Lyon", url: "https://www.universite-lyon.fr/" },
      { name: "Toulouse Business School", url: "https://www.tbs-education.com/" },
      { name: "EM Lyon Business School", url: "https://em-lyon.com/" }
    ],
    courses: [
      "Business & Management",
      "Fashion & Design",
      "Culinary Arts",
      "Engineering",
      "Art & Architecture",
      "Political Science",
      "Luxury Brand Management",
      "Wine & Gastronomy"
    ],
    admissionRequirements: [
      "High school diploma or equivalent",
      "Bachelor's degree (for masters)",
      "French language proficiency (TCF/DELF) or English (IELTS/TOEFL)",
      "Statement of Purpose",
      "Letters of recommendation",
      "Valid passport",
      "CV/Resume",
      "Campus France registration",
      "Portfolio (for art/design)",
      "GMAT/GRE (for business schools)"
    ],
    visaRequirements: [
      "Valid passport",
      "University admission letter",
      "Proof of accommodation in France",
      "Proof of financial resources (€615/month minimum)",
      "Health insurance",
      "Campus France interview completion",
      "Visa application form",
      "Passport photographs",
      "Birth certificate",
      "Visa fee payment"
    ]
  }
};

export const getCountryBySlug = (slug: string): CountryData | undefined => {
  return countryData[slug];
};

export const getAllCountrySlugs = (): string[] => {
  return Object.keys(countryData);
};
