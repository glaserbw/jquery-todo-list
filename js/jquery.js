// function new_element(){
// $("#header ul").append('<li>Java</li>');
// }

//built my object to be appended
function new_element(){
	var newListItem = $('<li class="list-item" onclick="deleteItem()"></li>');
	newListItem.text($('#writtenItem').val());

//appends object 
	$('ul').append(newListItem); 

//clear input field
	$('#writtenItem').val(""); 
}

//clears all Li items with list-item class and adds ability to restart list 
function removeAll(){
	$('.list-item').remove();
	$('#header').append("");
}

function deleteItem() {
	console.log("delete attempted");
	$(this).remove();
}



// function deleteItem() {
// 	console.log("self delete attempted");
// 	var item = this.li
// 	$(item).remove();
// }

// $("#myList li").click(function (e) {
//     $(this).remove();
// });



// $('#writtenItem').val()
// newListItem.text("$('#writtenItem').val()");

// function new_element(){
// 	var newListItem = $("<li></li>");
// 	newListItem.text($('#writtenItem').val());
// 	$("ul").append(newListItem); 
// }

// $('#menu li ul li').each(function(i, e){
//     $(this).append('<span class="arr"></span>');
//     $(this).find(".arr").attr("id", "id_" + i);
// });

// $(element).attr("id","theid");
