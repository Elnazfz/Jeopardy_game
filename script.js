const NUM_CATEGORIES = 6;
const NUM_CLUES_PER_CAT = 5;

const categories = ["Baseball","Movies","U.S. States","Inventions","Hollywood Legends","Time"];

function setupBoard() {
  const $categories = $("#categories");
  const $tbody = $("tbody");
  $categories.empty();
  $tbody.empty();
  categories.forEach(cat => $categories.append(`<th>${cat}</th>`));
  for (let i = 1; i <= NUM_CLUES_PER_CAT; i++) {
    const $row = $("<tr>");
    for (let j = 0; j < NUM_CATEGORIES; j++) {
      const $cell = $(`<td>$${i*100}</td>`);
      $row.append($cell);
    }
    $tbody.append($row);
  }
}
$("#play").off("click").on("click", setupBoard);
$("tbody").off("click").on("click","td",function(){
  $(this).addClass("viewed");
});