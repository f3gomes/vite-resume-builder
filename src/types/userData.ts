export interface IUserData {
  _id: string;
  name: string;
  title: string;
  address: string;
  city: string;
  email: string;
  phone: string;
  about: string;
  socials: ISocial[];
  paidOut: boolean;
  education: IEducation[];
  skills: ISkill[];
  experiences: IExperience[];
  references: IReference[];
  languages: ILanguage[];
  hobbys: IHobby[];
}

export interface IExperience {
  _id: string;
  title: string;
  yearCompany: string;
  description: string;
}

export interface IEducation {
  _id: string;
  title: string;
  studies: string;
  year: string;
}

export interface IHobby {
  _id: string;
  name: string;
  icon: string;
}

export interface ILanguage {
  _id: string;
  name: string;
  level: string;
}

export interface IReference {
  _id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export interface ISkill {
  _id: string;
  name: string;
}

export interface ISocial {
  _id: string;
  name: string;
  link: string;
  icon: string;
}
