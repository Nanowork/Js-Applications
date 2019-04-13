$(() => {

    const app = Sammy('#root', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', handlers.getHome);

        this.get('#/login', handlers.getLogin);
        this.post('#/login', handlers.postLogin);
        this.get('#/register', handlers.getRegister);
        this.post('#/register', handlers.postRegister);
        this.get('#/logout', handlers,logout);
        this.get('#/dashboard', handlers.getAllPets);

    });

    app.run('#/home');
});