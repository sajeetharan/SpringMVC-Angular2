import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {Ng2BootstrapModule} from 'ng2-bootstrap';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [BrowserModule,CommonModule,Ng2BootstrapModule.forRoot(),HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []

})
export class AppModule{}