


<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
  ];

  axios.get(urls[0]).then(function(response){
    console.log("data was fetched!");

    axios.get(urls[1]).then(function(response){
        console.log("data was fetched!")

        axios.get(urls[2]).then(function(response){
            console.log("data was fetched!")

            axios.get(urls[3]).then(function(response){
                console.log("data was fetched!")

                axios.get(urls[4]).then(function(response){
                    console.log("data was fetched!")

                };
            };
        };

    };
 };