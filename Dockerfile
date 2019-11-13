# build environment
FROM node:10.16.0 as build
WORKDIR /app
# RUN chmod a+x /app/node_modules/.bin/react-scripts
ENV PATH=/app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

# production environment
FROM nginx
EXPOSE 80 443
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
CMD [ "nginx", "-g", "daemon off;" ]