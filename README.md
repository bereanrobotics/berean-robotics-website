# Berean Robotics Website

The following document reviews all apsects of how to setup and maintain the <https://bereanrobotics.org> website. Before editing the website you should read through this entire file.

## Getting Started

### Installation Prerequisites

To maintain the website, your computer needs:

- [NodeJS](https://nodejs.org/en/)
- [Ruby](https://rubyinstaller.org/)
- [Github Desktop](https://desktop.github.com/)
- [SublimeText 3](https://www.sublimetext.com/) _(or another fav code editor)_
- Recommended SublimeText packages
	- [Package Control](https://packagecontrol.io/installation)
	- GitGutter
	- SCSS
	- Gulp
	- SideBarEnhancements
	- SublimeLinter
	- SublimeLinter-csshint
	- SublimeLinter-jshint

Once all of those programs are installed, we can setup the website environment.

### CLI Tools for building the website

Install the following tools via Terminal (Mac) or PowerShell (Windows):

- [Jekyll](https://jekyllrb.com/)
- [Gulp](https://gulpjs.com/)
- [Windows Build Tools](https://www.npmjs.com/package/windows-build-tools) _(Windows Only)_
	- You must run PowerShell as Administrator to install this

### Compile the Website

- You will need to pull the latest version of this repo down to your computer. This is easy to do with [Github Desktop](https://desktop.github.com/).
- You will then need to open Terminal (Mac) or PowerShell (Windows) and navigate to the folder that contains this repository.
	- type `cd` then drag the folder into the terminal window from Finder (Mac) or File Explorer (Windows)
- Type the following command to install the node modules: `npm install`. Then hit Enter.
- Type the following command to install the jekyll plugins: `bundle install`. Then hit Enter.
- _If you are using SublimeText_, you can compile the website by using selecting `Tools->Build` from the menu or using the keyboard short.
	- Another optio with SublimeText is to use the Gulp plugin for ST. Simply type in `shift+cmd+P` and type in `gulp` into the command window. Hit Enter. Select `Default` then enter again.
- _If you are NOT using SublimeText_, you will have to use the terminal on your machine to run a build. From the folder inside your terminal run the command: `gulp`
- Once you have compiled the webiste, your web browser should open immediately with a preview of the website. If you leave this browser open, all changes that you make from now on will be automatically reflected inside the brwoser, like magic.


### Updating the Website

All changes to the website code should be done on the `develop` branch. You can commit as many changes as you want to the develop branch and push them back up onto Github.

Once you are ready to publish all of your changes onto the live website, you will need to merge the `develop` branch into the `master` branch. Then push the master branch back to Github.

The website is hosted by [Netlify](https://www.netlify.com/). Netlify is configured to automatically detect changes in the `master` branch of our repository. As soon as you push new changes to the master branch, Netlify will publish those changes online.

#### Updating cards

Cards are the bordered sections of the website. If you are not going to change the website's template, all you need to change are the cards. In the `/_data/` directory, there are a few YAML files. `header.yml` contains all the links that appear in the website header. `home.yml` contains the cards on the home page. Editing these cards are fairly simple:

- card-name: The title of the card
- card-type: The type of the card (either `image-left-text-right` or `text-left-image-right`)
- include-link: True if the card has a link button under the text
- link: Where the link should point to (only used if `include-link` is true)
- link-text: What the link button should say (only used if `include-link` is true)
- card-image-path: The path of the image that goes on the card
- card-text: The paragraph that goes on the card

Editing the team page is equally as simple. Within the `team.yml` file, there is team member data, and bios. The key `questions` contains a list of strings that are questions, these are the questions that appear in bold on the website. The other top-level key, `people` is a list of people. It is quite easy to add or edit team members: 

- name: The name of the member
- image: The path to the picture of the team member
- answers: This is a list of *strings* (so numbers should be surrounded in quotation marks) of answers to the questions, the order should match the order of the questions. 

## Technologies Used

The following is a quick review of all of the technologies used to build this website.

### Languages

- HTML
- Markdown
- CSS
- Sass
- JavaScript
- YAML

### Frameworks/Libraries

- [Foundation for Sites](https://foundation.zurb.com/sites/) by Zurb
- [Animate on Scroll](https://michalsnik.github.io/aos/) by Michalsnik

### Build Tools

- [Jekyll](https://jekyllrb.com/)
- [Gulp](https://gulpjs.com/)
- [Git](https://git-scm.com/)

### Useful Resources

- [Codepen](https://codepen.io/)
- [SassMeister](https://www.sassmeister.com/)
- [Foundation for Sites Docs](https://foundation.zurb.com/sites/docs/)
- [W3Schools](https://www.w3schools.com/)
- Dash for [Mac](https://kapeli.com/dash/) or [iOS](https://kapeli.com/dash_ios/)

## Site Structure Review

The following will review all of the important files and folders inside this project. This setup utilizes the **D.R.Y.** principle: _Don't Repeat Yourself_. You never want to write a piece of code more than once. Once you develop something, it is better to leverage that same peice of code throughout your site. When using the D.R.Y. method, we centalize our code into one location, making it easier to maintain. If you ever want to update a component of the website, you only need to update one place. Then all of the places that import this code will also get updated automatically.

_As a developer, your goal is to be lazy. Only develop something once!_


### Folders and files that you can edit

The following folders will contain files that you should be actively using while designing or maintaining the website.

##### \_includes

This directory contains HTML files that contain reusable bits of code for common elements that can be used across many different pages. This is usefule for things like footer, header, analytics code, social media buttons, etc.

##### \_layouts

This directory contains HTML files for various page layouts used across the website. Layouts allow us to import other layouts and includes within the html. This allows us to reach our goals of being a lazy developer. ;-)

##### \_pages

This directory contains Markdown or HTML files that will turn into the final webpages. These pages should only contain the actual content that is specific to the page itself. All other common content should be imported from a layout that you have created.

##### \_posts

This folder contains blog posts that Jekyll will process. Please review the [Jekyll docs](https://jekyllrb.com/docs/posts/) on creating blog posts.

##### imagess

This folder should contain all images used for the website. All files and folders will be copied into the website as-is. So you can organize images into folders.

##### css

This folder contains CSS and Sass (scss) files that we will be added to the website.

##### js

This folder will contain all of the JavaScript files that will be compiled for the website.

##### \_config.yml

This is the Jekyl cofiguration file. You can add variables and data that can be leveraged across all pages. You must exercise caution when editing this file as some settings are crucial to how the site is compiled.

##### README.md

This is the file that generates the page that you are reading right now.


### Folders and files that you should _probably_ leave alone

The following folders should probably not be modified at all unless you know what you are doing.

##### \_plugins

This folder contains plugins that we are using for Jekyll.

##### \_site

This is the folder that Jekyll will place the compiled webiste. You should never modify any files inside this directory. If you do, all of your changes will get overwritten the next time that Jekyll compiles the website.

##### assets

This folder contains all static css and javascript assets that were compiled for the website. The files that you create inside `_javascript` and `_sass` folders will show up here. Other open source files from `node_modules` that we need for the website will be installed in this location as well.

##### node_modules

This diectory contains source files from open soruce projects that we are using for the website. You should not be modifying any files inside this directory.

You can add new or update items to this diectory via the `npm` command-line tool.

##### vendor

This folder will contain a subset of the files that we need from `node_modules`. This will allow the compiled website much smaller than it would be by simply copying the entire folder contents into the compiled website.

The contents of this folder is managed by `gulpfile.js`. You should not modify the contents of this folder directly.

##### .gitignore

This file contains a list of files and folders that we do not want to version control using git.

##### package.json, package-lock.json, Gemfile, Gemfile.lock

These files are the files the are manged by the `npm` and `gem` command-line tools.

##### .jekyll-metadata, .sass-cache

These are cache used by the build system to make things faster as we build the project. You should leave these alone.

##### gulpfile.js

This file will manage the entire build process for the website. You will use the `gulp` command-line tool to execute the rules defined inside this file.

##### berean.sublime-project

This file will manages the SublimeText enivornment for you automatically. It only shows you the folders that you need and hides everything else from your view. It also adds an integrated build system directly into SublimeText for us so you never have to go to the terminal.
