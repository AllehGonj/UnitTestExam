import {Percentages} from './percentages.model';
import {CovidCountries} from './covidCountries.model';

export interface CovidInformation {
  description: string;
  confirmedCases: string;
  deaths: string;
  recovered: string;
  percentages: Percentages;
  covidCountries: CovidCountries[];
}
