import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { ListeningPracticeComponent } from './app/listening-practice/listening-practice.component';
import { SpeakingPracticeComponent } from './app/speaking-practice/speaking-practice.component';
import { VocabularyPracticeComponent } from './app/vocabulary-practice/vocabulary-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeningPracticeComponent,
    SpeakingPracticeComponent,
    VocabularyPracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Import AppRoutingModule for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
