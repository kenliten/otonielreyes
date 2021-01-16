import angular from 'angular';
import ngRoute from 'angular-route'
import { AppComponent } from './app.component.js';
import { ComponentsModule } from './components/components.module.js';
import { CommonModule } from './common/common.module.js';
import './app.less';

export const AppModule = angular
  .module('app', [
    ngRoute,
    ComponentsModule,
    CommonModule
  ])
  .component('app', AppComponent)
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<app></app>'
      })
      .when('/skills', {
        template: '<h1>Skills</h1>'
      })
      .when('/tech-stack', {
        template: '<h1>Technology Stack</h1>'
      })
      .when('/portfolio', {
        template: '<h1>Portfolio</h1>'
      })
      .when('/contact', {
        template: '<h1>Contact</h1>'
      })
      .otherwise('/');
  })
  .name;