const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
    content: {
        type: String
    },
    author: {
        type: String
    }
});

module.exports = mongoose.model('Quote',QuoteSchema)