// JavaScript source code

         //�����̵�� ��ũ��Ʈ
         var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("div_three_character");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

//ĳ����_�����̵忷�� ���̴� �̹��� ��ũ��Ʈ

ShowCharacter(1)//�̰Ÿ� ���ִ� ���� : �̰Ÿ� ����� ���� �ִ� �׸�,�������� ��� ��Ÿ���� �ֳ��ϸ� display:none�� ���ذ��� ���� �����̴�. (display:none�̶� ��,�׸��� �Ⱥ��̰� ���ش�)

function ShowCharacter(n) {
    var x = document.getElementsByClassName("character_side_img");
    var y = document.getElementsByClassName("character_side_sentence");
    for (i = 0; i < x.length; i++) {//�켱 �ϴ� �̹����� �����
        x[i].style.display = "none";
        y[i].style.display = "none";
    }

    x[n - 1].style.display = "block";//������ �̹����� �����ش� -->������ �̹����� ������ȣ = n (���� �ѱ涧 ����ߴ�)
    y[n - 1].style.display = " block";
}


//var one_time = 1;//���� ���������� �޴��� �� �ؿ� �ִ°� �ƴ϶� ȭ�� �߾ӿ� �����ϰ� �ʹ�
//function chang_position() {
//    if (one_time==1) {
//        var x = document.getElementById(sb_men);
//        var y = x.style.margin - button;
//        y = "50%";
//        x.style.position = "fixed";
//        one_time = 0;
//    }
//}
