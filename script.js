var newsContainer = document.getElementById("news-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://https://hn.algolia.com/api/v1/search_by_date?tags=story&count=100')
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var ourData = JSON.PARSE(ourRequest.responseText);
    renderHTML(ourData);
    } else {
    console.log("We connected to the server, but it returned an error.")
   }
 };
  ourRequest.send();
 }
 });
 function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].title + " is a " + data[i].author + ".</p>";
  }

  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};
 