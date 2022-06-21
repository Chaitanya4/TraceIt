const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connected!')).catch(err => {
    console.log(err);
    });



// mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true,  useNewUrlParser: true })