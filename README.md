## Website Performance Optimization portfolio project

## Part 1

**Optimized portfolio page for page speed insights score of 90 for mobile and 92 for desktop.**

Performed the following optimizations:

  * Integrated a gulp build process to compile source files to production ready distribution assets.
  * Minified all the HTML,CSS,JS files.
  * Compressed all the image assets.
  * Inlined all CSS in index.html
  * Inlined perfmatters.js in index.html

## Part 2

**Optimized pizzas page and achieved over 60 fps to have jank free experience while scrolling.**

Performed the following optimizations:


* Replaced the querySelectorAll with getElementByClassName for better performance.
* Replaced querySelector with getElementById.
* Optimized DOM calculations outside JS loops to improve performance.
* Optimized change in size of pizza.
* Minified all the assets.

### Building and Running this project

* Clone the repository
* Run command `npm install` to install all the required dependencies of the project.
* Run command `npm run compile` to compile the contents of `src` folder to `dist` folder which can then be served by an web server.
* Run command `npm run runserver` to start a local node server that will serve files from dist folder.
* Run commadn `npm run startngrok` to start ngrok service to make your portfolio accessble to publically.

### Deploying to Github Pages

* Clone the repository
* Run command `npm install` to install all the required dependencies of the project.
* Run command `npm run compile` to compile the contents of `src` folder to `dist` folder which can then be served by an web server.
* Run command `npm run deploy` to push the contents of dist to gh-pages branch and serve the portfolio using gh-pages service.


