const { default: mongoose } = require("mongoose");

const modelSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
});

const User = mongoose.model('User', modelSchema);

module.exports = User