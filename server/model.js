/**
 * Created by xianm on 2018-03-02.
 */
const mongoose = require('mongoose'),
      DB_URL = 'mongodb://127.0.0.1:27017/chat'
mongoose.connect(DB_URL)

const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true},
        'avatar':{type: String},
        'desc': {type: String},
        'title': {type: String},
        // if the user is a boss, two more fields
        'company':{type: String},
        'money': {type:String}
    }
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel(name){
        return mongoose.model(name)
    }
}