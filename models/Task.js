const {Schema, model, Types} = require('mongoose');


 const schema = new Schema({
                tasks:{type: Object, required: true},
                date:{type: Date, default: Date.now},
                owner:{type: Types.ObjectId, ref: 'User'}
            })

module.exports = model('Task', schema);






/*
[
    {
        date:2020,20.05,
        tasks: [1,2,3,4]
    },
    {
        date: 2020,20,10,
        tasks[1]
    }
]
*/