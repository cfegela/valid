FROM ubuntu:20.04

# tzdata hack
ENV TZ=Etc/UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# install things
RUN DEBIAN_FRONTEND=noninteractive apt-get update -y &&\
  DEBIAN_FRONTEND=noninteractive apt-get install -y curl \
  telnet \
  nano \
  nodejs \
  npm &&\
  npm install express &&\

# working dir
mkdir /app
WORKDIR /app
COPY . /app/

# setup and run
EXPOSE 8080
CMD ["node", "/app/index.js"]
