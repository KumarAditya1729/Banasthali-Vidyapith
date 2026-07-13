export interface Course {
  id: string;
  name: string;
  degree: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Doctoral' | 'Diploma';
  facultyId: string;
  duration: string;
  eligibility: string;
  highlights: string[];
}

export interface Faculty {
  id: string;
  name: string;
  shortName: string;
  description: string;
  deanOrHead?: string;
  established?: string;
  departments: string[];
}

export const facultiesData: Faculty[] = [
  {
    id: "math-computing",
    name: "Faculty of Mathematics and Computing",
    shortName: "AIM & ACT",
    description: "Home to the Centre for Artificial Intelligence, Mathematics and Computing (AIM & ACT). Offers cutting-edge programs in Computer Science, Information Technology, Artificial Intelligence, and Mathematical Sciences.",
    departments: ["Department of Mathematics", "Department of Computer Science", "Department of Information Technology", "Department of Artificial Intelligence"]
  },
  {
    id: "engineering",
    name: "Faculty of Engineering and Technology",
    shortName: "FOET",
    description: "A premier engineering hub empowering women technologists. Featuring state-of-the-art laboratories, industry collaboration, and research in core and emerging engineering disciplines.",
    departments: ["Department of Chemical Engineering", "Department of Electronics & Communication", "Department of Electrical & Electronics", "Department of Biotechnology Engineering"]
  },
  {
    id: "life-sciences",
    name: "Faculty of Life Sciences and Earth Sciences",
    shortName: "Life Sciences",
    description: "Dedicated to pioneering research and education in biological sciences, biotechnology, bioinformatics, chemistry, pharmacy, and environmental studies.",
    departments: ["Department of Bioscience & Biotechnology", "Department of Chemistry & Pharmaceutical Chemistry", "Department of Pharmacy", "Centre for Bioinformatics", "Department of Environmental Science"]
  },
  {
    id: "management",
    name: "Faculty of Management Studies",
    shortName: "WISDOM",
    description: "Women's Institute for Studies in Development Oriented Management (WISDOM). Blending modern corporate management principles with Indian ethos and holistic leadership.",
    departments: ["Department of Management", "Department of Commerce", "Department of Banking & Finance"]
  },
  {
    id: "humanities-social",
    name: "Faculty of Humanities and Social Sciences",
    shortName: "Humanities",
    description: "Fostering deep analytical thinking, governance, social consciousness, and historical perspective across diverse disciplines.",
    departments: ["Department of Economics", "Department of History & Indian Culture", "Department of Political Science & Public Administration", "Department of Psychology", "Department of Sociology", "Department of Languages (English, Hindi, Sanskrit)"]
  },
  {
    id: "design-arts",
    name: "Faculty of Fine Arts, Design and Architecture",
    shortName: "Design & Arts",
    description: "Nurturing creative expression and practical aesthetics. Integrating traditional Indian arts (Sanganeri block printing, batik, pottery) with modern textile and fashion design.",
    departments: ["Department of Textile Design", "Department of Fashion Design", "Department of Visual Arts", "Department of Music & Dance"]
  },
  {
    id: "law",
    name: "Faculty of Law",
    shortName: "Law School",
    description: "Imparting comprehensive legal education with an emphasis on constitutional values, social justice, women's rights, and advocacy skills.",
    departments: ["Department of Constitutional Law", "Department of Corporate Law", "Department of Criminal Law"]
  },
  {
    id: "home-science",
    name: "Faculty of Home Science",
    shortName: "Home Science",
    description: "Combining nutritional science, human development, family resource management, and food technology for holistic well-being.",
    departments: ["Department of Food Science & Nutrition", "Department of Human Development", "Department of Fabric & Apparel Science"]
  },
  {
    id: "automation",
    name: "School of Automation (Bajaj Group Collaboration & Industry 4.0)",
    shortName: "Automation & Robotics",
    description: "Built in partnership with the Bajaj Group and equipped with industrial robotics and automation setups from global giants: BOSCH, FESTO, KUKA Robotics, Siemens, SMC, Mitsubishi, M-TAB, and Janatics.",
    departments: ["Centre for Computer Integrated Manufacturing (CIM)", "Robotics & Mechatronics Lab", "Hydraulics & Pneumatics Lab", "Schneider Electric Certification Hub"]
  },
  {
    id: "school-education",
    name: "School Education (Nursery to Class XII)",
    shortName: "School Education",
    description: "Imparting holistic education from Nursery to Class XII. Features Balmandir, bilingual English & Hindi mediums, compulsory residential life from Class VI, Bal Sabha student self-government, and the student-run Kilkari magazine.",
    departments: ["Primary & Balmandir (Nursery to V)", "Middle School (VI to VIII)", "Secondary School (IX & X)", "Senior Secondary (XI & XII - Science, Commerce, Humanities)"]
  }
];

export const coursesData: Course[] = [
  // Undergraduate - Engineering & Computing
  {
    id: "btech-cs",
    name: "B.Tech in Computer Science & Engineering",
    degree: "B.Tech",
    level: "Undergraduate",
    facultyId: "math-computing",
    duration: "4 Years (8 Semesters)",
    eligibility: "60% aggregate in 10+2 with Physics, Chemistry, and Mathematics. Admission via Banasthali University Aptitude Test.",
    highlights: ["AI & Machine Learning specializations", "100% placement assistance with top tech giants", "State-of-the-art supercomputing lab"]
  },
  {
    id: "btech-ai",
    name: "B.Tech in Artificial Intelligence & Data Science",
    degree: "B.Tech",
    level: "Undergraduate",
    facultyId: "math-computing",
    duration: "4 Years (8 Semesters)",
    eligibility: "60% aggregate in 10+2 with Physics, Chemistry, and Mathematics.",
    highlights: ["Curriculum aligned with industry AI standards", "Hands-on robotics and deep learning labs", "Dedicated industry mentorship"]
  },
  {
    id: "btech-biotech",
    name: "B.Tech in Biotechnology",
    degree: "B.Tech",
    level: "Undergraduate",
    facultyId: "engineering",
    duration: "4 Years (8 Semesters)",
    eligibility: "60% aggregate in 10+2 with Physics, Chemistry, and Biology/Mathematics.",
    highlights: ["Advanced genomics and cell culture labs", "Research projects funded by DBT and DST", "Industrial bioprocess training"]
  },
  {
    id: "btech-chem",
    name: "B.Tech in Chemical Engineering",
    degree: "B.Tech",
    level: "Undergraduate",
    facultyId: "engineering",
    duration: "4 Years (8 Semesters)",
    eligibility: "60% aggregate in 10+2 with Physics, Chemistry, and Mathematics.",
    highlights: ["Green chemistry and sustainable process engineering", "Pilot plant simulation facilities", "Excellent core engineering placements"]
  },
  {
    id: "bca",
    name: "Bachelor of Computer Applications (BCA)",
    degree: "BCA",
    level: "Undergraduate",
    facultyId: "math-computing",
    duration: "3 Years (6 Semesters)",
    eligibility: "50% aggregate in 10+2 in any stream (with Mathematics/Statistics preferred).",
    highlights: ["Practical software development training", "Web and mobile app development focus", "Seamless transition to MCA"]
  },
  // Undergraduate - Sciences & Pharmacy
  {
    id: "bpharm",
    name: "Bachelor of Pharmacy (B.Pharm)",
    degree: "B.Pharm",
    level: "Undergraduate",
    facultyId: "life-sciences",
    duration: "4 Years (8 Semesters)",
    eligibility: "60% aggregate in 10+2 with Physics, Chemistry, and Biology/Mathematics. PCI Approved.",
    highlights: ["Approved by Pharmacy Council of India (PCI)", "Modern herbal and synthetic chemistry labs", "Hospital and clinical pharmacy internships"]
  },
  {
    id: "bsc-aviation",
    name: "B.Sc in Aviation Science",
    degree: "B.Sc",
    level: "Undergraduate",
    facultyId: "life-sciences",
    duration: "3 Years (6 Semesters)",
    eligibility: "50% aggregate in 10+2 with Physics and Mathematics.",
    highlights: ["Integrated with Banasthali Vidyapith Gliding & Flying Club (BVGFC)", "Practical flight training on Cessna 172 aircraft", "Path to Commercial Pilot License (CPL) preparation"]
  },
  {
    id: "bsc-biotech",
    name: "B.Sc in Biosciences & Biotechnology",
    degree: "B.Sc",
    level: "Undergraduate",
    facultyId: "life-sciences",
    duration: "3 Years (6 Semesters)",
    eligibility: "50% aggregate in 10+2 with Biology, Physics, and Chemistry.",
    highlights: ["Comprehensive foundation in microbiology and genetics", "Hands-on laboratory research", "Gateway to advanced bio-industries"]
  },
  // Undergraduate - Management & Law
  {
    id: "bba",
    name: "Bachelor of Business Administration (BBA)",
    degree: "BBA",
    level: "Undergraduate",
    facultyId: "management",
    duration: "3 Years (6 Semesters)",
    eligibility: "50% aggregate in 10+2 in any stream.",
    highlights: ["Holistic leadership development under WISDOM philosophy", "Live case studies and industrial visits", "Entrepreneurship incubation support"]
  },
  {
    id: "ballb",
    name: "B.A. LL.B. (Integrated 5-Year Law)",
    degree: "B.A. LL.B.",
    level: "Undergraduate",
    facultyId: "law",
    duration: "5 Years (10 Semesters)",
    eligibility: "45% aggregate in 10+2 in any stream. Approved by Bar Council of India (BCI).",
    highlights: ["Moot court competitions and legal aid clinics", "Focus on constitutional law and women's advocacy", "Internships with high court judges and top law firms"]
  },
  // Undergraduate - Design & Humanities
  {
    id: "bdes-fashion",
    name: "Bachelor of Design (B.Des) in Fashion & Textile Design",
    degree: "B.Des",
    level: "Undergraduate",
    facultyId: "design-arts",
    duration: "4 Years (8 Semesters)",
    eligibility: "50% aggregate in 10+2 in any stream. Aptitude test required.",
    highlights: ["Integration of traditional Sanganeri printing & batik with modern fashion", "Annual runway shows and textile exhibitions", "CAD studio and loom workshops"]
  },
  {
    id: "ba-hons",
    name: "B.A. (Hons.) in Psychology / Economics / Political Science",
    degree: "B.A.",
    level: "Undergraduate",
    facultyId: "humanities-social",
    duration: "3 Years / 4 Years (NEP 2020)",
    eligibility: "50% aggregate in 10+2 in any discipline.",
    highlights: ["Interdisciplinary curriculum aligned with NEP 2020", "Field research and community development projects", "Strong foundation for civil services (UPSC) and public policy"]
  },
  // Postgraduate Programs
  {
    id: "mca",
    name: "Master of Computer Applications (MCA)",
    degree: "MCA",
    level: "Postgraduate",
    facultyId: "math-computing",
    duration: "2 Years (4 Semesters)",
    eligibility: "BCA / B.Sc (CS/IT) or Bachelor's degree with Mathematics at 10+2 level with 50% aggregate.",
    highlights: ["Advanced cloud computing, cybersecurity, and AI modules", "Full-semester industry internship in Semester 4", "Top placement track record"]
  },
  {
    id: "mba",
    name: "Master of Business Administration (MBA)",
    degree: "MBA",
    level: "Postgraduate",
    facultyId: "management",
    duration: "2 Years (4 Semesters)",
    eligibility: "50% aggregate in Bachelor's degree. Admission via Banasthali MBA Entrance Test / CAT / MAT.",
    highlights: ["Specializations in Finance, Marketing, HR, and Business Analytics", "Indian ethos in management (WISDOM model)", "Executive mentorship and corporate networking"]
  },
  {
    id: "mtech-cs",
    name: "M.Tech in Computer Science & Engineering",
    degree: "M.Tech",
    level: "Postgraduate",
    facultyId: "math-computing",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Tech / B.E. in CS/IT or MCA/M.Sc with 55% aggregate. GATE qualified preferred.",
    highlights: ["Research focus on Big Data, IoT, and Neural Networks", "Opportunity to publish in IEEE/Springer journals", "Teaching assistantship opportunities"]
  },
  {
    id: "msc-biotech",
    name: "M.Sc in Biotechnology / Bioinformatics",
    degree: "M.Sc",
    level: "Postgraduate",
    facultyId: "life-sciences",
    duration: "2 Years (4 Semesters)",
    eligibility: "Bachelor's degree in Biological Sciences / Chemistry / Agriculture with 55% aggregate.",
    highlights: ["Supported by Department of Biotechnology (DBT), Govt. of India", "Access to high-performance computing clusters for genomics", "Thesis dissertation with leading national laboratories"]
  },
  // Doctoral (Ph.D.)
  {
    id: "phd-all",
    name: "Doctor of Philosophy (Ph.D.) - All Disciplines",
    degree: "Ph.D.",
    level: "Doctoral",
    facultyId: "math-computing", // Also applies to all faculties
    duration: "3 - 6 Years",
    eligibility: "Master's degree in relevant discipline with at least 55% marks. Admission via Research Entrance Test (RET) and Interview.",
    highlights: ["Available across Engineering, Sciences, Humanities, Management, and Law", "UGC compliant doctoral fellowship stipends", "Dedicated research supervisors and patent filing support"]
  },
  // School of Automation & Industry 4.0
  {
    id: "btech-mechatronics",
    name: "B.Tech in Mechatronics & Industrial Automation",
    degree: "B.Tech",
    level: "Undergraduate",
    facultyId: "automation",
    duration: "4 Years (8 Semesters)",
    eligibility: "60% aggregate in 10+2 with Physics, Chemistry, and Mathematics. Admission via Banasthali Aptitude Test.",
    highlights: ["Hands-on training on KUKA industrial robots & BOSCH mechatronics rigs", "Industry 4.0 curriculum co-designed with Bajaj Group & Siemens", "100% placement assistance in automation & robotics sectors"]
  },
  {
    id: "mtech-automation",
    name: "M.Tech in Robotics & Automation Engineering",
    degree: "M.Tech",
    level: "Postgraduate",
    facultyId: "automation",
    duration: "2 Years (4 Semesters)",
    eligibility: "B.Tech / B.E. in Mechatronics / Mechanical / Electrical / Electronics / CS with 55% aggregate.",
    highlights: ["Advanced research in Computer Integrated Manufacturing (CIM) and PLC/SCADA", "Partnership labs with FESTO, Mitsubishi, SMC, and Janatics", "Industry sponsored projects and internships"]
  },
  // School Education (Nursery to XII)
  {
    id: "senior-secondary",
    name: "Senior Secondary School (Class XI & XII - Science, Commerce, Humanities)",
    degree: "10+2 Certificate",
    level: "Diploma",
    facultyId: "school-education",
    duration: "2 Years",
    eligibility: "Passed Class X examination from a recognized Board with required merit percentage.",
    highlights: ["100% residential sanctuary with 24/7 mentoring and hostel wardens", "Integrated Panchmukhi Shiksha including flying, riding, and classical arts", "Preparation for national university entrance exams"]
  },
  {
    id: "secondary-school",
    name: "Secondary & Middle School (Class VI to X)",
    degree: "School Certificate",
    level: "Diploma",
    facultyId: "school-education",
    duration: "5 Years",
    eligibility: "Passed previous class from a recognized school. Compulsory residential boarding from Class VI onwards.",
    highlights: ["Bilingual instruction in English and Hindi mediums", "Active participation in Bal Sabha student self-government and Kilkari magazine", "Compulsory physical endurance, swimming, and cultural arts"]
  }
];
