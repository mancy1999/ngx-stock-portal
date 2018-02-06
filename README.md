# StockPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


From there the Angular CLI has already done a lot of the hard work for you. For instance your repo already includes a .gitignore file, which includes a list of files and folders that shouldn’t be included in the repository, such as node_modules. In fact, the Angular CLI also already initialized a git repo, and even committed the initial set of files. Therefore to get your code up on GitHub you need to register that new repo using the git remote command.

git remote add origin https://github.com/USERNAME/PROJECT_NAME.git
And then push your code up with the git push command.

git push origin master
At this point your code will be up on GitHub, but your hosted app will not be up on GitHub Pages yet. Luckily there are a few npm packages that can help you get there. My favorite is gh-pages, and you can install it using the following command.

npm install -g gh-pages
This command creates a global gh-pages command you can you use to publish your application to GitHub Pages. Before running `gh-pages`, you’ll first need to build a production-ready version of your application. To do that run the following Angular CLI command.

ng build --prod --base-href /PROJECT_NAME/
This command will take a while to complete, as it’s performing all the optimizations needed to get your app ready for production usage. When the command finishes, you’ll have a new dist folder that contains the production-ready version of your app.

To get that version of your app live on GitHub Pages, go ahead and run the following command.

gh-pages -d dist
