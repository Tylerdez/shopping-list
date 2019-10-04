function start() {
  $("#js-shopping-list-form").submit(function(e) {
    e.preventDefault();
    const targetInput = $(e.currentTarget).find("#shopping-list-entry");
    $(".shopping-list").append(
      "<li>" +
        '<span class="shopping-item">' +
        targetInput.val() +
        "</span>" +
        '<div class="shopping-item-controls">' +
        '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
        "</button>" +
        '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
        "</button>" +
        "</div>" +
        "</li>"
    );
  });

  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
    $(this)
      .closest(".shopping-item-controls")
      .siblings(".shopping-item")
      .toggleClass("shopping-item__checked");
  });

  $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
    $(this)
      .closest("li")
      .remove();
  });
}
$(start);
//add quotes to elements
//attach event handler
//add e.preventDefault(); default action that belongs to the event will not occur
//have targetInput as a string and need to add it as a variable with ' + variable + '
//need to include .val() - which sets or returns the value of form fields
