let form = document.querySelector("#form");
let output = document.querySelector("#output");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let getdata = document.getElementById("get-data").value;
  let text =
    "https://www.breakingbadapi.com/api/characters?limit=1&" +
    "name=" +
    getdata;
  fetch(text)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let result = `<h1>${data[0].name}</h1>
      <img src="${data[0].img}" height=400px/>
      <ul>
      <li>Birthday: ${data[0].birthday}</li>
      <li>Status: ${data[0].status}</li>
      <li>Nickname: ${data[0].nickname}</li>
      </ul>
      `;

      output.innerHTML = result;
    });
});
