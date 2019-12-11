
function createHTML(website) {
  // Append image element to UL
  $('.results').append(`
    <li><img src="${website}" width="200px"/></li>
  `);
}

function getDogImages(breed) {
  // fetches the random dog imeages
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
  // Parse json body
    .then(response => response.json())
    // find how langth of results. And then randomly select the imeage. 
    .then(responseJson => {
        createHTML(responseJson.message);
        })
    .catch(err => alert('no breed to be found'));
}

function listenToInput() {
  // listens to when a submit takes place
  $('form').submit(event => {
    // prevents page from refreshing when submit
    event.preventDefault();
    // saves input
    let num = $('input').val();
    // print out of the dog breed
    getDogImages(num);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  listenToInput();
}); 