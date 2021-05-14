//Faccio la chiamata alla url per prendere gli users ed utilizzarli per risolvere l'esercizio
function onSend() {
  var requestURL = "https://jsonplaceholder.typicode.com/users";
  let request = new XMLHttpRequest();
  request.open("GET", requestURL, true);
  request.responseType = "json";
  request.send();

  //Quando ha terminato la chiamata richiamo la funzione principale con il risultato della chiamata.
  request.onload = function () {
    const users = request.response;
    console.log("users -> ", users);
    risolvi(users);
  };
}

//Verifico se l'id dell'user è nel range 1, 7
function inserisci(idUser) {
  console.log("inserisci idUser -> ", idUser);
  if (idUser >= 1 && idUser <= 7) {
    return true;
  } else {
    return false;
  }
}

//popolo l'html con il giorno della settimana
function settimana(userId) {
  let giornoDellaSettimana;
  //Creo un nuovo elemento "p"
  var node = document.createElement("p");
  switch (userId) {
    case 1:
      giornoDellaSettimana = "Lunedi";
      break;
    case 2:
      giornoDellaSettimana = "Martedi";
      break;
    case 3:
      giornoDellaSettimana = "Mercoledi";
      break;
    case 4:
      giornoDellaSettimana = "Giovedi";
      break;
    case 5:
      giornoDellaSettimana = "Venerdi";
      break;
    case 6:
      giornoDellaSettimana = "Sabato";
      break;
    case 7:
      giornoDellaSettimana = "Domenica";
      break;
  }
  //inserisco l'elemento "p" con il giorno della settimana
  var textnode = document.createTextNode(giornoDellaSettimana);
  node.appendChild(textnode);
  document.getElementById("testo").appendChild(node);
}

function risolvi(users) {
  for (let index = 0; index < users.length; index++) {
    //prendeo l'user corrente utilizzando l'index del for
    const currentUser = users[index];
    //prendo l'id dell user che mi servirà per le funzioni dopo
    const currentId = currentUser.id;

    //verifico se l'id dell'user si trova nel range 1..7
    const rangeIsCorrect = inserisci(currentId);

    //se lo è allora inserisco nell'html il giorno della settimana, altrimenti stampo un messaggio di errore
    if (rangeIsCorrect) {
      settimana(currentId);
    } else {
      var node = document.createElement("p");
      var textnode = document.createTextNode(
        "Che sfiga, non posso indovinare il giorno"
      );
      node.appendChild(textnode);
      document.getElementById("testo").appendChild(node);
    }
  }
}

onSend();
