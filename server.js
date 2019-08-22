const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors')
const schema = require('./schema');
const path = require('path')

const app = express();


//ALLOW CROSS-ORIGIN
app.use(cors())


//SINGLE GRAPHQL ENDPOINT
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

//set static folder
app.use(express.static('public'));
//Re-direct to react html page when !/graphql
app.get('*',(req, res)=> {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})



const port = process.env.port || 5000;
app.listen(port, () => console.log(`server running on port ${port}`))

