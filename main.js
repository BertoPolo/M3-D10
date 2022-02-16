/* 
  

/* fetch("https://striveschool-api.herokuapp.com/api/movies/" + genres, {

  headers: {
        "Authorization": "Bearer 
        }
}).then(response => 
  response.json()).then(data => {

    console.log(data)
} */

/* const fetcher = function () {
  fetch("https://striveschool-api.herokuapp.com/api/movies", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmFlMDgyZWExZDAwMTViYjA0MzciLCJpYXQiOjE2NDM4MDEzMTIsImV4cCI6MTY0NTAxMDkxMn0.dlz2qOuGVhBvUctJZ6tPWRv6oLf_d1KGnXfKXwMn6Ys",
    },
  })
    .then((resp) => resp.json())
    .then((serverData) => {
      console.log(serverData);

      serverData.forEach((element) => {
        const theP = document.createElement("h4");
        theP.innerHTML = ` ${element} `;

        const containerNode = document.getElementById("dynamic");
        containerNode.appendChild(theP);
      });
    })
    .catch((err) => console.log(err));
};

window.onload = function () {
  fetcher();
};
 */

const handleSubmit = function (event) {
  event.preventDefault();

  const movieInput = {
    name: document.getElementById("inputName").value,
    description: document.getElementById("inputDescription").value,
    category: document.getElementById("inputCategory").value,
    imageUrl: document.getElementById("inputImgeUrl").value,
  };

  // put here  the POST

  /* fetch("https://striveschool-api.herokuapp.com/api/movies", {
    method: "POST",
    body: JSON.stringify(genres),
    headers: new Headers({
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmFlMDgyZWExZDAwMTViYjA0MzciLCJpYXQiOjE2NDM4MDEzMTIsImV4cCI6MTY0NTAxMDkxMn0.dlz2qOuGVhBvUctJZ6tPWRv6oLf_d1KGnXfKXwMn6Ys",
      "Content-Type": "application/json",
    }),
  }).catch((err) => console.log(err));
  console.log(genres);

  alert("the movie has been created, lets g0000");
}; */

const genresCreator = function (genres) {
  const dropdown = document.getElementById("genresDropdown");
  genres.forEach(
    (genre) =>
      (dropdown.innerHTML += `
    <a class="dropdown-item" href="#">${genre}</a> `)
  );
};

const fectcherMovies = async () => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies",
      {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmFlMDgyZWExZDAwMTViYjA0MzciLCJpYXQiOjE2NDM4MDEzMTIsImV4cCI6MTY0NTAxMDkxMn0.dlz2qOuGVhBvUctJZ6tPWRv6oLf_d1KGnXfKXwMn6Ys",
        }),
      }
    );
    console.log(response);
    let data = await response.json();
    console.log(data);
    genresCreator(data);
  } catch (error) {
    console.log(error);
  }
};

fectcherMovies();
