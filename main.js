function character() {
  let urlQueryParameters = new URLSearchParams(window.location.search),
    queryParameterName = urlQueryParameters.get("name"),
    name = document.getElementById("name").value;

  // console.log(name);

  if (queryParameterName !== null && queryParameterName !== "") {
    document.getElementById("name").value = queryParameterName;
    connection();
  } else if (name !== null && name !== "") {
    document
      .getElementById("connectionForm")
      .addEventListener("submit", connection);
  } else {
    document.getElementById("characterSection").innerHTML =
      '<h2 id="characterMainTitle">Enter search term above...</h2>';
  }
}

function connection() {
  document.getElementById("characterSpinnerSection").innerHTML = "";
  document.getElementById("comicsSpinnerSection").innerHTML = "";

  const xhr = new XMLHttpRequest();
  const name = document.getElementById("name").value;
  const params = "name=" + name;

  xhr.open("GET", "./connections/name-search.php?" + params, true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.onloadstart = function () {
    document.getElementById("characterSpinnerSection").innerHTML =
      '<strong id="spinnerText" class="text-primary">Loading character...</strong>' +
      '<div class="text-primary spinner-border ml-auto" role="status" ' +
      'aria-hidden="true" id="spinner"></div>';
  }
  xhr.onerror = function () {
    document.getElementById("characterSection").innerHTML = '<h2 id="characterMainTitle">An error has occured, check connection.</h2>';
  }
  xhr.onload = function () {
    if (this.status == 200) {
      const results = JSON.parse(this.responseText);
      console.log(results);

    } else {
      document.getElementById("characterSection").innerHTML = '<h2 id="characterMainTitle">Request not received</h2>';
    }
  }
  xhr.onloadend = function () {
    document.getElementById("characterSpinnerSection").innerHTML = "";
  }
  xhr.send()
}
