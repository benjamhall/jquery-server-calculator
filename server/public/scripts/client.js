console.log('hello world!');

$(handleReady);

function handleReady() {
    console.log('jquery loaded!');

    //click listeners 
    $('#plus').on('click', addition)
    $('#minus').on('click', subtraction)
    $('#multiply').on('click', multiplication)
    $('#divide').on('click', division)
    $('#equals').on('click', sendData);
    $('#clear').on('click', clearData)

    //getCalculation();
}

let operator = ""


function sendData(){
    //gather input values
    let object = {
        numOne: $('#firstInput').val(),
        modifier: operator,
        numTwo: $('#secondInput').val(),
    }
    console.log(object);
    
    //push it into object array on the server
    //MAKE POST REQUEST with object
    $.ajax({  //next is server line 41
        url: '/object',
        method: 'POST',
        data: object //becomes req.body on the server
    })
    .then(function(response){
        console.log(response)

    }).catch(function (error){
        console.log('error');
        alert('something went wrong, with POST');
    })
    //get new post
    getCalculation(); 
}

function getCalculation() { 
    // go to server route /calculation
    $.ajax({
        method: 'GET', //making a GET request
        url: '/calculation'
    }).then(response => {
        //response is what was in the res.send()
        console.log(response);

        //empty DOM
        $('#equations').empty();

        //append equation to DOM
        for (let math of response) {
            $('#equations').append(`
            <li>${math.numOne} ${math.operator} ${math.numTwo} = ${math.solution}</li>
            `)
        }
    })

}

function clearData() {
    //clear input
    $('#firstInput').val('')
    $('#secondInput').val('')
    let operator = ''
}


function addition() {
    operator = "+";
}

function subtraction() {
    operator = "-";
}

function multiplication() {
    operator = "*";
}

function division() {
    operator = "/";
}