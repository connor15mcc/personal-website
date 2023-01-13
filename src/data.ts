// TODO: find out how to disable typing for imported yaml file;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import data from './../../resume/data.yaml';

export interface Basics {
  name: string;
  email: string;
  phone: string;
  website: string;
  projects_website: string;
  permanentAddress1: string;
  permanentAddress2: string;
  currentAddress1: string;
  currentAddress2: string;
  tagline: string;
};

export interface Education {
  institution: string;
  college: string;
  degree: string;
  location: string;
  gpa: string;
  deans_list_count: string;
  end_date: string;
  link: string;
  coursework: {
    type: string;
    classes: {
      name: string;
      number: string;
      link: string;
    }[];
  }[];
};

export interface Experience {
  company: string;
  location?: string;
  title?: string;
  start_date?: string;
  end_date: string;
  link?: string;
  highlights?: string[];
  tech_recap?: string;
};

export interface Project {
  weight?: number;
  title: string;
  imagePath: string;
  date: Date;
  link?: string;
  resumeDesc?: string
  desc: string;
}

export interface Resume {
  university: Education;
  professional_experience: Experience[];
  extracurricular_experience: Experience[];
  other_experience: Experience[];
  skills: string[];
  projects: Project[];
  other: string;
}

const Data: {
  basics: Basics;
  university: Education;
  professional_experience: Experience[];
  extracurricular_experience: Experience[];
  other_experience: Experience[];
  skills: string[];
  projects: Project[];
  other: string;
} = data;

export default Data;
