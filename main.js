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
  }

}

function getLogo(imageId) {
  client.getAsset(imageId)
    .then(function (asset) {

      var logoDiv = document.getElementById('logo');
      var imageURL = 'https:' + asset.fields.file.url;
      var imageFile = document.createElement('img');

      imageFile.src = imageURL;
      logoDiv.appendChild(imageFile);

    });
}

