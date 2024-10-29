export type TPartner = {
  id?: string;
  createdAt: string;
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
  clients: (number | string)[];
  projects: (number | string)[];
};
