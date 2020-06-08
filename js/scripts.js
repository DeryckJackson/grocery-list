$(document).ready(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();

    const groceries = $("textarea#list").val().split(", ")
    $("textarea#list").val("");

    groceries.forEach((element, index) => {
      groceries[index] = element.toUpperCase().trim();
    })

    groceries.sort();

    $("form").hide();
    $(".groceries").hide();


    groceries.forEach((element) => {
      $("ul").append(`<li>${element}</li>`)
    })
  })
});