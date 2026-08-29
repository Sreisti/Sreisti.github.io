/* ============================================================
   SITE CONTENT — edit this file to update the whole website.
   Nothing else needs to change: index.html, experience.html and
   projects.html all just loop over the arrays below.

   Sections:
     SITE           basic info, contact, resume/photo paths
     EDUCATION      one entry per school
     EXPERIENCES    clubs / work / volunteer / research entries
     PROJECTS       portfolio projects (gallery + popup)
     FOOTER_LINKS   links shown in the site footer
   ============================================================ */

/* ---- SITE — SAMPLE, replace with your real info ---- */
const SITE = {
  name: "Sreisti Chowdhury",
  major: "Mechanical Engineering",
  minor: "Themed Entertainment Design",                        
  personalEmail: "Sreisti@gmail.com",
  schoolEmail: "chowdh95@purdue.edu",
  linkedin: "https://www.linkedin.com/in/sreisti-chowdhury",
  photo: "assets/profile.png",       // your headshot
  resume: "assets/resume.pdf",       // drop your resume PDF here
};

/* ---- EDUCATION — SAMPLE, replace me ----
   bullets: short list of highlights (coursework, honors, GPA, etc.) */
const EDUCATION = [
  {
    school: "Purdue University",
    degree: "B.S. Mechanical Engineering",
    location: "West Lafayette, IN",
    start: "Aug 2025",
    end: "May 2029 (expected)",
    bullets: [
      "Relevant coursework: Thermodynamics, Geometric And Annotation Modeling (ME 164), Computer Programming for Engineers (CS 159), Linear Algebra",
      "GPA: 3.18 / 4.00",
    ],
  },
  {
    school: "Horizon High School",
    degree: "High School Diploma",
    location: "Orlando, FL",
    start: "Aug 2021",
    end: "May 2025",
    bullets: ["Top Ten Award", "AICE Diploma", "AP Scholar with Distinction", "AP Capstone Diploma"],
  },
];

/* ---- EXPERIENCES — SAMPLE, replace me ----
   category: "work" | "club" | "volunteer" | "research" | "ambassador"
   context: array combining a place tag ("Purdue" | "High School")
            and a mode tag ("Remote" | "In Person") — used by the
            filter chips on experience.html */
const EXPERIENCES = [
  {
    title: "UUAA Student Academic Advising Ambassador",
    org: "Purdue University",
    category: "work",
    context: ["Purdue", "In Person"],
    start: "Aug 2026",
    end: "Present",
    bullets: [
      "First point of contact for students, faculty, and visitors, connecting them with campus resources",
      "Support daily advising office operations: scheduling, inquiries, and student records",
      "Collaborate with academic advisors to keep the office welcoming and efficient",
    ],
  },
  {
    title: "STEM Instructor Intern",
    org: "Lavner Education",
    category: "work",
    context: ["In Person"],
    start: "Jun 2026",
    end: "Jul 2026",
    bullets: [
      "Taught K-8 students hands-on, project-based STEM: robotics, 3D printing, and coding",
      "Guided students through the full engineering design process: design, prototype, test, and iterate",
      "Adapted lesson plans on the fly and troubleshot hardware/software issues in a fast-paced camp",
    ],
  },
  {
    title: "Vice President of Professional Events",
    org: "Purdue Society of Women Engineers (Indianapolis)",
    category: "club",
    context: ["Purdue", "In Person"],
    start: "Mar 2026",
    end: "Present",
    bullets: [
      "Plan professional development workshops, industry events, and hands-on 3D modeling sessions",
      "Help build and grow the SWE chapter on Purdue's Indianapolis campus",
      "Connect students, faculty, and industry professionals to support SWE's mission",
    ],
  },
  {
    title: "Indy Outreach Team",
    org: "Purdue Women in Engineering Program",
    category: "work",
    context: ["Purdue", "In Person"],
    start: "Feb 2026",
    end: "Present",
    bullets: [
      "Engage K-12 students through educational events, classroom visits, and hands-on activities",
      "Share personal experience as an engineering student to inspire future engineers",
      "Promote STEM access for young women and underrepresented students",
    ],
  },
  {
    title: "Secretary",
    org: "ASME Purdue Indianapolis Student Chapter",
    category: "club",
    context: ["Purdue", "In Person"],
    start: "Oct 2025",
    end: "Present",
    bullets: [
      "Document meeting discussions, decisions, and action items for the chapter",
      "Represent ASME at inter-club and campus events to build relationships with other orgs",
      "Support chapter officers with event coordination and day-to-day operations",
    ],
  },
  {
    title: "Autodesk Design and Make Ambassador",
    org: "Autodesk",
    category: "ambassador",
    context: ["Hybrid"],
    start: "Aug 2025",
    end: "Present",
    bullets: [
      "Support fellow ambassadors on technical projects and advocate for Autodesk on campus",
      "Build CAD and 3D modeling skills through Autodesk-led workshops",
    ],
  },
  {
    title: "Alle IoT: Improving Battery Life in IoT Security Solutions",
    org: "Purdue Vertically Integrated Projects (VIP)",
    category: "research",
    context: ["Purdue", "In Person"],
    start: "Aug 2025",
    end: "May 2026",
    bullets: [
      "Member of a 12-person VIP team developing power-saving solutions for a security lock battery system",
      "Part of the communication & archiving group; liaised with client Allegion and analyzed prior years' data",
      "Co-authored a research poster presenting the team's findings",
    ],
  },
  {
    title: "Environmental Intern",
    org: "NexaYouth",
    category: "volunteer",
    context: ["Remote"],
    start: "Jul 2025",
    end: "Aug 2025",
    bullets: [
      "Selected for a competitive program empowering youth to address environmental challenges",
      "Researched and wrote original articles on environmental justice topics",
      "Collaborated with a national team of youth activists on grassroots initiatives",
    ],
  },
  {
    title: "Astronomy Intern",
    org: "International Blind Astronomy Olympiad",
    category: "volunteer",
    context: ["Remote"],
    start: "Jan 2025",
    end: "May 2025",
    bullets: [
      "Helped make astronomy education accessible to blind students worldwide",
      "Created astronomy lesson plans for students in Africa",
      "Helped build the first version of the IBAO website and application forms",
    ],
  },
  {
    title: "Student Ambassador",
    org: "Kollegio",
    category: "ambassador",
    context: ["Remote"],
    start: "Aug 2024",
    end: "Dec 2024",
    bullets: [
      "Selected for Kollegio's second wave of student ambassadors to advocate for the AI-driven college-help platform",
      "Led outreach to schools and organizations across Florida to expand student access",
      "Wrote and published SEO-optimized blog posts on college admissions topics",
    ],
  },
  {
    title: "Youth Partner",
    org: "In Tandem (Youth Voice Fellowship)",
    category: "work",
    context: ["Remote"],
    start: "Jul 2024",
    end: "Present",
    bullets: [
      "Selected for the '24-'26 Youth Voice Fellowship to co-design programs and products from a youth perspective",
      "Contribute insights through interviews, focus groups, and surveys that shape partner orgs' initiatives",
      "Engage with peers nationwide and industry researchers; awarded a quarterly scholarship",
    ],
  },
  {
    title: "Civic Engagement Intern",
    org: "TurnUp Activism",
    category: "volunteer",
    context: ["Remote"],
    start: "May 2024",
    end: "Sep 2024",
    bullets: [
      "Selected for a program developing interns into civic leaders",
      "Researched and presented social justice issues to peers",
      "Drove youth voter turnout for the Nov. 2024 election via LinkedIn outreach and text banking",
    ],
  },
  {
    title: "Mapping Justice: Florida Scholar",
    org: "trubel&co",
    category: "research",
    context: ["Remote"],
    start: "May 2024",
    end: "Aug 2024",
    bullets: [
      "One of ~20 students selected nationally to study climate justice using GIS mapping",
      "Investigated Florida wastewater runoff with a 3-student team, building a final GIS-based project",
      "Presented findings to a panel of environmental professionals",
    ],
  },
  {
    title: "Volunteer Tutor",
    org: "Schoolhouse.world",
    category: "volunteer",
    context: ["High School", "Remote"],
    start: "Mar 2024",
    end: "May 2025",
    bullets: [
      "Tutored 1-10 students at a time in SAT Math and the Enrichment subject area over Zoom",
      "Volunteered consistently from high school into college",
    ],
  },
  {
    title: "IT Summer Intern",
    org: "OCPS (Orange County Public Schools) via Kelly ETT",
    category: "work",
    context: ["High School", "In Person"],
    start: "Jun 2023",
    end: "Jul 2023",
    bullets: [
      "Performed technology maintenance across two Orange County Public Schools before the school year",
      "Updated student laptops and SmartBoards and took inventory of classroom devices",
    ],
  },
];

/* ---- PROJECTS — pulled from Canva portfolio ----
   images: array of paths — shown as a browsable photo strip in the popup
   longDescription: array of bullet points, shown as a list in the popup
   status: "completed" | "in-progress" — drives the filter tabs and the
           "In Progress" badge on the gallery card and popup
   links: optional — omit a key to hide that button in the popup */
const PROJECTS = [
  {
    title: "Alle IoT: Improving Battery Life in IoT Security Solutions",
    shortDescription: "VIP research project developing power-saving solutions for a security lock battery system.",
    longDescription: [
      "Tasked with developing a solution to increase the battery life of the system. We work with energy systems to calculate the power used in a security lock battery.",
      "I am a part of the communication and archiving group. The communication group maintains contact with our client, Allegion. The archivist group focuses on analysing and deciphering last year's data to contribute to this year's data.",
      "Tasked with researching four key solutions for the research project.",
      "Created a video to explore the research topic.",
      "Created the poster presentation to display a summary and visual analysis of the project.",
    ],
    images: ["assets/projects/alle-iot.png", "assets/projects/alle-iot-2.png", "assets/projects/alle-iot-3.png"],
    tags: ["VIP", "Research", "Data Analysis"],
    status: "completed",
    links: { demo: "https://youtu.be/WcRYrVTyPI4?si=lJ7mezBPTuBtpSd4" },
  },
  {
    title: "Small Projects Spring 2026: Turrets",
    shortDescription: "Team-built turret mechanism for a Purdue-hosted ASME Small Projects Competition, placing 3rd.",
    longDescription: [
      "As a part of a team, I helped assemble the turret mechanism for a Purdue-hosted Small Projects Competition.",
      "Helped brainstorm ideas for how the turret may stay locked and standing in place.",
      "During competitions, I helped advise on where to aim the golf balls and support adjustment efforts. All resulted in our team placing 3rd in the competition.",
    ],
    images: ["assets/projects/asme-turrets.png", "assets/projects/asme-turrets-2.png"],
    tags: ["ASME", "Assembly", "Mechanism Design"],
    status: "completed",
    links: {},
  },
  {
    title: "UN Countries History Explorer",
    shortDescription: "A Python history-fact generator combining programming with a love of history (ENGR 133 final project).",
    longDescription: [
      "Tasked in class to create a final project of our choosing. I created a history fact generator to combine my hobbies of history and programming.",
      "Programmed on VS Code that launches a web browser with user-interactive graphics.",
      "Wrote an entire data sheet recording the UN-recognized 193 countries and their corresponding fun facts.",
    ],
    images: ["assets/projects/history-explorer.png", "assets/projects/history-explorer-2.png", "assets/projects/history-explorer-3.png"],
    tags: ["Python", "Web Dev"],
    status: "completed",
    links: { github: "https://github.com/Sreisti/United-Nation-UN-Country-History-Explorer" },
  },
  {
    title: "WindMill Build Lab",
    shortDescription: "Designed a windmill blade mounted to a DC motor and measured its power output.",
    longDescription: [
      "This project involves designing a windmill blade that mounts onto the shaft of a DC motor with a maximum diameter of 9.5 inches. The maximum voltage produced by the motor will be measured using a multimeter.",
      "I designed the fans on Fusion, and I collected the data using the multimeter.",
    ],
    images: ["assets/projects/windmill-build-lab.jpg", "assets/projects/windmill-build-lab-2.png", "assets/projects/windmill-build-lab-3.png"],
    tags: ["Fusion 360", "CAD", "Data Collection"],
    status: "completed",
    links: { demo: "https://a360.co/4qcVdet" },
  },
  {
    title: "Conspiracy Theory Golf Course",
    shortDescription: "3D-modeled two holes (Flat Earth and the Fake Moon Landing) for a team-built mini golf course.",
    longDescription: [
      "Team project, we were tasked with creating a unique golf course. My team chose to make a course themed after conspiracy theories.",
      "I planned and 3D modeled 2 of the holes to be Flat Earth and Fake Moon Landing inspired.",
    ],
    images: ["assets/projects/conspiracy-golf-course.png", "assets/projects/conspiracy-golf-course-2.png"],
    tags: ["Fusion 360", "CAD", "Themed Design"],
    status: "completed",
    links: { demo: "https://a360.co/4gKyrqD" },
  },
  {
    title: "University of Florida Gator Project",
    shortDescription: "Built an electronic alligator combining sensors, circuits, and 3D-printed parts.",
    longDescription: [
      "Part of a Dual Enrollment Engineering Class final project through the University of Florida.",
      "Built an alligator combining multiple lessons learned in class (sensors, plastics, circuits, etc.) and a tutorial with the University of Florida.",
    ],
    images: ["assets/projects/uf-gator-project.jpg", "assets/projects/uf-gator-project-2.jpg"],
    tags: ["Electronics", "Circuits", "3D Printing"],
    status: "completed",
    links: {},
  },
  {
    title: "Habitat for Humanity Model Project",
    shortDescription: "Modeled a 3-bedroom, 3-bathroom house in Revit following Habitat for Humanity's building constraints.",
    longDescription: [
      "Civil Engineering class tasked to create a 3-bedroom and 3-bathroom house following the constraints of a Habitat for Humanity build.",
      "An individual project.",
    ],
    images: [
      "assets/projects/habitat-for-humanity.png",
      "assets/projects/habitat-for-humanity-2.jpg",
      "assets/projects/habitat-for-humanity-3.png",
      "assets/projects/habitat-for-humanity-4.png",
    ],
    tags: ["Revit", "Architectural Design"],
    status: "completed",
    links: {},
  },
  {
    title: "Micropipette Holder",
    shortDescription: "Designed and modeled a micropipette holder for a Biomedical classroom in Fusion 360.",
    longDescription: [
      "Supported the Biomedical teacher at Horizon High School by creating multiple micropipette holders.",
      "I worked in a team to develop this project, from interviewing and brainstorming to creation.",
      "Created the model through Autodesk Fusion 360.",
    ],
    images: ["assets/projects/micropipette-holder.png", "assets/projects/micropipette-holder-2.jpg"],
    tags: ["Fusion 360", "CAD"],
    status: "completed",
    links: { demo: "https://a360.co/4nqcG1l" },
  },
  {
    title: "Trajectory",
    shortDescription: "Designed, built, and calibrated a catapult for a Science Olympiad projectile competition.",
    longDescription: [
      "Competition where we needed to design, construct, and calibrate a single device capable of launching projectiles onto a target following certain criteria (material, size, etc.).",
      "I created the sketch of the design, built the catapult, and collected data.",
    ],
    images: [
      "assets/projects/trajectory-catapult.jpg",
      "assets/projects/trajectory-catapult-2.jpg",
      "assets/projects/trajectory-catapult-3.jpg",
      "assets/projects/trajectory-catapult-4.jpg",
    ],
    tags: ["Woodworking", "Science Olympiad"],
    status: "completed",
    links: {},
  },
  {
    title: "Flight",
    shortDescription: "Designed and built a free-flight, rubber-powered balsa wood aircraft for maximum time aloft.",
    longDescription: [
      "Competition where the team designed, constructed, and tested free-flight rubber-powered aircraft to achieve maximum time aloft.",
      "I carefully created the plane using balsa wood.",
    ],
    images: [
      "assets/projects/flight-glider.jpg",
      "assets/projects/flight-glider-2.png",
      "assets/projects/flight-glider-3.png",
      "assets/projects/flight-glider-4.png",
    ],
    tags: ["Woodworking", "Science Olympiad"],
    status: "completed",
    links: {},
  },
  {
    title: "Engineering (Rube Goldberg)",
    shortDescription: "Built a Rube Goldberg machine in two hours to knock down a row of dominoes.",
    longDescription: [
      "Teams spend two hours creating a Rube Goldberg project designed to knock down a row of dominoes.",
    ],
    images: ["assets/projects/rube-goldberg.jpg", "assets/projects/rube-goldberg-2.jpg"],
    tags: ["Woodworking", "Mechanism Design"],
    status: "completed",
    links: {},
  },
  {
    title: "Living Literature",
    shortDescription: "Led a team building a themed set representing a scene from Keepers of the Lost City.",
    longDescription: [
      "A competition where a team had to build a set representing a book scene, following the criteria.",
      "I led the team by choosing the book scene (Keepers of the Lost City), planning the set, and creating the props.",
    ],
    images: [
      "assets/projects/living-literature.jpg",
      "assets/projects/living-literature-2.jpg",
      "assets/projects/living-literature-3.jpg",
    ],
    tags: ["Prop Making", "Set Design", "Painting"],
    status: "completed",
    links: {},
  },
  {
    title: "The Impact of Waste and Nutrient Runoff in Florida",
    shortDescription: "Built three ArcGIS maps for the Mapping Justice program studying wastewater's link to environmental justice.",
    longDescription: [
      "In a team of three (from three parts of Florida), we created a project to advocate for environmental justice.",
      "I created three detailed maps using the program ArcGIS.",
      "Map 1: highlights the connection between urban vs. rural areas and poor wastewater quality.",
      "Map 2: explores the intersectional relationship between wastewater facilities and low-income communities.",
      "Map 3: examines toxic metals (nitrogen) in water.",
    ],
    images: ["assets/projects/mapping-justice.png", "assets/projects/mapping-justice-2.png", "assets/projects/mapping-justice-3.png"],
    tags: ["ArcGIS", "Research", "Environmental Justice"],
    status: "completed",
    links: { demo: "https://arcg.is/1PTTL4" },
  },

{
  title: "Sreisti's Cookbook",
  shortDescription: "Personal project where I am creating a project that impacts my life. Fixing the problem of remembering traditional and new recipes and meal prepping food for college.",
  longDescription: [
     "Designed a digital cookbook to preserve family recipes, organize newly discovered recipes, and streamline meal preparation for a busy college schedule, solving the challenge of keeping recipes, grocery planning, and meal prep in one accessible system.",
  "Developed the web interface with Claude Code, creating a clean, searchable recipe management platform with an emphasis on usability, organization, and long-term scalability.",
  "Applied iterative design principles by treating the project as a full product development cycle.",
  "Currently expanding the project into an embedded hardware system by designing a custom 3D-printed enclosure, integrating electronics, and building the cookbook into a portable cyberdeck that combines software, mechanical design, and hardware integration."
  ],
  images: ["assets/projects/sreistis-cookbook.png"],
  tags: ["Web Development", "Claude Code", "3D Printing"],
  status: "in-progress",
  links: {},
},
];

/* ---- FOOTER_LINKS — add as many as you like ---- */
const FOOTER_LINKS = [
  { label: "GitHub", url: "https://github.com/Sreisti" },
  { label: "Instructables", url: "https://www.instructables.com/member/Sreisti" },
  { label: "LinkedIn", url: SITE.linkedin },
  { label: "Portfolio", url: "https://sreisti-chowdhury.my.canva.site/" },
  { label: "Email", url: "mailto:" + SITE.personalEmail },
];
