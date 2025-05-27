/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Zhir",
  logo_name: "Zhir.Jamil()",
  nickname: "Zhir",
  full_name: "Zhir Jamil",
  subTitle: "Full Stack Developer, Data analysts, cybersecurity professional 🔥. Always learning.",
  resumeLink:
    "/resume.pdf", 
  mail: "mailto:zheerjameel5@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Zhir-Jamil",
  linkedin: "https://www.linkedin.com/in/zhir-jamil/",
  gmail: "zheerjameel5@gmail.com",
  // gitlab: "#",
  facebook: "https://www.facebook.com/Zheer.jameel1",
};

const skills = {
  data: [
    {
      title: "Data Analystics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in data manipulation and analysis using Python and R",
        "⚡ Skilled in data visualization with ggplot2, Matplotlib, and other libraries",
        "⚡ Experience with machine learning and deep learning tools such as tensorflow, scikit-learn and SciPy",
        "⚡ Familiar with parallel and large-scale data processing using Dask",
        "⚡ Web scraping and automation using Scrapy, BeautifulSoup, and Requests",
        "⚡ Experience working with databases and ORMs using SQLAlchemy"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#306998",
          },
        },

         {
          skillName: "pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },

         {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#4DABC7",
          },
        },

        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#3479F3",
          },
        },

        {
          skillName: "SciPy",
          fontAwesomeClassname: "simple-icons:scipy",
          style: {
            color: "#1A5DBE",
          },
        },

         {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF6F00",
          },
        },

         {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },

         {
          skillName: "Dask",
          fontAwesomeClassname: "simple-icons:dask",
          style: {
            color: "#FC6E6B",
          },
        },

         {
          skillName: "Scrapy",
          fontAwesomeClassname: "simple-icons:scrapy",
          style: {
            color: "#FFFFFF",
          },
        },

        {
          skillName: "SQLAlchemy",
          fontAwesomeClassname: "simple-icons:sqlalchemy",
          style: {
            color: "#A41E22",
          },
        },

        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            color: "#276DC2",
          },
        },

       
      ],
    },
    {
      title: "Cybersecurity",
      fileName: "CyberSecurityImg",
      skills: [
         "⚡ Proficient with cybersecurity and penetration testing tools (e.g., Nmap, Metasploit, Burp Suite, Wireshark)",
         "⚡ Familiar with threat detection, monitoring, and incident response in SOC environments",
         "⚡ Knowledgeable about vulnerability assessment and exploitation techniques",
         "⚡ Experienced with OSINT techniques using tools like theHarvester, Maltego, and Recon-ng",
         "⚡ Strong skills web application security testing (OWASP Top 10, SQLi, XSS, etc.)",
         "⚡ Experience with network scanning, traffic analysis, and packet inspection",
         "⚡ Experienced with post-exploitation techniques and privilege escalation (e.g., using Empire, BloodHound)",
         "⚡ Capable of writing custom scripts and automation for security tasks using Python, Bash, or PowerShell",
         "⚡ Knowledge of red teaming and blue teaming methodologies"
      ],
      softwareSkills: [

        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: {
            color: "#2683C6",
          },
        },

        {
          skillName: "WireShark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            color: "#008CBA",
          },
        },

        {
          skillName: "Metasploit",
          fontAwesomeClassname: "simple-icons:metasploit",
          style: {
            color: "#005FAD",
          },
        },

        {
          skillName: "Burp Suite",
          fontAwesomeClassname: "simple-icons:burpsuite",
          style: {
            color: "#F57921",
          },
        },


       

      ]
    },
    {
      title: "Internet of Things",
      fileName: "IoTImg",
      skills: [
                "⚡ Experience developing embedded systems using Arduino and ESP32",
                "⚡ Proficient in C/C++, MicroPython",
                "⚡ Experience with IoT communication protocols like MQTT, HTTP, and CoAP",
                "⚡ Familiar with real-time operating systems like FreeRTOS and Mbed OS",
                "⚡ Skilled in sensor integration, data acquisition, and signal processing",
                "⚡ Experience with OTA updates and remote device management (e.g., Mender, Balena)",
                "⚡ Strong understanding of IoT security, including encryption, authentication, and secure boot",
                "⚡ Capable of building dashboards and data visualization using Grafana and InfluxDB",
              ],
      softwareSkills: [

        {
          skillName: "Zigbee",
          fontAwesomeClassname: "simple-icons:zigbee",
          style: {
            color: "#D6001D",
          },
        },

        {
          skillName: "Kibana",
          fontAwesomeClassname: "simple-icons:kibana",
          style: {
            color: "#E8478B",
          },
        },

        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },

         {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#044F88",
          },
        },

        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#044F88",
          },
        },

        {
          skillName: "PlatformIO",
          fontAwesomeClassname: "simple-icons:platformio",
          style: {
            color: "#F1632C",
          },
        },

        {
          skillName: "ESP-IDF",
          fontAwesomeClassname: "simple-icons:espressif",
          style: {
            color: "#D6001D",
          },
        },

      ]
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS and next.js",
        "⚡ Developing mobile applications using Flutter",
        "⚡ Creating application backend in Node, Express & Laravel",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#8892BF",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#EF5B25",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-plain:java-wordmark",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#439743",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Netlify",
        //   fontAwesomeClassname: "simple-icons:netlify",
        //   style: {
        //     color: "#38AFBB",
        //   },
        // },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#4C4C4C",
          },
        },
        {
          skillName: "Tekton",
          fontAwesomeClassname: "simple-icons:tekton",
          style: {
            color: "#F44250",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Komar University for Science and Technology Engineering College",
      subtitle: "Bachelor in Computer Engineering",
      logo_path: "KUST.png",
      alt_name: "KUST",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied core subjects like Machine Learning, Computer Vision, Advanced Web Development.",
        "⚡ I have studied core Engineering subjects like Digital systems , Hardware design, Software development, Computer architecture.",
        "⚡ I have gained a strong understanding of engineering principles, including problem-solving, system design, and implementation of embedded systems.",
        "⚡ I have developed skills in teamwork and effective communication within multidisciplinary teams, both orally and in writing.",
        "⚡ I have engaged in critical thinking and logical reasoning to evaluate complex engineering problems and develop innovative solutions.",

      ],
      website_link: "https://komar.edu.iq",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "IoT Course",
      subtitle: "Huawei",
      logo_path: "Huawei.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "Huawei",
      // color_code: "#2AAFED",
      color_code: "#8B1A1A",
    },
   
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Node.js Backend Developer, I have worked with real projects for over two years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        
        {
          title: "Developer Intern",
          company: "Informatics",
          company_url: "https://informatic.company",
          logo_path: "informatics.jpg",
          duration: "Sep 2024 - Oct 2024",
          location: "Sulaymaniyah - No. 50 - Floor 12 - C - Darwaza City 2",
          description: `I engaged in diverse responsibilities that included developing robust systems, providing IT support, and assisting with marketing programs to enhance the brand. 50% of my work was focused on system development, 30% was providing IT support, and 20% was dedicated to assisting with marketing initiatives to boost the brand presence.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#77C4FE",
        },
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my-2.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I’m currently not engaged in blogging activities.",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Elder Guard system",
      url: "#",
      description:
        "This is an ESP32-based IoT system that monitors elderly vital signs, fall detection, and location, sending real-time data to a secure Laravel web dashboard for caregiver monitoring and alerts. ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Laravel",
          iconifyClass: "logos-laravel",
        },
        {
          name: "C",
          iconifyClass: "logos:c",
        },
        {
          name: "PlatformIO",
          iconifyClass: "logos-platformio",
        },
         {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
         {
          name: "LeafletJS",
          iconifyClass: "logos-leaflet",
        },
         {
          name: "ChartJs",
          iconifyClass: "logos-chartjs",
        },
        
      ],
      links: [
        {
          name: "Github",
          url: "#",
          iconifyClass: "ri:github-fill",
        },
        
      ],
    },
    
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
