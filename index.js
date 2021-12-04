document.addEventListener("DOMContentLoaded", loadPage);

const lista = document.getElementById("lista");

const users = [
  {
    batatinha: "Alan",
    age: 23,
    altura: 1.6,
    weight: 80,
  },
  {
    batatinha: "Gabriel",
    age: 26,
    altura: 1.8,
    weight: 70,
  },
];

// let users = [];

function loadPage() {
  fetch("https://randomuser.me/api/?results=50")
    .then((response) => response.json())
    .then((json) => {
      json.results.map((result) => console.log(result));
      console.log(json);
      console.log(json.results);
      // json.map((item) => {
      //   colocarCard(item);
      // });
    });

  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     json.map((item) => {
  //       colocarCard(item);
  //     });
  //   });

  /*
  fetch("http://127.0.0.1:8080")
  .then((response) => response.json())
  .then((json) => {
    json.map((item) => {
      colocarCard(item);
    });
  });
  */
}

function excluirCard(parametro) {
  var excluir = document.getElementById(parametro);
  if (excluir.parentNode) {
    excluir.parentNode.removeChild(excluir);
  }
}

function colocarCard(batata) {
  lista.innerHTML =
    lista.innerHTML +
    `
    <li id="${batata.id}">
      <div>
        <p>Nome: ${batata.name}</p>
        <p>Telefone: ${batata.phone}</p>
        <p>User: ${batata.username}</p>
        <p>Email: ${batata.email}</p>
        <p>Website: ${batata.website}</p>
      </div>
      <button onclick="excluirCard('${batata.id}')">Excluir</button>
    </li>
  `;
}

function colocarNome(texto) {
  // console.log(texto);
  lista.innerHTML = lista.innerHTML + `<li>${texto}</li>`;
}

function aparecer() {
  // var li = document.createElement("li");
  // li.innerHTML = "Olá";
  // lista.appendChild(li);
  loadPage();
}
