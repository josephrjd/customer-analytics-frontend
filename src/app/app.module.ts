// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModulesModule } from './modules/modules.module';
import { ServicesModule } from './services/services.module';
// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToasterModule,
    ModulesModule,
    ServicesModule,
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot(),

  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
