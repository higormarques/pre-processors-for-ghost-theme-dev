# pre-pocessors-for-ghost-theme-dev
A Gruntfile and package.json file with pre-processors for Ghost themes developers. Pre-processors contained: Sass, cmq, postcss, cssmin, imagemin.

##How to install
Paste the gruntfile and packge.json files into theme folder:

    MyTheme
      ├── /assets
      |   └── /css
      |       └── output.css
      |   ├── /fonts
      |   ├── /images
      |   └── /js
      ├── Gruntfile.js
      ├── package.json
      ├── default.hbs
      ├── index.hbs [required]
      └── post.hbs [required]

Now create the folder MyTheme/assets/scss with a input.scss and MyTheme/assets/images-min:

    MyTheme
        ├── /assets
        |   └── /css
        |       └── output.css
        |   ├── /fonts
        |   ├── /images
        |   ├── /images-min [all optimized images]
        |   ├── /js
        |   └──/scss [all scss files here]
        |      └── input.scss
        ├── Gruntfile.js
        ├── package.json
        ├── default.hbs
        ├── index.hbs [required]
        └── post.hbs [required]
  
After this you must install modules:

    npm install

##How to run
1 - Open two tabs on terminal

2 - In first tab go to theme folder and execute

    grunt
    
3 - In second tab go to ghost folder and execute

    npm start
    
#GREAT



