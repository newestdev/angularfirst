## Instructions

1. Make sure you have these installed
  - [node.js](http://nodejs.org/)
  - [git](http://git-scm.com/)

2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) 

    `git clone https://github.com/coursefiles/angular-essential-training.git`
    
3. CD to the folder

    `cd angular-essential-training`
    
4. Run the following to install the project dependencies:

    `npm install`
    
5. Run the ng serve command to build the code, watch for file changes, and serve up the site locally:

    `ng serve`

6. Navigate to http://localhost:4200. The app will automatically reload if you change any of the source files.

    `http://localhost:4200/`

The repository has a branch for each video starting point. For example, the branch **02-01b** is used as the starting code for the video *02-01 NgModule and the root module*. You can checkout branches using `git checkout -b <branchname>` and not have to re-run `npm install` each time since you will remain in the same root folder.


## Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## FAQ
If you are getting a list of errors on `npm install` that look like `Cannot find name 'Promise'`, check your `package.json` file and see if the following DevDependencies have a caret in front of the version number (the ^ symbol):
```json
"devDependencies": {
  
  "@types/core-js": "0.9.34",
  "@types/node": "6.0.41"
  
}
```
If the caret is there (would look like `"@types/core-js": "^0.9.34"`) then remove it (or copy the contents of the [package.json](https://github.com/coursefiles/angular2-essential-training/blob/master/package.json) file on the origin repository) and run `npm install` again.
