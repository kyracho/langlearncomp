import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListeningPracticeComponent } from './listening-practice/listening-practice.component';
import { SpeakingPracticeComponent } from './speaking-practice/speaking-practice.component';
import { VocabularyPracticeComponent } from './vocabulary-practice/vocabulary-practice.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'listening-practice', component: ListeningPracticeComponent },
    { path: 'speaking-practice', component: SpeakingPracticeComponent },
    { path: 'vocabulary-practice', component: VocabularyPracticeComponent },
    { path: '**', redirectTo: '' } 
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }