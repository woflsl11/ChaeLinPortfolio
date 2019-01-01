
            openHost(event, 'spider');
            function openHost(evt, hostName) {
                var i, x, tablinks;
                x = document.getElementsByClassName("host");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablink1");
                for (i = 0; i < x.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
                }
                document.getElementById(hostName).style.display = "block";
                evt.currentTarget.className += " w3-red";
            }