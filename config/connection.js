const { MongoClient } = require('mongodb');

const state = {
    db: null
}

module.exports.connect = async (done) => {
        const url = 'mongodb://localhost:27017';
        const database_name = 'Shopping';
        const client = await MongoClient.connect(url).then(client=>{
            state.db = client.db(database_name);
        }).catch(err=>{
            done(err);
        });        
}

module.exports.get = () => {
    return state.db;
}
