import {PatientsInfected} from './patientsInfected.model';
import {ClosedCases} from './closedCases.model';

export interface Percentages {
  description: string;
  patientsInfected: PatientsInfected;
  closedCases: ClosedCases;
}
