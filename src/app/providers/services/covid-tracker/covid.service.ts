import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  covidServiceUrl = 'https://api.misdatos.com.co/api/covid';

  constructor(private http: HttpClient) { }

  getCovidInformation(): any {
    return this.http.get(this.covidServiceUrl).pipe(map((res: any) => res.data));
  }
}
