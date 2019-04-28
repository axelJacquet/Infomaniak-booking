# InfomaniakBooking

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Subject
Create a library : A web site or application for managing and borrow books.
 * A user can subscribe to the website, see the available books and borrow books.
 * A librarian can add / edit / delete / see all the books. When a book has been borrowed, he will need to know which user has the book.

## Technologies
You can use all technologies, languages and frameworks you want. The only condition is that your application is accessible online or on a mobile device.

## Additional informations for students
You can realize backend only, in that case please provide us a documented API so that we can test your routes easily.

You can realize frontend only, with fake data.

Don't forget that Infomaniak provides free web hosting for students if you need it.

## Assessment
We will :
 * test your application : your application must work, even if it is incomplete
 * read your code : create a pull request on this project
 * read your development thinking : please add a short info.md file to your project, which summarize your development choices. You can write this document in french or english.

### Do you have question ?
Please create an `issue` on this project.
## Lien
Ce site web a été déployé à l'adresse suivante [https://librairie.joffrey-duc.fr/](https://librairie.joffrey-duc.fr/)

## Informations
 Cette application est basé sur le concept single-page application (SPA).
 Pour faciliter vos tests la possibilité de création de compte bibliothécaire est visible pour tous.
 Vous pouvez me contacter votre compte google afin que je puisse vous donnez les droits sur la base données Firebase.

En tant qu'utilisateur, on peut :
* Voir tous les livres
* Emprunter un livre

En tant qu'administrateur, on peut en plus :
* Ajouter un livre
* Supprimer un livre
* Ajouter une couverture de livre
* Voir les utilisateurs inscrits
* Voir les livres empruntés par chaque utilisateur

## Choix de développement :

* Base de données : Firebase
* Front-end Framework : Angular 7.2.13
