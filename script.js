const projects = [
    { name: "Blog Statique", description: "Un blog simple créé avec HTML et CSS.", link: "https://github.com/Bilalik369 " },
    { name: "Calculatrice", description: "Cacultrice créé avec Node js.", link: "https://github.com/votre-repo/todo-app" },
    { name: "gestionanaire des taches", description: "gestion des taches cree avec Node Js.", link: "https://github.com/votre-repo/portfolio-dynamique" },

];


function displayProjects(startIndex, endIndex) {
    const projectContainer = $('#projects-list');
    projectContainer.empty();
    for (let i = startIndex; i < endIndex; i++) {
      if (projects[i]) {
        projectContainer.append(`
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${projects[i].name}</h5>
                <p class="card-text">${projects[i].description}</p>
                <a href="${projects[i].link}" class="btn btn-primary" target="_blank">Voir sur GitHub</a>
              </div>
            </div>
          </div>
        `);
      }
    }
  }