// JavaScript source code


    function allowDrop(e) {
        e.preventDefault();
    }

function drag(e) {
    e.dataTransfer.setData("Text", e.target.id);
}

function drop(e)
{
    var data = e.dataTransfer.getData("Text");
    var num = parseInt(data);
    var i;

    var x = document.getElementsByClassName("item_information");
    var y = document.getElementsByClassName("item_side_information");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
    }
            
    x[num - 1].style.display = "block";
    y[num - 1].style.display = "inline";
}

