$(function () {
    console.log('App Successfully Loaded!');
    getBreed();
})

function getBreed() {
    $('form').on('submit', function (event) {
        let newEntry = "";
        event.preventDefault();
        let breed = $('#js-breed').val();
        displayBreed(breed);
        $('.imgContainer').empty();
        $('.errorDog').hide();

    })
}

function displayBreed(breed) {
    let specificBreed = `https://dog.ceo/api/breed/hound/${breed}/images/random`;
    console.log(specificBreed);

    fetch(specificBreed)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            showBreed(responseJson);
        })
        .catch(function (err) {
            console.log('Error')
        })
}

function showBreed(responseJson) {
    console.log(responseJson);
    if (responseJson.status === 'error') {
        $('.errorDog').show();
        $('#js-breed').val('');
    } else {
        let dog = responseJson.message;
        $('.imgContainer').append(`<img id="js-dogimg" src="${dog}" alt="dogs" >`);
        $('#js-breed').val('');
        console.log('Success');
    }
}
