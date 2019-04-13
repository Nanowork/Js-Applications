window.handlers = window.handlers || {};

handlers.getAllPets = function (ctx){
    loadPartials(ctx)
    .then(function () {
        this.partial('/views/pets/index.hbs');
    });
};