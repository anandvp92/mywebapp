const { MongoClient } = require('mongodb');

const state = {
    db: null
}

module.exports.connect = async (done) => {
    try {
        const url = 'mongodb://localhost:27017';
        const database_name = 'Shopping';
        const client = await MongoClient.connect(url, { useUnifiedTopology: true });
        
        state.db = client.db(database_name);
        done();
    } catch (err) {
        done(err);
    }
}

module.exports.get = () => {
    return state.db;
}
