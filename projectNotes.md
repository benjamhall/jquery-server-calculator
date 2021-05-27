Todo

Planning 
    [x] Make a todo list 
    [x] Plan the data model 
    [x] Plan the API endpoints 

Setup
    [x] npm init, install express etc
    [x] Setup my express server 
        [x] body parser
    [ ] Setup express.static
    [ ] HTML/CSS/JS
    [ ] jQuery installed 

Client side (user interface)

[ ] "Calculator" form
    [ ]  Two inputs which are numbers 
    [ ] Select type of operation
    [ ] "C" button to clear
    [ ] Submit button  
        [ ] Grab values from text inputs 
        [ ] Get operator...somehow
[ ] POST data from form to server

[ ] Display list of previous operations 
    [ ] Update list on new one 
    [ ] AND show result in big ol' letters
[ ] Show history after refreshing the page

Server Side 
[ ] Do the math 
    [ ] Handle Addition, Subtraction multiplication and division 
    [ ] Send back "OK"
    [ ] GET request after the POST to get the actual calculation.

Stuff to do later
    [ ] Make it look nicer
 

-----

Data Model

Operations - (Have an array with an object inside)it
[
    {
        firstNumber: 12
        secondNumber: 4,
        //How do you store operator? 
        operator: "-",
        result: 8     
    }
]


API Endpoints


POST /operations
    Sends and operation to the server

    Request body 
    {
        firstNumber: 12
        secondNumber: 4,
        operator: "-",
    }

    Respond with OK (201)

GET /operations
    Gets a list of operations from the server 

    Response Body
    [
        {
        firstNumber: 12
        secondNumber: 4,
        operator: "-",
        result: 8,
        }
    ]