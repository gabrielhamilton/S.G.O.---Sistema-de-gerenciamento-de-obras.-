#base image
FROM node

# set working directory 

RUN mkdir /home/gabriel_apolinario/Documentos/S.G.O.---Sistema-de-gerenciamento-de-obras.-/gerenciadordeprojetos/src/app

COPY . /home/gabriel_apolinario/Documentos/S.G.O.---Sistema-de-gerenciamento-de-obras.-/gerenciadordeprojetos/src/app

WORKDIR /home/gabriel_apolinario/Documentos/S.G.O.---Sistema-de-gerenciamento-de-obras.-/gerenciadordeprojetos/src/app

ENV PATH /home/gabriel_apolinario/Documentos/S.G.O.---Sistema-de-gerenciamento-de-obras.-/gerenciadordeprojetos/src/app/node_modules/.bin:$PATH

RUN yarn

CMD ["npm","start"]
