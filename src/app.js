import './style.less';

import { AppModule } from './app/app.module';

const fontAwesome = document.createElement('script');
fontAwesome.src = "https://kit.fontawesome.com/a3a08bbca8.js";
fontAwesome.crossorigin = "anonymous";

const ngView = document.createElement('ng-view');
ngView.className = 'router-view';
const app = document.createElement('div');
app.id = "app";

app.appendChild(document.createElement('app-header'));
app.appendChild(document.createElement('sidebar'));
app.appendChild(ngView);
app.appendChild(document.createElement('app-footer'));

document.body.appendChild(app);
document.body.appendChild(fontAwesome);