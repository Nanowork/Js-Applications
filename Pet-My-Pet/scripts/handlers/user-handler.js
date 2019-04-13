window.handlers = window.handlers || {};

handlers.getLogin = function (ctx) {
    loadPartials(ctx)
        .then(function () {
            this.partial('/views/user/login.hbs');
        })
}

handlers.postLogin = function(ctx){
    let {usernmae,password} = ctx.params;

    userService.login(username, password)
    .then(res => {
        userService.saveSession(res);
        notifications.showSuccess('Logged in successfuly');
        ctx.redirect('#/home');
    }).catch(err => notifications.showResponseError(err));
}

handlers.logout = function (ctx){
    userService.logout()
    .then(() =>{
        sessionStorage.clear();
        notifications.showSuccess('Logged out successfully');
        
        ctx.redirect('#/home');
    })
}

handlers.getRegister = function (ctx) {
    loadPartials(ctx)
        .then(function () {
            this.partial('/views/user/register.hbs');
        }).catch(function(err){
            console.log(err);
        })
}

handlers.postRegister = function (ctx) {
    let { username, password } = ctx.params;

    userService.register(username, password)
        .then(res => {
            userService.saveSession(res);
            notifications.showSuccess('Registered successfuly!');
            ctx.redirect('#/home')
        }).catch(err => notifications.showResponseError(err));
}