import photo from '../photo.png';

export class AppController {
    constructor() {
        this.name = 'Otoniel Reyes';
        this.title = "Web Developer";

        document.querySelector('.photo').src = photo;
    }
}