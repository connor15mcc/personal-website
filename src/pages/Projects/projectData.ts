export interface ProjectProp {
  weight?: number;
  title: string;
  imagePath: string;
  link?: string;
  date: string;
  catogory?: string;
  desc: string;
}

const data: ProjectProp[] = [
  {
    weight: 1,
    title: 'Domestic Airplane Travel Analysis',
    imagePath: '/project_thumbnails/flights.png',
    date: '2022-10-9',
    category: 'Coursework',
    desc:
      'Utilized javascript and d3 to analyze common domestic flight-paths and the role ' +
      'of cities as airline hubs.',
  },
  {
    weight: 1,
    title: 'Minimum Spanning Tree Visualization',
    imagePath: '/project_thumbnails/mst.png',
    date: '2022-6-29',
    link: 'https://github.com/connor15mcc/mst-visualization',
    desc:
      "Explored the visualization of minimum spanning trees (Prim's algorithm) " +
      'while learning Typescript, utilizing p5.js.',
  },
  {
    weight: 3,
    title: 'An Analysis of the NYC Taxi Industry',
    imagePath: '/project_thumbnails/taxi-graph.png',
    date: '2022-6-5',
    link: 'taxi-report.pdf',
    category: 'Coursework',
    desc:
      'Conducted a thorough analysis of consumer taxi-ride trends in the NYC metro area ' +
      'in order to create recommendations for drivers to improve their profitability. ' +
      'This report employed data analysis techniques like Monte Carlo simululation, linear ' +
      'regression, and Holt-Winters forecasting.',
  },
  {
    weight: 4,
    title: 'Flask Job Application Tracker',
    imagePath: '/project_thumbnails/apptracker.png',
    date: '2022-1-20',
    link: 'https://github.com/connor15mcc/dashboards',
    desc:
      'Built a Flask web app to track the progress of my various job applications. ' +
      'This app leverages an SQLite database as well as a Docker deployment environment ' +
      'and features a progress tracker, job application dashboard, and login/logout ' +
      'functionality.',
  },
  {
    weight: 3,
    title: '2048 AI',
    imagePath: '/project_thumbnails/twentyfourtyeight.jpg',
    date: '2021-11-28',
    link: 'https://github.com/connor15mcc/ai-2048',
    desc:
      'Created an AI that utilizes the ExpectiMax algorithm along with game heuristics ' +
      'in order to assess the best possible move and play an optimal game, allowing it ' +
      'to beat the game (by achieving the 2048 tile).',
  },
  {
    weight: 1,
    title: 'Historical Voter Information',
    imagePath: '/project_thumbnails/votes.png',
    date: '2021-10-14',
    desc:
      'Scraped historical voter information from the web using Python ' +
      'and organized said information to generate insights to assist ' +
      'with voter canvassing for a local First Selectman candidate.',
  },
  {
    weight: 1,
    title: 'Terminal Coding Competition',
    imagePath: '/project_thumbnails/terminal.jpg',
    date: '2021-9-20',
    link: 'https://terminal.c1games.com/',
    desc:
      'Participated in the terminal coding challenge, sponsored by Citadel ' +
      'and Citadel Securities. Worked with a team of three to create an algorithm ' +
      'that competed to most optimally play the tower defense strategy game.',
  },
  {
    weight: 2,
    title: 'COVID-19 Hospitalization Prediction',
    imagePath: '/project_thumbnails/covid.jpg',
    date: '2021-05-25',
    category: 'Coursework',
    desc:
      'Predicted the number of COVID hospitalizations per ' +
      'country using a variety of machine learning techniques, ' +
      'including neural networks and SVMs. Achieved a sub 140k ' +
      'MSE that ranked our group top ten in the class.',
  },
  {
    weight: 1,
    title: 'Monopoly',
    imagePath: '/project_thumbnails/monopoly.png',
    date: '2021-05-25',
    link: 'https://github.com/connor15mcc/monopoly',
    category: 'Coursework',
    desc:
      'Replicated a four person game of Monopoly in OCaml. ' +
      'This project, 2800 lines of code long, provided true-to-reality ' +
      'Monopoly gameplay.',
  },
];

export default data;
