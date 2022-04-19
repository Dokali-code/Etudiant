const express = require ('express');
const app = express();
const path = require ('path');
const api=require('./routes');
app.use('/api',api);
app.use(express.static(path.join(__dirname,'exemple')))
app.listen(4000,() => {
    console.log('Server Listening on port 4000...')
}
)