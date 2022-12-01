$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/tang.jpg',
            link: 'https://github.com/hwacc-y/Tangerine',
            title: 'Tangerine',
            demo: false,
            technologies: ['Python', 'Excel', 'Discord'],
            description: "A purchase order handling bot that updates members of the Car team on their purchased item status",
            categories: ['featured','data_e']
        },
        {
            image: 'assets/images/mkey.jpg',
            link: 'https://github.com/hwacc-y/MkeyCMkeyClass',
            title: 'Simian Facial Classifer',
            demo: false,
            technologies: ['Deep Learning', 'Julia'],
            description: "A simian visual classifier with an accuracy over 0.95, using a 10 distinct simian classification datasets",
            categories: ['featured', 'data_a']
        },
        {
            image: 'assets/images/graph_stat.jpg',
            link: 'https://github.com/hwacc-y/stat_207_final',
            title: 'Spotify Frequency Analysis',
            demo: false,
            technologies: ['Data Analysis', 'OpenCV'],
            description: "Ongoing",
            categories: ['data_a']
        },
        {
            image: 'assets/images/whitefox65.jpeg',
            link: 'hwacc-y.github.io',
            title: 'Modding the WhiteFox Keyboard',
            demo: false,
            technologies: ['Soldering'],
            description: "Modded the 65% WhiteFox Keyboard to hotswappable, installed LEDs, replaced the switches and lubed the stabilizers.",
            categories: ['diy']
        },
        {
            image: 'assets/images/egg.png',
            link: 'https://github.com/hwacc-y',
            title: 'STORM',
            demo: false,
            technologies: ['OSIER', 'python','Genetic Algorithm'],
            description: "A engery optimization modelling program used for the modelling of routine egg consumption and restocking",
            categories: ['research', 'diy','featured']
        },
        {
            image: 'assets/images/graph_r.jpeg',
            link: 'https://coursera.org/share/17d67aefa8768d43e13e47550add82f1',
            title: 'Business Analytics Visualization using R',
            demo: false,
            technologies: ['R', 'Data Visualization'],
            description: "Visualized store inventory data using R",
            categories: ['data_a','featured']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}