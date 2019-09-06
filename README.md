# S.G.O.--Sistema-de-gerenciamento-de-obras.-
Sistema para gerenciamento de obras. 
A – VISÃO GERAL 
Atraso no processo de edificação e disparidade no orçamento são problemas comuns na construção civil, sendo consequências decorrentes de diversas variáveis, algumas delas são projetos incompatíveis, erros no orçamento, perda de materiais, ordem de execução incorreta, retrabalho, entre outros fatores. Uma forma de minimizar esta problemática é o controle e gerenciamento de todos os materiais e processos envolvidos. 
A plataforma de controle e gerenciamento de obras será uma ferramenta utilizada em versão web e mobile. Nela haverá três diferentes níveis de acesso (engenheiro, executor e cliente), e cada categoria terá conteúdos e permissões distintas: 

Acesso engenheiro: 
Cadastro do Engenheiro. ( CRUD )
Adicionar os arquivos em pdf ( 5 arquivos diferente ).
Adicionar lista de materiais.
Planilha de orçamento. 
Cronograma de Atividades.
Acompanhamento da obra. 
Avaliação da obra.

Acesso executor: 
Cadastro do Executor ( CRUD )
Visualizar as planilhas de materiais 
Visualizar as planilhas de orçamentos.
Modificar o status da obra. 
Adicionar materiais utilizados. 
Adicionar o registro fotográfico da obra. 

Cliente: 
Cadastro do Cliente ( CRUD ) 
Poderá visualizar o status da obra. 
Poderá visualizar as planilhas. 
Poderá visualizar os orçamentos.
Poderá fazer observações nas obras.
Poderá visualizar um gráfico do andamento da obra.
Poderá visualizar um cronograma da obra. 


B – REQUISITOS FUNCIONAIS
B1 – Acessos
A plataforma permitirá três níveis de acesso, e cada usuário poderá ter acesso a mais de uma obra, dependendo de cada situação; 
Primeiramente o engenheiro cria uma nova obra, determina quem terá acesso e os níveis de acesso;
B2 - Lançamentos diversos
Projetos: o engenheiro pública os projetos executivos em PDF. Executor e clientes podem apenas visualizar.
Lista de materiais: o engenheiro faz o levantamento dos materiais que serão utilizados e suas quantidades. O executor preenche a quantidade de cada material utilizado, mas não tem acesso à quantidade levantada pelo engenheiro. Para cada etapa é feito um comparativo entre quantidade prevista e quantidade utilizada. O cliente não terá acesso;
Cronograma: O engenheiro fará o cronograma de execução. O cronograma será dividido em atividades, e cada atividade será um botão de checklist em que o executor irá confirmar cada etapa concluída, e de acordo com a data que o executor informar a etapa concluída, será comparado com o cronograma do engenheiro. Comparando o planejado com o executado, de forma gráfica será apresentado ao cliente, além de calcular a diferença e informar quantos dias a obra está atrasada, adiantada ou no prazo. 
Registro fotográfico: Para cada etapa do cronograma citado no item anterior, o engenheiro determinará a quantidade de fotos que o executor deverá tirar. O cliente e o engenheiro terão campo para fazer observações nas fotos, e o executor de respondê-los. As fotos devem ter georreferenciamento para garantir que são da obra em questão.
Orçamento: será dividido em etapas de acordo com o cronograma, o engenheiro fará o orçamento e apenas ele pode editar os gastos programados, mas pode escolher quem terá acesso à estas informações e quem pode informar o quanto foi gasto por etapa, para poder ser comparado com o planejado. 
O gráfico de percentual concluído da obra será formado de acordo com as confirmações dos itens concluídos pelo executor.
 

