import {AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CovidInformation} from '../../../shared/models/covid/covidInformation.model';
import {CovidService} from '../../providers/services/covid-tracker/covid.service';
import {CovidCountries} from '../../../shared/models/covid/covidCountries.model';

@Component({
  selector: 'app-service-query',
  templateUrl: './service-query.component.html',
  styleUrls: ['./service-query.component.css']
})
export class ServiceQueryComponent implements OnInit, AfterViewChecked {

  covidInformation = {} as CovidInformation;

  tabs;
  content;
  activeClass = 'is-active';

  constructor(private covidService: CovidService) {
  }

  ngOnInit(): void {
    this.showCovidInformation();
    this.getCovidLocations();
  }

  ngAfterViewChecked(): void {
    this.tabs = document.querySelectorAll('.panel-tabs a');
    this.content = document.querySelectorAll('#tab-content div');
    this.initTabs();
  }

  showCovidInformation(): void {
    this.covidService.getCovidInformation()
      .subscribe((response: CovidInformation) => this.covidInformation = response);
  }

  getCovidLocations(): CovidCountries[] {
    const items = this.covidInformation?.covidCountries;
    items?.splice(6, 1);
    return items;
  }

  initTabs(): void {
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        const selected = tab.getAttribute('data-tab');
        this.updateActiveTab(tab);
        this.updateActiveContent(selected);
      });
    });
  }

  updateActiveTab(selected): void {
    this.tabs.forEach((tab) => {
      if (tab && tab.classList.contains(this.activeClass)) {
        tab.classList.remove(this.activeClass);
      }
    });
    selected.classList.add(this.activeClass);
  }

  updateActiveContent(selected): void {
    this.content.forEach((item) => {
      if (item && item.classList.contains(this.activeClass)) {
        item.classList.remove(this.activeClass);
      }
      const data = item.getAttribute('data-content');
      if (data === selected) {
        item.classList.add(this.activeClass);
      }
    });
  }

}
