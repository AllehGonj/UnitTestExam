import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ServiceQueryComponent} from './service-query.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {CovidService} from '../../providers/services/covid-tracker/covid.service';
import {DebugElement} from '@angular/core';
import {COVID_TEST_DATA} from '../../../assets/testing/covid_data.json';

describe('ServiceQueryComponent', () => {
  let component: ServiceQueryComponent;
  let fixture: ComponentFixture<ServiceQueryComponent>;
  let debugElement: DebugElement;
  let service: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ServiceQueryComponent],
      providers: [CovidService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceQueryComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    service = debugElement.injector.get(CovidService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call UserService and `Get Covid Information` method', () => {
    const mockData = COVID_TEST_DATA;

    const users = spyOn(service, 'getCovidInformation').and.callFake(_ => {
      return of(mockData);
    });
    component.ngOnInit();
    expect(users).toHaveBeenCalled();
  });
});
