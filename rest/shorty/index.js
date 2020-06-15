// import express from 'express' // es6 module
const express = require('express') // node.js module
const redis = require('redis')

// cream serverul si setam portul
const server = express()
const port = 3000

//cream clientul de redis
const client = redis.createClient()

// decoteaza toate body-ul requestu-ului in JSON
server.use(express.json())

function shortify(request, response) {
    const longUri = request.body.longUri
    // generam uri-ul scurt
    const shortUriId = Math.random().toString(16).substr(2, 8)
    const shortUri = `http://localhost:${port}/uri/${shortUriId}`

    // salvam legatura intre shorUri si longUri in redis
    client.set(shortUriId, longUri)
    // trimitem raspunsul cu uri-ul scurt
    response.send({shortUri})
}

function longify(request, response) {
    const shortUriId = request.params.shortUriId
    const shortUri = `http://localhost:${port}/uris/${shortUriId}`
    client.get(shortUri, (error, longUri) => response.send({longUri}) )
}

//configuram rutele
server.post('/uris', shortify )
server.get('/uris/:ShortUriId', longify)


// pornim serverul
server.listen(
    port, 
    () => console.log(`Server started on http://localhost:${port}`)
)