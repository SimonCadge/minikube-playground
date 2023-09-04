# # FROM alpine:latest

# # RUN apk update
# # RUN apk add ca-certificates wget openrc
# # RUN update-ca-certificates

# # # RUN rc-service crond start && rc-update add crond

# # COPY call /etc/periodic/15min/
# # RUN chmod +x /etc/periodic/15min/call

# # ENTRYPOINT ["/bin/sh","-c","sleep infinity"]

# FROM alpine:latest

# RUN apk update
# RUN apk add ca-certificates wget
# RUN update-ca-certificates

# COPY crontab /etc/cron.d/jobs

# RUN chmod 0644 /etc/cron.d/jobs

# RUN crontab /etc/cron.d/jobs

# # RUN echo '* * * * * wget -O wget.log --post-data='{"query":"mutation Call { call }"}' --header='Content-Type:application/json' 'http://127.0.0.1:5000/graphql''

# CMD [ "crond", "-f" ]

FROM python:3.11-alpine

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

CMD [ "python", "-m" , "get"]