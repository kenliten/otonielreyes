import angular from 'angular';
import { SidebarComponent } from './sidebar.component.js';

import './sidebar.less';

export const SidebarModule = angular
    .module('sidebar', [])
    .component('sidebar', SidebarComponent)
    .name;