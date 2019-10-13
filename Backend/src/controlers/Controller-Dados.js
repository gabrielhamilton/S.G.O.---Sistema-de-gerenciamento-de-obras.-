'use strict'

const mongoose = require('mongoose');
const Dados = mongoose.model('Dados');

exports.getAll = (req, res, next) => {
    Dados.find({})
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};
exports.post = (req, res, next) => {
    var Dados = new Dados(req.body);

    Dados
        .save()
        .then(x => {
            res.status(201).send({
                message: 'cadastrado'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'falha',
                data: e
            });
        });

};

exports.getbyName = (req, res, next) =>{
    Dados.find({
        nome: new RegExp(req.params.nome)
    })
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};


exports.delete = (req, res, next) => {
    Dados.findOneAndRemove(
        req.body.id
    )
        .then(data => {
            res.status(201).send({
                message: 'Dado removido com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover dado',
                data: e
            });
        });
   
};


exports.put = (req, res, next) => {        
    console.log(req.body);
    Dados.update({"_id": req.body._id}, {
            
        
            $set:{
                patrimonio: parseInt(req.body.patrimonio),
                nome: req.body.nome,
                marca: req.body.marca,
                modelo: req.body.modelo,
                quantidade: parseInt(req.body.quantidade),
                desc: req.body.desc     
            }
        },
        { 
            new: true

        }).then(x => {
            res.status(200).send({
                message: 'cadastrado'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'falha',
                data: e
            });
        });
    
};