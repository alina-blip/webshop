import { bootstrapApplication } from '@angular/platform-browser';
import {AppComponent} from 'src/app/app.component';
import {BrowserAnimationsModule, provideAnimations} from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading, withRouterConfig } from '@angular/router';
import {LayoutModule} from "@angular/cdk/layout";
import {APP_ROUTES} from "./app/app.routing";
import {HttpClientModule} from "@angular/common/http";


bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(BrowserAnimationsModule),
      importProvidersFrom(HttpClientModule),

      provideAnimations(),
      provideRouter(APP_ROUTES, withPreloading(PreloadAllModules), withDebugTracing()),

      importProvidersFrom(LayoutModule),
      provideAnimations(),
      importProvidersFrom(LayoutModule),]
})
  .catch(err => console.error(err));
