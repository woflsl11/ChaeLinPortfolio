// JavaScript source code

//���� ���κ�
$(function () {
    $(".section .cont").mouseover(function () {
        $(".section .cont").stop().animate({ width: "180px" }, 900, 'easeOutCirc').removeClass("on");
        $(this).stop().animate({ width: "450px" }, 900, 'easeOutCirc').addClass("on");
    });
});600

//�������ÿ� ���� �Ʒ� ���� �ٸ��� �ص�,,,
var slideIndex = 1;
showDivs(slideIndex);

function showDivs(slideIndex)
{
    var i;
    var x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    x[slideIndex - 1].style.display = "block";
}

