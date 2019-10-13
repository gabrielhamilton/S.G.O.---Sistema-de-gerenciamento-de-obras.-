module.exports = (Usuario) =>{
    var nodemailer = require('nodemailer');
    var conta = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'belagan@msn.com', 
            pass: 'Isa180697' 
        }
    });
    conta.sendMail({
        from: 'Sistema de Gerenciamento de Obras <belagan@msn.com>',
        to: Usuario.nome+' <'+Usuario.email+'>',
        subject: 'Sistema de Gerenciamento de Obras',
        html: 'Ola <b>'+Usuario.nome+'</b> você acabou de ser inscrito no nosso <b>Sistema de Gerenciamento de Obras </b> <br>Segue abaixo suas credenciais: <br><b>Login:</b> '+Usuario.email+' <br><b>Senha:</b> '+Usuario.senha1+'<br> '
    }, function(err){
        if(err)
            throw err;
    });
};