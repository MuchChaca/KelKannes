# Heroku notes

## Login to heroku
```bash
# requires credentials
heroku login
```

## Push from a different branch 
```bash
# git push remote localBranch:remoteBranch
# may require a force (--force or -f)
git push heroku yourbranch:master
```

## Run locally
Runs the app.
```bash
heroku local up
```

## Build locally
Creates database if doesn't exists & force update on database's schema.
```bash
heroku local build
```

## Build & run locally
Creates database if doesn't exists & force update on database's schema.
Then runs the app.
```bash
heroku local up-build
```

## Scaling

Command | Description
--------|------------
``heroku ps`` | Check scaling status.
``heroku ps:scale web=1`` | This will scale the app ``web`` with 1 dyno allocated to it (can sleep).
``heroku ps:scale web=0`` | By removing all dynos allocated to an pp, it will be deactivated.


