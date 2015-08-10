FROM octohost/nodejs
MAINTAINER Richard Neil Ilagan <me@richardneililagan.com>

ADD *.js /srv/app/
ADD *.json /srv/app/

WORKDIR /srv/app/

RUN npm install --unsafe-perm

ENV SLACK_API_TOKEN my-api-token
ENV SLACK_API_ORGANIZATION my-slack-subdomain
ENV PORT 3000

EXPOSE 3000

CMD ["node", "index.js", "--production"]
