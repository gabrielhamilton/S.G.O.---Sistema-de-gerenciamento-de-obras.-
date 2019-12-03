const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification =>{
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('Notificação adicionada', doc));
})

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
       
        const project = doc.data();
        const notification = {
            content: 'Novo Projeto Adicionado',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);

    });

    exports.materialCreated = functions.firestore
    .document('materials/{materialsId}')
    .onCreate(doc => {
       
        const materials = doc.data();
        const notification = {
            content: 'Novo Material Adicionado',
            user: `${materials.authorFirstName} ${materials.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);

    });

    exports.userJoined = functions.auth.user()
        .onCreate(user =>{

            return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc =>{

                const newUser = doc.data();
                const notification = {
                    content:'Fez um Cadastro',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }

                return createNotification(notification);

            })

        })
