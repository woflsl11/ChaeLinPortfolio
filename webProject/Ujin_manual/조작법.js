        showAction(1);
            function showAction(n) {
            var x = document.getElementsByClassName("act_gif");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            x[n - 1].style.display = "block";
        }