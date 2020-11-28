import {getTestBed, TestBed} from '@angular/core/testing';

import {CovidService} from './covid.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {COVID_TEST_DATA} from '../../../../assets/testing/covid_data.json';

describe('CovidServiceService', () => {
  let service: CovidService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CovidService]
    });
    service = TestBed.inject(CovidService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get covid data', () => {
    const mockData = COVID_TEST_DATA;

    service.getCovidInformation().subscribe(response => {
      expect(Object.keys(response).length).toBe(6);
      expect(Object.keys(response?.covidCountries).length).toBe(228);
      expect(response).toEqual(mockData);
    });

    const mockReq = httpMock.expectOne(service.covidServiceUrl);

    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.method).toBe('GET');
    expect(mockReq.request.responseType).toEqual('json');

    mockReq.flush(mockData);
  });
});
