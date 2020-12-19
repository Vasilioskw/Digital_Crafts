console.log('loaded');

$('#searchButton').click(function(event) {
  event.preventDefault();
  console.log('button clicked.');

  $.get('http://www.omdbapi.com/?i=tt3896198&apikey=92cd8c36', function(response){
    response.Search.forEach(function(movie){
     // render movie on my $('#movie-results');
      console.log(movie);
    });
  });
});