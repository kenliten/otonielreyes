export class SidebarController {
    constructor() {
        this.links = [
            {
                title: 'Intro',
                url: '#!/',
                active: false
            },
            {
                title: 'Skills',
                url: '#!/skills',
                active: false
            },
            {
                title: 'Technology Stack',
                url: '#!/tech-stack',
                active: false
            },
            {
                title: 'Portfolio',
                url: '#!/portfolio',
                active: false
            },
            {
                title: 'Contact',
                url: '#!/contact',
                active: false
            }
        ];
    }

    active(link) {
        this.links.forEach(li => li.active = false);

        link.active = true;
    }
}