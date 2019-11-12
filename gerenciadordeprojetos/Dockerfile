#base image
FROM node

# set working directory 

RUN mkdir /gerenciadordeprojetos/src/app

COPY . /gerenciadordeprojetos/src/app

WORKDIR /gerenciadordeprojetos/src/app

ENV PATH /gerenciadordeprojetos/src/app/node_modules/.bin:$PATH

RUN yarn

CMD ["npm","start"]
