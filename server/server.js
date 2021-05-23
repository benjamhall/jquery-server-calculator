
const express = require('express');
const bodyParser = require('body-parser');

//make a server called app
const app = express();
const PORT = 5000;

// WHEN I GO TO localhost:5000...
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }))

//math calculation function

let objectArray = []

//POST IS FOR ADDING NEW DATA 

app.post('/calculation', (req, res) => {
    //add incoming object to numbersArray
    console.log(req.body);

    calculation(req.body)
    objectArray.push(req.body);

    //send back response OK 
    res.sendStatus(200);

});


//GET IS FOR GETTING EXISTING DATA

app.get('/calculation', (req, res) => {
    console.log('got to /calculation');

    //respond
    //whatever is in send becomes response on the client side
    res.send(objectArray.solution);
    //only able to send 1 response
})


// start listening for connections
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});



function calculation(objectArray) {
    if (objectArray.modifier = "+") {
        objectArray.solution = parseFloat(objectArray.numOne + objectArray.numTwo)
    }
    else if (objectArray.modifier = "-"){
        objectArray.solution = parseFloat(objectArray.numOne - objectArray.numTwo)
    }
    else if (objectArray.modifier = "*"){
        objectArray.solution = parseFloat(objectArray.numOne * objectArray.numTwo)
    }
    else if (objectArray.modifier = "/"){
        objectArray.solution = parseFloat(objectArray.numOne / objectArray.numTwo)
    }

}

