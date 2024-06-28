# CoffeeScript Build & Deploy

## How to run

### Locally

1. Install node v >=16
2. Clone the repo `git clone git@github.com:aayymann/CoffeeScript-Build-Deploy.git`
3. Navigate to root dir of the repo `cd CoffeeScript-Build-Deploy`
4. Install dependencies `npm install`
5. Transpile coffeescript to JS ES5 in one step `npm run transpile`
6. Run the application `npm run start`
7. Visit '127.0.0.1/8080' in your browser

### In docker

#### Build docker image

1. Repeat steps 2, 3 & 5 manually as this is done by the CI and not inside the docker file
2. Build docker image `docker build -t coffee:latest .`
3. Run docker image `docker run --name coffee --rm --network host coffee:latest`
4. Repeat step 7 from above

#### Pull docker image

1. Pull docker image `docker pull ghcr.io/aayymann/coffee:latest`
2. Repeat steps 3 & 4 from above

### CI

1. Push a commit to master branch to trigger the workflow which will basically do what we did in docker + push image to a GitHub container registry
