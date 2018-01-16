var contentful = require('contentful');

var client = contentful.createClient({
  space: '21jniikh0v1p',
  accessToken: '10a867f74450046212923f01286007c1d10e0c2075c816a7a374390d0a829a37'
});

client.getAssets()
  .then((response) => processAssests(response.items))
.catch(console.error)


function processAssests(assests) {
  for (var i = 0; i < assests.length; i++) {
    getLogo(assests[i]['sys']['id']);

    if (i == assests.length - 1) {
      initiateSlideShow();
    }
  }

}

function getLogo(imageId) {
  client.getAsset(imageId)
    .then(function (asset) {

      var logoDiv = document.getElementById('logo');
      var imageURL = 'https:' + asset.fields.file.url;
      var imageFile = document.createElement('img');

      imageFile.src = imageURL;
      imageFile.style.display = 'none';
      logoDiv.appendChild(imageFile);

    });
}

function initiateSlideShow() {
  // Begin slide show

  $('body').on('click', function () {

    var images = $('img');
    var length = images.length;
    var index = 0;

    setInterval(function () {
      $('img').css('display', 'none');
      $('img:eq(' + index + ')').css('display', 'block');

      if (index == length - 1) {
        index = 0;
      } else {
        index++;
      }
    }, 3000);
  });

}

