import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './core/material.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProfileComponent,
        NavigationMenuComponent,
        LandingPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
