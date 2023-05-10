$(document).ready(onReady);

function onReady() {
//   $.ajax({
//     type: "GET",
//     url: "/artist",
//   }).then(function (response) {
//     for (let i = 0; i < response.length; i++) {
//       let artist = response[i];
//     }
  

//   // TODO Add ajax request for /songs and display on DOM
// } //end of on Ready
//   )
getArtists();
getSongs();
}

function getArtists() {
  $.ajax({
    type: "GET",
    url: "/artist",
  }).then(function (response) {
    for (let i = 0; i < response.length; i++) {
      let artist = response[i];
      $("#artistTableBody").append(`
      <tr>
          <td>${artist.name}</td>
          <td>${artist.born}</td>
          <td>${artist.died}</td>
      </tr>
  `);
}
});
              
} //end of getArtists

function getSongs() {
  $.ajax({
    type: "GET",
    url: "/song",
  }).then(function (response) {
    for (let i = 0; i < response.length; i++) {
      let music = response[i];
      $("#songTableBody").append(`
            <tr>
                <td>${music.title}</td>
                <td>${music.artist}</td>
            </tr>
                `);
    }
  });
}