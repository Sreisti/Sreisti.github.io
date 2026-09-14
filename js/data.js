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
    title: "Undergraduate Student Researcher",
    org: "Anasori Layered Materials & Structures Lab",
    category: "research",
    context: ["Purdue", "In Person"],
    start: "Aug 2026",
    end: "Present",
    bullets: [
      "Prepare and process samples for high-entropy nitride MAX phase and MXene experiments evaluating material performance for mechanical and manufacturing applications",
      "Developed an AI-assisted workflow that converts Materials Project graphs into Excel datasets for two material properties used in ongoing lab research, cutting manual data extraction from about an hour to five minutes",
      "Maintain experimental documentation and follow standardized laboratory procedures to ensure reproducible results",
    ],
  },
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
   longDescription: STAR-method object { situation, task, action, result },
     shown as four labeled blocks in the popup. Omit "result" only for a
     genuinely still-in-progress project with no outcome yet.
   status: "completed" | "in-progress" — drives the filter tabs and the
           "In Progress" badge on the gallery card and popup
   links: optional — omit a key to hide that button in the popup */
const PROJECTS = [
  {
    title: "XRD to Excel",
    shortDescription: "A Claude Code-built web tool that converts Materials Project graphs into Excel datasets, cutting manual data extraction from about an hour to five minutes.",
    longDescription: {
      situation:
        "The Anasori Lab's MAX phase and MXene research relied on manually extracting material property data from Materials Project graphs, a repetitive process that ate up close to an hour per dataset.",
      task:
        "Build a tool that could pull that same data directly into a usable Excel format, freeing up time for the lab's actual experimental work.",
      action:
        "I built a web-based tool with Claude Code, using Python for the data-processing logic and an HTML interface, that reads Materials Project graphs and converts them into structured Excel datasets for two material properties used in ongoing lab research.",
      result:
        "The tool cut manual data extraction from about an hour to five minutes and is now used as part of the lab's ongoing MAX phase and MXene research.",
    },
    images: ["assets/projects/xrd-to-excel.png"],
    tags: ["Python", "Claude Code", "Web Development", "Data Analysis"],
    status: "completed",
    links: { demo: "https://sreisti.github.io/mp-xrd-to-excel/" },
  },
  {
    title: "Sreisti's Cookbook",
    shortDescription: "A personal digital cookbook and meal-prep system, now expanding into a physical hardware build.",
    longDescription: {
      situation:
        "Between preserving family recipes and keeping up with a busy college schedule, I kept losing track of recipes, grocery lists, and meal prep across scattered notes and apps.",
      task:
        "Build a personal system that consolidates recipe management, grocery planning, and meal prep into one place I'd actually keep using.",
      action:
        "I built the web interface using Claude Code, treating it as a full product development cycle focused on usability, organization, and long-term scalability, and am now expanding it into an embedded hardware system with a custom 3D-printed enclosure and integrated electronics.",
      result:
        "The web platform is live and in regular use for my own meal planning; I'm currently building the hardware cyberdeck as the project's next phase.",
    },
    images: ["assets/projects/sreistis-cookbook.png"],
    tags: ["Web Development", "Claude Code", "3D Printing"],
    status: "in-progress",
    links: {},
  },
  {
    title: "UN Countries History Explorer",
    shortDescription: "A Python history-fact generator combining programming with a love of history (ENGR 133 final project).",
    longDescription: {
      situation:
        "Purdue's ENGR 133 course closed with an open-ended final project: design and build anything that demonstrated the semester's programming skills.",
      task:
        "Rather than a purely academic exercise, I wanted to build something that combined my interest in history with what I'd learned about programming.",
      action:
        "I programmed a Python application in VS Code that launches an interactive browser experience, and built a complete dataset covering all 193 UN-recognized countries, each paired with its own history fact.",
      result:
        "The project earned a strong coursework grade, and when I showed it off to my peers it received positive feedback on both the concept and the execution.",
    },
    images: ["assets/projects/history-explorer.png", "assets/projects/history-explorer-2.png", "assets/projects/history-explorer-3.png"],
    tags: ["Python", "Web Dev"],
    status: "completed",
    links: { github: "https://github.com/Sreisti/United-Nation-UN-Country-History-Explorer" },
  },
  {
    title: "Small Projects Spring 2026: Turrets",
    shortDescription: "Team-built turret mechanism for a Purdue-hosted ASME Small Projects Competition, placing 3rd.",
    longDescription: {
      situation:
        "ASME hosted a Purdue-wide Small Projects Competition challenging student teams to design and operate a turret mechanism under shared competition constraints.",
      task:
        "My role on the team was to help assemble the turret and figure out, with the rest of the team, how to keep it locked and stable while it was in use.",
      action:
        "I helped assemble the turret mechanism, brainstormed solutions for keeping it locked and standing in place, and during the competition itself advised on where to aim and supported the team's real-time adjustments.",
      result: "Our team placed 3rd overall in the competition.",
    },
    images: ["assets/projects/asme-turrets.png", "assets/projects/asme-turrets-2.png"],
    tags: ["ASME", "Assembly", "Mechanism Design"],
    status: "completed",
    links: {},
  },
  {
    title: "Alle IoT: Improving Battery Life in IoT Security Solutions",
    shortDescription: "VIP research project developing power-saving solutions for a security lock battery system.",
    longDescription: {
      situation:
        "Purdue's Vertically Integrated Projects (VIP) program partnered with Allegion because their security lock's battery life was falling short of expectations, lasting only months instead of years in the field.",
      task:
        "As part of a 12-person VIP team, I joined the communication and archiving group, responsible for staying in contact with Allegion and analyzing the previous semester's data to inform this semester's direction toward a longer-lasting, lower-power design.",
      action:
        "I researched four candidate power-saving solutions, reconciled and analyzed the prior year's findings to avoid repeating dead ends, maintained regular contact with our client Allegion to keep our work aligned with their needs, and helped produce a summary video and a poster presenting the team's findings.",
      result:
        "We presented all four proposed solutions to Purdue staff and students alongside our Allegion engineer, earning approval for next year's VIP group to explore them further, and left detailed documentation behind to carry the work into the following school year.",
    },
    images: ["assets/projects/alle-iot.png", "assets/projects/alle-iot-2.png", "assets/projects/alle-iot-3.png"],
    tags: ["VIP", "Research", "Data Analysis"],
    status: "completed",
    links: { demo: "https://youtu.be/WcRYrVTyPI4?si=lJ7mezBPTuBtpSd4" },
  },
  {
    title: "WindMill Build Lab",
    shortDescription: "Designed a windmill blade mounted to a DC motor and measured its power output.",
    longDescription: {
      situation:
        "This design ran alongside two parallel efforts at once: a project for my high school's PLTW Aerospace Engineering classroom, and prep for a Science Olympiad event at the Central Florida regional.",
      task:
        "Design a windmill blade that mounts onto the shaft of a DC motor within a 9.5-inch maximum diameter, then evaluate how much voltage it produces.",
      action:
        "I designed the blade geometry in Fusion 360 and collected voltage output data using a multimeter to evaluate the design's performance.",
      result:
        "The design's output was strong enough to place among the top ten at the Science Olympiad Central Florida regional, while also satisfying the PLTW classroom assignment.",
    },
    images: ["assets/projects/windmill-build-lab.jpg", "assets/projects/windmill-build-lab-2.png", "assets/projects/windmill-build-lab-3.png"],
    tags: ["Fusion 360", "CAD", "Data Collection"],
    status: "completed",
    links: { demo: "https://a360.co/4qcVdet" },
  },
  {
    title: "The Impact of Waste and Nutrient Runoff in Florida",
    shortDescription: "Built three ArcGIS maps for the Mapping Justice program studying wastewater's link to environmental justice.",
    longDescription: {
      situation:
        "trubel&co's Mapping Justice program selected roughly 20 students nationally to study environmental justice using GIS mapping tools.",
      task:
        "As a 3-person team with members from three different parts of Florida, investigate wastewater runoff and its connection to environmental justice across the state.",
      action:
        "I built three detailed maps in ArcGIS: one connecting urban vs. rural areas to poor wastewater quality, one exploring the intersectional relationship between wastewater facilities and low-income communities, and one examining toxic metals (nitrogen) in water near a major wastewater reclamation facility.",
      result:
        "My team and I presented our findings to a panel of environmental professionals at trubel&co to close out the program.",
    },
    images: ["assets/projects/mapping-justice.png", "assets/projects/mapping-justice-2.png", "assets/projects/mapping-justice-3.png"],
    tags: ["ArcGIS", "Research", "Environmental Justice"],
    status: "completed",
    links: { demo: "https://arcg.is/1PTTL4" },
  },
  {
    title: "University of Florida Gator Project",
    shortDescription: "Built an electronic alligator combining sensors, circuits, and 3D-printed parts.",
    longDescription: {
      situation:
        "A Dual Enrollment Engineering course through the University of Florida closed with a final project meant to bring together everything covered that semester.",
      task:
        "Build a project combining the sensors, plastics, and circuits lessons from the course, following a UF-provided tutorial.",
      action:
        "I built an electronic alligator, integrating sensor components, 3D-printed parts, and circuitry according to the University of Florida's tutorial.",
      result:
        "I earned a strong grade for the course and came away with hands-on exposure to multiple engineering disciplines working together in a single build: electrical, mechanical, and chemical.",
    },
    images: ["assets/projects/uf-gator-project.jpg", "assets/projects/uf-gator-project-2.jpg"],
    tags: ["Electronics", "Circuits", "3D Printing"],
    status: "completed",
    links: {},
  },
  {
    title: "Living Literature",
    shortDescription: "Led a team building a themed set representing a scene from Keepers of the Lost City.",
    longDescription: {
      situation:
        "A BETA Club competition tasked teams with building a physical set representing a scene from a book, judged against a set list of criteria.",
      task:
        "As team lead, choose the scene, plan the set, and oversee its construction from concept to finished build.",
      action:
        "I selected the scene from Keepers of the Lost City, planned the set design, and led the team through building and painting the props.",
      result:
        "The team received strong feedback from judges for the creativity and uniqueness of our book choice and set design in the BETA Club Living Literature competition.",
    },
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
    title: "Conspiracy Theory Golf Course",
    shortDescription: "3D-modeled two holes (Flat Earth and the Fake Moon Landing) for a team-built mini golf course.",
    longDescription: {
      situation:
        "In my high school's PLTW Introduction to Engineering course, teams were tasked with designing a unique mini golf course.",
      task:
        "As a team, design a themed mini golf course; we chose to theme ours around conspiracy theories.",
      action:
        "I planned and 3D modeled two of the holes in Fusion 360: a Flat Earth-themed island and a Fake Moon Landing set.",
      result:
        "We presented the finished course concept to our classmates.",
    },
    images: ["assets/projects/conspiracy-golf-course.png", "assets/projects/conspiracy-golf-course-2.png"],
    tags: ["Fusion 360", "CAD", "Themed Design"],
    status: "completed",
    links: { demo: "https://a360.co/4gKyrqD" },
  },
  {
    title: "Flight",
    shortDescription: "Designed and built a free-flight, rubber-powered balsa wood aircraft for maximum time aloft.",
    longDescription: {
      situation:
        "Science Olympiad's Flight event challenged teams to build a free-flight, rubber-powered aircraft optimized purely for time aloft.",
      task:
        "Design and build an aircraft that would stay airborne as long as possible within the event's rules.",
      action:
        "I carefully built the aircraft out of balsa wood, balancing weight and structure to maximize flight performance.",
      result:
        "The aircraft placed among the top ten at Science Olympiad for time aloft, delivering consistent flight times.",
    },
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
    title: "Trajectory",
    shortDescription: "Designed, built, and calibrated a catapult that won 1st place at the Science Olympiad Central Florida regional.",
    longDescription: {
      situation:
        "Science Olympiad's Trajectory event required a single device capable of launching projectiles at a target under set material and size constraints.",
      task:
        "Design, build, and calibrate a catapult that met those constraints and performed accurately for competition.",
      action:
        "I sketched the design, built the catapult, and collected calibration data to dial in its accuracy before competing.",
      result:
        "The catapult won 1st place at the Science Olympiad Central Florida regional competition, with strong accuracy against the target.",
    },
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
    title: "Engineering (Rube Goldberg)",
    shortDescription: "Built a Rube Goldberg machine in two hours to knock down a row of dominoes.",
    longDescription: {
      situation:
        "A BETA Club timed-build challenge gave teams a fixed two-hour window to design and build a working Rube Goldberg machine.",
      task:
        "As a team, build a chain-reaction machine within the two-hour limit that would successfully knock down a row of dominoes.",
      action:
        "I worked with my team within the two-hour window to design and construct the machine from the materials provided.",
      result:
        "The machine worked successfully, completing the chain reaction to knock down the dominoes, in the BETA Club Rube Goldberg contest.",
    },
    images: ["assets/projects/rube-goldberg.jpg", "assets/projects/rube-goldberg-2.jpg"],
    tags: ["Woodworking", "Mechanism Design"],
    status: "completed",
    links: {},
  },
  {
    title: "Habitat for Humanity Model Project",
    shortDescription: "Modeled a 3-bedroom, 3-bathroom house in Revit following Habitat for Humanity's building constraints.",
    longDescription: {
      situation:
        "My high school's PLTW Civil Engineering course required students to design a home that met Habitat for Humanity's real building-code constraints, not just a freeform floor plan.",
      task:
        "Individually design a 3-bedroom, 3-bathroom house in Revit that satisfied every constraint on Habitat for Humanity's specification list, including door and hallway widths, turning radii, and room sizes.",
      action:
        "I modeled the full house in Revit, checking each dimension against Habitat for Humanity's building code requirements as I went.",
      result: "The design was graded as part of the course.",
    },
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
    longDescription: {
      situation:
        "The Biomedical teacher at Horizon High School needed multiple micropipette holders for classroom use and didn't have a ready source for them.",
      task:
        "As part of a small team, design and produce holders that fit the teacher's classroom needs.",
      action:
        "I helped interview the teacher to understand requirements, brainstormed design options with my team, and modeled the final holder in Autodesk Fusion 360.",
      result:
        "The holder became a recurring classroom fixture, reprinted three times a year since, as the Biomedical teacher keeps bringing in more micropipettes for students to use.",
    },
    images: ["assets/projects/micropipette-holder.png", "assets/projects/micropipette-holder-2.jpg"],
    tags: ["Fusion 360", "CAD"],
    status: "completed",
    links: { demo: "https://a360.co/4nqcG1l" },
  },
];

/* ---- FOOTER_LINKS — add as many as you like ---- */
const FOOTER_LINKS = [
  { label: "GitHub", url: "https://github.com/Sreisti" },
  { label: "Instructables", url: "https://www.instructables.com/member/Sreisti" },
  { label: "LinkedIn", url: SITE.linkedin },
  { label: "Email", url: "mailto:" + SITE.personalEmail },
];
