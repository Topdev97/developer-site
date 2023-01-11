export interface Project {
    id:             number;
    shortDescription: string;
    title:          string;
    description:    string;
    techs:          string[];
    labels:         string[];
    repositoryLink: string;
    webAppLink:     string;
    images:         string[];
    slug: string;
}
