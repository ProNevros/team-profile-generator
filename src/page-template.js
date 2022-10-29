const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-header>${manager.name}</div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
  <div class="card-header>${engineer.name}</div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
                <div class="card" style="width: 18rem;">
  <div class="card-header>${intern.name}</div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `;
    };

    // use the team array to generate pieces of html based on the employee role
}

module.exports = team => { 
    // template literal - html body that calls the generate team function
}