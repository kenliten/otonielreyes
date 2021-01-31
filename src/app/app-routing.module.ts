import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { TechComponent } from './tech/tech.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home'} },
  { path: 'tools', component: ToolsComponent, data: { animation: 'Tools'} },
  { path: 'skills', component: SkillsComponent, data: { animation: 'Skills'} },
  { path: 'portfolio', component: PortfolioComponent, data: { animation: 'Portfolio'} },
  { path: 'tech', component: TechComponent, data: { animation: 'Tech'} },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
