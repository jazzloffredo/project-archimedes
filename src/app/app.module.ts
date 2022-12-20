import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFunctions, getFunctions } from '@angular/fire/functions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFunctions(() => getFunctions())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
