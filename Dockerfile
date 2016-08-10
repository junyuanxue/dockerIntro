FROM node:4
ADD package.json /opt/package.json
RUN cd /opt && npm install
ADD index.js /opt/index.js
CMD node /opt/index.js
