import { nanoid } from 'nanoid';

// Head Data
export const headData = {
  title: 'Will | IT Student', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// Hero Data
export const heroData = {
  title: 'Hello, my name is',
  name: 'Will',
  subtitle: 'Student, Front-End Web Developer, Streamer',
  cta: 'Know more',
};

// About Data
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a student, front-end web developer, and part-time streamer that's familiar with GatsbyJS. Remember to wear a mask, we're still in a pandemic! 😷",
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

/* Projects Data */
export const projectsData = [
  {
    id: nanoid(),
    img: 'RasenCards.jpg',
    title: 'RasenCards',
    info: '',
    info2: '',
    url: 'https://rasencards.myshopify.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// Contact Data
export const contactData = {
  cta: '',
  btn: '',
  email: 'will.breiler@gmail.com',
};

// Footer Data
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://www.twitter.com/wbreiler',
    },
    {
      id: nanoid(),
      name: 'twitch',
      url: 'https://www.twitch.tv/resistfutil',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/wbreiler',
    },
    {
      id: nanoid(),
      name: 'snapchat',
      url: 'https://www.snapchat.com/add/wbreiler8',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/will_breiler',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
