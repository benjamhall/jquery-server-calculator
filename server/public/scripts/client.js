console.log('hello world!');

$(handleReady);

function handleReady() {
    console.log('jquery loaded!');

    getCalculation();
}

function getCalculation() { // next is server
    // go to server route /calculations
    $.ajax({
        method: 'GET', //making a GET request
        url: '/calculation'
    }).then(response => {
        //response is what was in the res.send()
        console.log(response);

        //empty DOM
        $('#equations').empty();

        //append equation to DOM
        // for (let math of response) {
        //     $('#equations').append(`
        //     <li>${math.text} = ${math.author}</li>
        //     `)
        // }
    })

}