console.log('hello world!');

$(handleReady);

function handleReady() {
    console.log('jquery loaded!');

    //click listeners 
    $('#equals').on('click', sendData);

    //getCalculation();
}

function sendData(){
    //gather input values
    let object = {
        numOne: $('#firstInput').val(),
        numTwo: $('#secondInput').val(),
        operator: $('.operator').val(),
    }

    console.log(object);
    
    //add to array
    //push it into addNumber array on the server
    //MAKE POST REQUEST with object

    $.ajax({  //next is server line 41
        url: '/object',
        method: 'POST',
        data: object //becomes req.body on the server
    })
    .then(function(response){
        console.log(response)

    .catch(function (error){
        console.log('error');
        alert('something went wrong, with POST');
    })
    //get new post
    //getCalculation(); 
}


// function getCalculation() { // next is server
//     // go to server route /calculations
//     $.ajax({
//         method: 'GET', //making a GET request
//         url: '/calculation'
//     }).then(response => {
//         //response is what was in the res.send()
//         console.log(response);

//         //empty DOM
//         $('#equations').empty();

//         //append equation to DOM
//         for (let math of response) {
//             $('#equations').append(`
//             <li>${math.text} = ${math.author}</li>
//             `)
//         }
//     })

// }