# This is docker image that can be used in development
# It will contain the full app so you can use HMR and tweak the source code trough a shared folder on the host
FROM node:8.11.4-alpine

# Because we are using apline we need to add git to get some of the node modules
RUN apk add --no-cache git

# This step is needed for Flow 
RUN apk --no-cache add ca-certificates wget \
    && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
    && wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.28-r0/glibc-2.28-r0.apk \
    && apk add glibc-2.28-r0.apk

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json /src/app/package.json

RUN yarn

COPY . /src/app

EXPOSE 9000

# Since this is a dev image the app will run with HMR on by default
ENV HOT_MODULES=true

CMD [ "yarn", "start" ]