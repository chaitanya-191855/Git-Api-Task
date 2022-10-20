let form = document.querySelector("#form");
let output = document.querySelector("#output");
let j = 0;
function Themeschange() {
  if (j === 0) {
    document.getElementById("Themes-color").innerHTML =
      "Click for White Themes";
    document.getElementById("main").style.backgroundColor = "black";
    document.getElementById("main").style.color = "white";
    j = 1;
  } else {
    document.getElementById("Themes-color").innerHTML =
      "Click for Black Themes";
    document.getElementById("main").style.backgroundColor = "white";
    document.getElementById("main").style.color = "black";
    j = 0;
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let getdata = document.getElementById("get-data").value;
  //let text = `https://api.github.com/users/${getdata}`;
  let result = "";
  let text = "https://api.github.com/users" + "/" + getdata;
  fetch(text)
    .then((res) => res.json())
    .then((data) => {
      result += `
              <h1>${data.name}</h1>
              <img src="${data.avatar_url}"/>
              <ul>
              <li>repository:${data.public_repos}</li>
              <li>followers:${data.followers}</li>
              <li>following:${data.following}</li>
              <div id="repos"></div>
              </ul>
              `;
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
      output.innerHTML = result;
    });
});
