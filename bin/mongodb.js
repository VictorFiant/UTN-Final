var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local', {useNewUrlparser: true }, function (error) {
    if  (error) {
        throw error;
    } else {
        console.log("Conectado a MogoDB");
    }
});
module.exports = mongoose;
