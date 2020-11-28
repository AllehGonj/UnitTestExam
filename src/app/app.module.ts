import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalculatorComponent} from './components/calculator/calculator.component';
import {ServiceQueryComponent} from './components/service-query/service-query.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CovidService} from './providers/services/covid-tracker/covid.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ServiceQueryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CovidService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
