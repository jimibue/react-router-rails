# README

## clone a branch
git clone -b <branch> <remote_repo>

## setup-done branch
git clone -b setup-done git@github.com:jimibue/react-router-rails.git

1. Start rails server
- rails s -p 3001 
>if you clone you need to run `bundle`, you also need to create, migrate, seed your database
you might need to rename your database in the database.yml file

2. Start react server
- yarn start
>before you run this you need to cd into the client directory and run 'yarn' to install packages
