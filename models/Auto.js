const {Schema, model, } = require('mongoose');


 const schema = new Schema({
                    mark:{type: Object, required: true},
                    model:{type: String, required: true},
                    devFrom:{type: String, default:'-'},
                    devTo:{type: String, default: '-'}
                })

module.exports = model('Auto', schema);