// JavaScript source code

         //슬라이드쇼 스크립트
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

//캐릭터_슬라이드옆에 보이는 이미지 스크립트

ShowCharacter(1)//이거를 써주는 이유 : 이거를 지우면 위에 있던 그림,사진들이 모두 나타난다 왜냐하면 display:none을 해준곳이 없기 때문이다. (display:none이란 글,그림을 안보이게 해준다)

function ShowCharacter(n) {
    var x = document.getElementsByClassName("character_side_img");
    var y = document.getElementsByClassName("character_side_sentence");
    for (i = 0; i < x.length; i++) {//우선 싹다 이미지를 지우고
        x[i].style.display = "none";
        y[i].style.display = "none";
    }

    x[n - 1].style.display = "block";//선택한 이미지를 보여준다 -->선택한 이미지의 고유번호 = n (내가 넘길때 사용했다)
    y[n - 1].style.display = " block";
}


//var one_time = 1;//나는 움직였을때 메뉴가 맨 밑에 있는게 아니라 화면 중앙에 오게하고 싶다
//function chang_position() {
//    if (one_time==1) {
//        var x = document.getElementById(sb_men);
//        var y = x.style.margin - button;
//        y = "50%";
//        x.style.position = "fixed";
//        one_time = 0;
//    }
//}
