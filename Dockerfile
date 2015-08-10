FROM octohost/nodejs
MAINTAINER Richard Neil Ilagan <me@richardneililagan.com>

ADD *.js /srv/app/
ADD *.json /srv/app/

WORKDIR /srv/app/

RUN npm install --unsafe-perm

ENV PORT 3000

EXPOSE 3000

CMD ["node", "index.js", "--production"]
