//var html = '<div class="freeze"></div>' +
//'<div class="parent">' +
//'<div class="loadimg"></div>' +
//'<div class="header"></div>' +
//'<div class="msg"></div>' +
//'</div>';
//$(document.body).append(html);

function addItems() {
    //alert('add items upon clicking submit');
    var itemValue = $('#add-items').val();
    //alert(itemValue);
    if (itemValue.length == 0) {
        alert('you must enter a value');
    } else {

        var line1 = '<li class="items">';
        var line2 = '<div class="checkbox"></div> ';
        var line3 = '<span>' + itemValue + '</span>';
        var line4 = '<img class="delete-box" src="trash-can-web-icon_small.jpg">';
        var line5 = '</li>';


        var html = line1 + line2 + line3 + line4 + line5;
        $('#list').append(html);
    }
}

function tickItem() {
    //alert("I've just activated the tickItem() function");
    $(this).toggleClass('ticked');

}


function deleteItem() {
    //alert("I've just activated the deleteItem() function");
    $(this).parent().remove();

    //setTimeout(function () {
    //$(this).parent().remove()
    //}, 1300);

    //window.setTimeout(function () {
    //deleteItem;
    //}, 5000);
}



$(document).ready(function () {
    //$('.checkbox').show();
    //$('.tickedbefore').hide();

    //$('.checkbox .ticked').change(function () {
    //if ($(this).prop("ticked")) {
    //$('#showDiv').show();
    //} else {
    // $('#hideDiv').hide();
    //}
    //});

    //add list items

    $('#submit').on('click', function () {
        addItems();
        $('#add-items').val("");
    });

    $('#add-items').keypress(function (event) {
        if (event.which == 13) {
            addItems();
            $(this).val("");

        }

        //   $('.input').keypress(function (e) {
        //        if (e.which == 13) {
        //            $('form#login').submit();
        //            return false;    //<---- Add this line
        //        }
        //    });


    });
});


$(document).on('click', '.delete-box', deleteItem);

$(document).on('click', '.checkbox', tickItem);


/*key press event handlers for extra functionality */

/*add item on button press or enteer*/
