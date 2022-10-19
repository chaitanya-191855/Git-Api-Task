let form = document.querySelector("#form");
let output = document.querySelector("#output");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let getdata = document.getElementById("get-data").value;
  //let text = `https://api.github.com/users/${getdata}`;
  let result = "";
  let arr = getdata.split(" ");
  console.log(getdata);
  let text =
    "https://www.breakingbadapi.com/api/characters?" + "name=" + arr[0];
  console.log(text);
  fetch(text)
    .then((res) => res.json())
    .then((data) => {
      result += `
              <h1>${data.name}</h1>
              `;
      /*
      let url = `${data.url}` + "/" + "repos?" + "sort=pushed&per_page=5";
      //console.log(url);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let repo = "";
          data.map((post) => {
            repo += `<a href="${post.html_url}" target="_blank">${post.name}</a></br>`;
          });
          //repo.sort();
          //console.log(repo);
          document.getElementById("repos").innerHTML = repo;
        });
        */
      output.innerHTML = result;
    });
});
