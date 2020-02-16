# webpack_sandbox
A place to play around with Javascript project setup.

## What's this?
Webpack seemed like running Javascript projects in God-mode, so I decided to check it out. Turned out it was a pretty deep rabit hole...
Also I was currently using GUI:s for running Git and decided to do only Git Bash for this project in order to get comfortable with that as well.
Basically this is me building from the [Getting started with Webpack](webpack.js.org/guides/getting-started) and onwards through tutorials showing how to implement Express, Eslint, Babel, React etc.
The purpose is not to build a product but to learn advanced Javascript-, Node.js-, Webpack- and git-setups to free myself from the blinders of Create React App.

## How to run

1. Clone the repo
2. Open your terminal and navigate to the project root-directory.
3. Run ```npm install``` to download rependencies.
4. Run ```npm run buildDev && npm start``` triggers webpack which will build the project in the '/dist'-folder and then run the development server with Nodemon.

## What you could get out of this

I read up a bit on Webpack, Babel, Eslint and Git while starting this repo and the the resulting config files can be read to understand a bit more about them. Basically a lot of web developers rely on ```npx create-react-app``` and similiar presets to create their projects but the true power of your stack will only be unlocked when you learn Webpack and implement the plugins of your choice.

### Examples

* Creating powerful production-builds focused on performance.
* Using dev-builds for a faster development experience with hot-reloading and readable code and file structure for your dev-tools
* Bundling a bunch of resources such as images, fonts, code, css and html into 
* Uglifying your code so commercially valuable products are harder to copy.

### Gitattributes

A ```.gitattributes```-file for advanced project-based git-setup hold settings for Git Large File System (LFS) which will save space and data by not versioning specified files, in this case: resource-files such as images, fonts, documents and archives.
The gitattributes also holds settings for making line-endings uniform over different operating systems.

### Webpack configs

The different config files hold the corresponding setups for npm scripts ````buildDev```, ```buildProd``` and ```start```.

##  Recommended reading

I recommend you reference the [Getting started with Webpack](webpack.js.org/guides/getting-started) for getting up and running wirh Webpack.
After understanding the basics of Webpack [Express-Webpack App with Dev and Prod builds](https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334) is really nice.
Finally: Implement React as a standalone module without the black box of create-react-app: [Github: Rexpack](https://github.com/bengrunfeld/rexpack)

#### Contact

I'm Anders Clark, a newbie developer out of Sweden and can be reached at [anders.clark@gmail.com](mailto:anders.clark@gmail.com)

##### Cheers! 