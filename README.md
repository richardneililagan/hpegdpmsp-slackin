MSP Slackin
===========

This is essentially a wrapper app for [Guillermo Rauch](https://github.com/rauchg)'
[Slackin](https://github.com/rauchg/slackin) app, also maintained inside
a Docker container.

## Usage

Ensure that [Docker is installed on your host machine](https://docs.docker.com/installation/).

Modify the `Dockerfile`'s `ENV` declarations to use your own values:

- `SLACK_API_TOKEN` : a token created for use in communicating with the Slack Web API. See https://api.slack.com/web. The user generating the token should be an admin role.

- `SLACK_API_ORGANIZATION` : your Slack team's subdomain.

- `PORT` : what port to listen in on. Make sure that you're mapping the right port numbers on Docker container initialization (see below).

Create an image from this repository's files by running :

```bash
docker build -t <image name>:<tag>
# e.g. docker build -t richardneililagan/mspslackin:0.1.0
```

Ensure that your image was successfully created by running `docker images`.

To run a container using the image you just created:

```bash
docker run -p 3000:3000 -d <image name>:<tag>
# e.g. docker run -p 3000:3000 -d richardneililagan/mspslackin:0.1.0
```

> **Note** : The `Dockerfile` in this repo exposes port 3000 by default, 
> so make sure that you're mapping the right container port to a port you
> want on the host machine.
>
> On the example above, `-p 3000:3000` maps the host port 3000 to the 
> container port 3000, so that you can access the app from the host.
>
> If you prefer to use port 80, for example, use `-p 80:3000` instead.
