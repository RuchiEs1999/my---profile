/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ruchi",
  title: "Hi, I'm Ruchitha Srinivas",
  subTitle: emoji(
    "A dedicated Software Developer with experience in designing and developing web applications, creating intuitive user interfaces, and optimizing system performance. Passionate about crafting scalable solutions and enhancing user experiences through innovative design and efficient problem-solving"
  ),
  resumeLink:
    "./src/containers/greeting/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  
  linkedin: "https://www.linkedin.com/in/ruchithaes/",
  gmail: "ruchitha.anf225@gmail.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Journey in Tech",
  subTitle: "ENTHUSIASTIC FULL STACK DEVELOPER READY TO LEARN, CREATE, AND GROW",
  skills: [
    emoji(
      "⚡ Passionate about building engaging and responsive user interfaces for web and mobile applications, Built and optimized back-end systems, improving application performance and scalability, also integrated APIs and managed databases to ensure efficient data retrieval and management"
    ),
    emoji("⚡ Gained practical experience working with modern technologies like cloud services and agile workflows"),
    emoji(
      "⚡ Excited to explore emerging technologies and bring creative, impactful ideas to life"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Central Missouri",
      logo: require("./assets/images/ucm.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "May 2024",
      desc: "Bridging Advanced Knowledge with Practical Applications",
      descBullets: [
        "Advanced studies in algorithms, database systems, machine learning, and web applications, enhancing technical and analytical skills.",
        "Completed hands-on projects in software development, problem-solving, and web application design, preparing for real-world challenges"
      ]
    },
    {
      schoolName: "Malla Reddy College of Engineering",
      logo: require("./assets/images/mrce.jpg"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "September 2021",
      desc: "Building a Strong Foundation in Technology",
      descBullets: ["Focused on object-oriented programming, data structures, computer networks, and database systems.","Completed foundational projects, enhancing coding skills and understanding of software development principles."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern Software Engineer",
      company: "Adventa Soft Inc",
      companylogo: require("./assets/images/adventa.png"),
      date: "January 2024 – May 2024",
      desc: "Enhancing Skills Through Real-World Applications",
      descBullets: [
        "Designed and implemented SQL Server components, improving database performance and accuracy.",
        "Created web applications with AngularJS and REST APIs, enhancing user interface responsiveness by 25%"
      ]
    },
    {
      role: "Project Intern",
      company: "GoalStreet",
      companylogo: require("./assets/images/goalstreet.png"),
      date: "June 2020 – August 2020",
      descBullets: [ "Contributed  to a capstone project with a  backend in java using Spring Boot and frontend in React.",
        " Optimized SQL database management and integrated RESTful APIs, improving data retrieval efficiency by 20%"
      ]
    },
    {
      role: "Project Intern",
      company: "National Small Industries Corporation",
      companylogo: require("./assets/images/nsic.jpg"),
      date: "June 2019 – August 2019",
      descBullets: ["Designed and developed  spam call detection system as part of an internship, achieving 90% classification accuracy.",
        " Utilized machine learning techniques and advanced Python Libraries for efficient data analysis, reducing false positives by 40%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "My Learning Journey Through Innovative and Pratical Applicaitons",
  projects: [
    {
     // image: require("./assets/images/saayaHealthLogo.webp"), add image on top
      projectName: "Instagram Clone",
      projectDesc: "Built a fully fucntional Instagram Clone utilizing Python, Django, Spring Boot, MongoDB, and Angular. Key features included user registration, photo uploads, and likes, within an optimzed database interaction using Django ORM, reducing query processing time by 30%. Enhanced user interfaces to boost engagement and activity",
      
    },
    {
     
      projectName: "Train Ticket Management System",
      projectDesc: "Developed a Scalable train ticket management system using Python, Django, MongoDB, Angular, and SQL. The project optimized booking and payment processes, reducing customer support response times by 30%. Designed a responsive front-end page using HTML, CSS, JavaScript, significantly enchancing the user experience",
     // footerLink: [
      //  {
        //  name: "Visit Website",
        //  url: "http://nextu.se/"   you can add buttons  /*  <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
         /* Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">  footer.js
            developerFolio
          </a>
        </p> */
        //}
      //]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications completed during my free time to enchance my skills and knowledge!",

  achievementsCards: [
    {
      title: "React Website Development",
      subtitle:
        "Completed Certification from Coursera on JavaScript and React.js",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/PRPWDPXB1FOZ?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
      ]
    },
    {
      title: "Routing and Navigation in Angular",
      subtitle:
        "Completed Certification from Coursera on Angular",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/2841S7R4IVYZ?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
      ]
    },
    {
      title: "VPC Using AWS",
      subtitle: "Completed Certifcation from Coursera on AWS Cloud Computing",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/M81NOUGFO6R1?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
      ]
    },
    {
      title: "AWS S3",
      subtitle: "Completed Certifcation from Coursera on Amazon Web Services S3",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/UDTUE3RRLT0Q?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
      ]
    },
    {
      title: "EC2 Instance Shell from AWS Console",
      subtitle: "Completed Certifcation from Coursera on Apache Web Server",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/K2XCXFMU1CIX?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        }
      ]
    },
    {
      title: "Agile Project Management Certifications",
      subtitle: "Completed Certifcation from Google on Agile Methodologies and Scrum",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/ZRLB7QNH9TSR"
        }
      ]
    },
    {
      title: "Salesforce Admin Certification",
      subtitle:
        "Completed Certification from LearnKartS on Salesforce Adminstration",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/GOPO6SSZT9MF"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 913-202-9865",
  email_address: "ruchitha.anf225@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks, 
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
