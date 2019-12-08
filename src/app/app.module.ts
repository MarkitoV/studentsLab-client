import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './laboratory/laboratory.component';
import { CurrentLaboratoryComponent } from './laboratory/current-laboratory/current-laboratory.component';
import { NewTrainingComponent } from './laboratory/new-laboratory/new-laboratory.component';
import { PastTrainingsComponent } from './laboratory/past-laboratories/past-laboratories.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopLaboratoryComponent } from './laboratory/current-laboratory/stop-laboratory.component';
import { AuthService } from './auth/auth.service';
import { LaboratoryService } from './laboratory/laboratory.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentLaboratoryComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopLaboratoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [AuthService, LaboratoryService],
  bootstrap: [AppComponent],
  entryComponents: [StopLaboratoryComponent]
})
export class AppModule { }
