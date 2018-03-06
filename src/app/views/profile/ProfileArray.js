import unLogo from '../../img/logo/un.png';
import gridologyLogo from '../../img/logo/gridology.png';
import valkenLogo from '../../img/logo/valken.png';
import bocLogo from '../../img/logo/boc.png';
import udLogo from '../../img/logo/ud.png';
import jluLogo from '../../img/logo/jlu.png';

export const ProfileArray = [
  {
    header: 'SUMMARY',
    subSections: [
      {
        subHeader: '',
        title: '',
        time: '',
        location: '',
        items: [
          'Technical and highly motivated Web Developer with 3 years of professional experiences in structuring, developing and implementing interactive web applications.',
          'Extensive knowledge and hands on experiences in MEAN and LAMP stack web development, include database design, back end and front end development.'
        ]
      }
    ]
  },
  {
    header: 'SKILLS',
    subSections:  [
      {
        subHeader: '',
        title: '',
        time: '',
        location: '',
        items: [
          'Expert in JavaScript(ES5, ES6, TS ), HTML, CSS.',
          'Proficient in Angular(1.x & 4), Node, Express, Mongoose, MongoDB, Gulp, Webpack, Docker, Less and Sass.',
          'Working experience with Adobe Flex, ActionScript.',
          'Solid knowledge in SQL, familiar with PHP, Java.',
          'Experiences in unit testing and system integration testing.',
          'Worked with the version control system, Git with GitHub, GitLab and BitBucket.',
          'Familiar with software design life cycle and methodologies.'
        ]
      }
    ]
  },
  {
    header: 'WORKING EXPERIENCE',
    subSections:  [
      {
        subHeader: 'United Nations',
        subHeaderImg: unLogo,
        title: 'MEAN Stack Developer',
        time: '09/2017 -  Present',
        location: 'New York, NY',
        items: [
          'Migrated  iSCAD to MEAN Stack web application iSCAD+ which is better suited to produce analytical tools.',
          'Created MongoDB database, and finished part of data migration from Lotus Notes to local MongoDB(Developing env) and MongoDB Atlas(Production env).',
          'Built front end platform which developed by Angular4 to enable internal and external users to gain broader access to nonsensitive public data on the work of the Security Council.',
          'Implement  RESTful APIs in Node & Express and dockerized APIs as independent docker containers, deployed containers to AWS Ubuntu server in micro-services architecture.',
          'Automated parsing and saving Security Council xml PVs(Meeting records) automatically'
        ]
      },
      {
        subHeader: 'Gridology Education Tech',
        subHeaderImg: gridologyLogo,
        title: 'Front End Developer',
        time: '03/2017 - 09/2017',
        location: 'Fort Lee, NJ',
        items: [
          'Established Web Tracking project to support knowledge experts track thousands of web pages.',
          'Designed and developed project with AngularJS and Bootstrap, consuming RESTful APIs in Python Django.',
          'Built Motivation & Instruction Lab official website motivation.gridet.com using WordPress.'
        ]
      },
      {
        subHeader: 'Valken Sports',
        subHeaderImg: valkenLogo,
        title: 'Intern Front-end Developer',
        time: '06/2016 - 12/2016',
        location: 'Swedesboro, NJ',
        items: [
          'Enhanced e-commerce website, www.valken.com.',
          'Designed and developed modules of website with Backbone, Gulp and Sass.',
          'Worked with NetSuite technical support team for technical requirements and issues.'
        ]
      },
      {
        subHeader: 'Bank of Communications',
        subHeaderImg: bocLogo,
        title: 'Software Engineer',
        time: '07/2013 - 05/2014',
        location: 'Shanghai, China',
        items: [
          'Worked on Self-service Equipment Monitoring and Management System project.',
          'Implemented project with Adobe Flex and CSS, worked effectively with UI design team and Java developers.',
          'Wrote user interface design documentations.',
          'Conducted Unit & Integration Testing to consistently deliver high quality features.'
        ]
      }
    ]
  },
  {
    header: 'PROJECTS',
    subSections:  [
      {
        subHeader: 'My Space',
        title: '',
        time: '',
        location: '',
        items: [
          'Built a personal blog which implementes with React, Redux, Flask and mySQL.',
          'Established Profile, Schedule and Note modules, applied user authentication and RBAC into project.',
          'GitHub: https://github.com/pinebrook/cloudFan.git'
        ]
      },
      {
        subHeader: 'MEAN Stack',
        title: '',
        time: '',
        location: '',
        items: [
          'Built a MEAN Stack web application cloudfan.herokuapp.com, implemented the project with AngularJS, Node, Express, Mongoose, MongoDB, Less, Gulp and Bootstrap.',
          'GitHub: https://github.com/pinebrook/cloudFan.git'
        ]
      },
      {
        subHeader: 'Web Application Security',
        title: '',
        time: '',
        location: '',
        items: [
          'Built a SPA with Angular, interact with PHP using ajax, take SQLite as database',
          'Applied web application security features in project, such as SQL Injection Defense, RBAC and Encryption',
          'GitHub: https://github.com/pinebrook/personal_blog.git'
        ]
      },
      {
        subHeader: 'LAMP Stack',
        title: '',
        time: '',
        location: '',
        items: [
          'Built a school social network www.yuewho.net, implemented website with AngularJS, jQuery, PHP and mySQL.',
          'GitHub: https://github.com/aeromomo/faceit_two.git'
        ]
      }
    ]
  },
  {
    header: 'EDUCATION',
    subSections:  [
      {
        subHeader: 'University of Delaware',
        subHeaderImg: udLogo,
        title: 'Master of Science in Electrical & Computer Engineering',
        time: '2015 - 2016',
        location: 'Newark, DE',
        items: [
          'Coursework: Computer Networks II, Database System, Software Testing and Maintenance, Algorithm and Data Structure, Formal Method in Software Engineering, Practice of Linux Operation System, Embedded System Design, Web Application Security, Introduction to Cybersecurity.'
        ]
      },
      {
        subHeader: 'Jilin University ',
        subHeaderImg: jluLogo,
        title: 'Bachelor of Engineering in Telecommunication Engineering',
        time: '2009 - 2013',
        location: 'Changchun, China',
        items: [
          'Coursework: Principles of Communications, Electromagnetic Fields and Waves, Digital Circuits and Logics Design, Principles and Applications of Microcontrollers, Fundamental Communication Networks, Computer Networks, Modern Switching Principles,  Digital Signal Processing.'
        ]
      }
    ]
  },
  {
    header: 'OTHERS',
    subSections:  []
  }
];
