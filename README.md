# milestep.io [![CircleCI](https://circleci.com/gh/milestep/milestep.io.svg?style=svg)](https://circleci.com/gh/milestep/milestep.io)
Custom web development  https://milestep.io


# --- for frontend dev ---
npm i -g browser-sync

terminal 1: rails s

terminal 2: browser-sync start --proxy localhost:3000 --files "app/assets/stylesheets/**/*.scss, app/assets/javascripts/**/*.js, app/views/**/*.html.erb"