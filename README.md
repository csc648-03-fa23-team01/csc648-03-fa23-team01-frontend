# csc648-03-fa23-team01-frontend

# Setting up the enviorment 
If wget command is not found download wget using this link https://sourceforge.net/projects/gnuwin32/files/wget/

Then use this command to install
     $ wget -q -O - --no-check-certificate https://github.com/nvie/gitflow/raw/develop/contrib/gitflow-installer.sh | bash

# Intialize 
     $ cd my/project
     $ git commit -am "Initial commit"
     $ git remote add origin git@github.com:username/Project-Name.git
     $ git push -u origin main

Prepare Repository for Development
Create development branch, push it to the server

     $ git checkout -b develop
     $ git push -u origin develop

Make sure to set the default branch to `develop` on github!
Setup Git Flow
You will be prompted, as seen below, for what branches you'd like to use. You can just hit `enter` for all.

Notes:

To use the defaults you can use the `-d` flag
You can set a default version tag prefix if you prefer. eg: `v`
    $ git flow init [-d]
    Which branch should be used for bringing forth production releases?
    - develop
    - main
    Branch name for production releases: [main]

    Which branch should be used for integration of the "next release"?
    - develop
    Branch name for "next release" development: [develop]

    How to name your supporting branch prefixes?
    Feature branches? [feature/]
    Release branches? [release/]
    Hotfix branches? [hotfix/]
    Support branches? [support/]
    Version tag prefix? []


# To creat React App
If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app.

To uninstall, run this command: npm uninstall -g create-react-app

Run this command to create a React application named my-react-app:
     $ npx create-react-app my-react-app

# Run React App
     $ cd my-react-app
     $ npm start