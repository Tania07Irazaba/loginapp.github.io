const mongoose = require('mongoose');

const schema = mongoose.Schema
const userSchema = new schema({
    CorreoElectronico:{
        type:String,
        required:true
    },
    Contraseña:{
        type:String,
        unique:true,
        required:true
    },
})

module.exports = mongoose.model('Registeruser',userSchema )