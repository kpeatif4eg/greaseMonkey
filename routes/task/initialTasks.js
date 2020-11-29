const tasksList = require('../../tasksForList');
const { v4: uuidv4 } = require('uuid');


module.exports = async (req, res) => {

    try {
        const getTaskField = (obj) => {

            const recursingRound = obj => {
                for (let key in obj) {
                    if (typeof (obj[key]) === 'object') {
                        if (Array.isArray(obj[key])) {
                            if (key === 'tasks') {
                                obj[key].forEach(item => {
                                    item.id = uuidv4()
                                    item.sides && item.sides.forEach(item2 => {
                                        item2.id = uuidv4();
                                        if (item2.side.subSides) {
                                            item2.side.subSides.forEach(item3 => {
                                                item3.id = uuidv4();
                                            })
                                        }
                                    })
                                })
                            }
                        } else {
                            recursingRound(obj[key])
                        }
                    } else {
                        continue
                    }
                }

            };
            recursingRound(obj)
        }
        getTaskField(tasksList)

        res.json({ ...tasksList })


    } catch (e) { console.log('recursing failure', e) }
}