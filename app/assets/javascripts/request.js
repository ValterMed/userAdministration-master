function searchCoincidence () {
  event.preventDefault();
  let word = $(".search").val()
  $.ajax({
    url: `http://localhost:3000/users/search?value=${word}`,
    method: 'GET',
    success: function(response) {
      console.log(response);
    },
    error: function() {
      console.log("Informacion no disponible");
    }
  });
}