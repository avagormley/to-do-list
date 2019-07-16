

var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", createNewItem);
$('.card-container').on("click", ".delete-btn",deleteItem)

function createNewItem(){
  var toDo = $('.bucket-list').val();

appendNewItem(toDo);
clearInputs ();
}

function appendNewItem(toDo) {
  cardContainer.append (`
    <div class="bucket-list-card">
    <p>${toDo}</p>
    <button class="delete-btn">Done!</button>
    </div>
    `);
}

function clearInputs(event) {
  $('.bucket-list').val("");
}

clear.on("click", function(){
  quote.textContent = ""
})

function deleteItem (event) {
  event.target.parentNode.remove();
}
