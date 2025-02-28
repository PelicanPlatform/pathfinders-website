import pelicanArticles from "./articles/pelican.json";
import envistorArticles from "./articles/envistor.json";
import ncarArticles from "./articles/ncar.json";
import sonarAIArticles from "./articles/sonar_ai.json";
import pismArticles from "./articles/pism.json";

export type ArticleInfo = {
  title: string;
  link: string;
  author: string;
  date: string;
};
export type Name = "pelican" | "ncar" | "pism" | "envistor" | "sonar_ai";

export function getArticles(name: Name): ArticleInfo[] {
  switch (name) {
    case "pelican":
      return pelicanArticles.articles;
    case "ncar":
      return ncarArticles.articles;
    case "pism":
      return pismArticles.articles;
    case "envistor":
      return envistorArticles.articles;
    case "sonar_ai":
      return sonarAIArticles.articles;
    default:
      throw new Error("Invalid name for articles");
  }
}
