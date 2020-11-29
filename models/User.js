const {Schema, model, Types} = require('mongoose');


 const schema = new Schema({
                email: {type: String,required: true, unique: true,},
                password: {type: String, required: true,},
                workplaceName:{type: String, default: 'Неизвестное СТО'},
                percentLevel: {type: Number, rquired: true, default: 50},
                paymentRange: {type: String ,required:true},
                tasks: {type: Types.ObjectId,ref: 'Task',}
            })

module.exports = model('User', schema);