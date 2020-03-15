# README

## clone a branch
git clone -b <branch> <remote_repo>

## react-components-setup  branch
```
git clone -b react-components-setup git@github.com:jimibue/react-router-rails.git
cd react-router-rails
git checkout -b master  (note you don't have master since you cloned a branch)
git branch -d react-components-setup 
git remote rm origin
```

1. Start rails server
```
rails db:drop db:create db:migrate db:seed
rails s -p 3001 
```
>if you clone you need to run `bundle`, you also need to drop, create, migrate, seed your database


2. Start react server
```
cd client
yarn
yarn start
```
>before you run this you need to cd into the client directory and run 'yarn' to install packages
