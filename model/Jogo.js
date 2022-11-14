const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Jogo = new Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  platform: {
    type: String
  }
},{
    collection: 'jogo'
});

module.exports = mongoose.model('Jogo', Jogo);