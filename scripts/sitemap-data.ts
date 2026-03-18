import { countryData } from "../src/data/countryData";
import { mbbsCountries } from "../src/data/mbbsData";
import { coursesData } from "../src/data/coursesData";
import { servicesData } from "../src/data/servicesData";

export const studyAbroadCountries = Object.values(countryData).map((country) => country.slug);
export const mbbsCountrySlugs = mbbsCountries.map((country) => country.slug);
export const mbbsUniversitySlugs = mbbsCountries.flatMap((country) =>
  country.universities.map((university) => ({
    country: country.slug,
    university: university.slug,
  })),
);
export const courseSlugs = Object.values(coursesData).map((course) => course.slug);
export const serviceSlugs = Object.values(servicesData).map((service) => service.slug);
