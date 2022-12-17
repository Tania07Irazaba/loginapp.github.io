const express = require('express');
const Schema = require('../models/Schema');
const Router = express.Router();
const userSchema = require('../models/Schema');

Router.get('/',(err, res) => {
    res.render('register',{title :'Namt Fashion',Contrasena:'',CorreoElectronico:''})
})

Router.post('/register',async(req, res)=>{
    try{
        const{
            NombreCompleto,
            CorreoElectronico,
            Usuario,
            Contrasena,
            ConfirmarContrasena
        } = req.body;
        console.log(req.body);
        console.log(NombreCompleto);
        console.log(CorreoElectronico);
        console.log(Usuario);
        console.log(Contrasena);
        console.log(ConfirmarContrasena);
    if(Contraseña === ConfirmarContrasena){
        
        const userData = new Schema({
            NombreCompleto,
            CorreoElectronico,
            Usuario,
            Contrasena
        })
        userData.save(err=>{
            if(err){
                console.log(err);
            }else{
                res.render('register', {title: '',Contrasena:'', CorreoElectronico:''})
            }
        })

    const useremail = await Schema.findOne({CorreoElectronico:CorreoElectronico})
        console.log(useremail.CorreoElectronico);
        if(CorreoElectronico === useremail.CorreoElectronico){
            res.render('register',{title:'', Contrasena:'', CorreoElectronico:'Ya existe ese correo, por favor elija otro'})
        }






    }else{
        res.render('register',{title:'',Contrasena:'Las contraseñas coinciden', CorreoElectronico:''})
    }

    }catch(error){

        res.render('register',{title: 'Error in Code', Contrasena:'', CorreoElectronico:''})
    }
})

module.exports = Router;