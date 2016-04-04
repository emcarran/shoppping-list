$(document).ready(function () {

            //use enter to add list items

            $('#item').keyup(function (event) {
                if (event.keyCode == 15) {
                    event.preventDefault();
                    $('#add').click();
                };
            });

            //add list items
            $('#add').click(function () {});

            //delete list items

            //cross off list items

            //show delete button
