# webpack_sandbox
A place to play around with Javascript project setup.

## What's this?
Webpack seemed like running Javascript projects in God-mode, so I decided to check it out. 
Also I was currently using GUI:s for running get and decided to do only Git Bash for this project in order to get comfortable with that as well.
Basically this is me building from the [Getting started with Webpack](webpack.js.org/guides/getting-started) and onwards.
The purpose is not to build a product but to learn advanced Javascript-, Node.js-, Webpack- and git-setups to free myself from the blinders of Create React App.

## How to run

1. Clone the repo
2. Open terminal and navigate to the project root-director.
3. Run ```npm install``` to download rependencies.
4. Run ```npm run build``` trigger webpack - the build will then target a '/dist'-folder where you will find the results of the setup.

## What you could get out of this

I read up a bit on Webpack and Git while starting this repo and the the resulting two files can be read to understand a bit more about the two systems:

### Gitattributes
 A ```.gitattributes```-file for advanced project-based git-setup hold settings for Git Large File System (LFS) which will save space and data by not versioning specified files, in this case: resource-files such as images, fonts, documents and archives.

The gitattributes also holds settings for making line-endings uniform over different operating systems.

###  Webpack.config.js
The Webpack config tells Webpack where to start parsing the code, what to do with it and where to send the results. I recommend you reference the [Getting started with Webpack](webpack.js.org/guides/getting-started) for further insights ;)

## Contact

I'm Anders Clark, a newbie developer out of Sweden and can be reached at [anders.clark@gmail.com](mailto:anders.clark@gmail.com)

##### Cheers! 