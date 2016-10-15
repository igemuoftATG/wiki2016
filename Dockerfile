FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN groupadd -r app && useradd -r -g app app

RUN npm install

# RUN mkdir -p /home/app
# RUN chown -R app:app /home/app
RUN echo '{ "allow_root": true  }' > /root/.bowerrc
COPY bower.json /usr/src/app
RUN ./node_modules/.bin/bower install

USER app

CMD ["tail", "-f", "/dev/null"]
