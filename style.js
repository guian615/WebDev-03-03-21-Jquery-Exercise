    $("#pp").mouseenter(function() {
        $("#pp-description").fadeToggle();

    })
    $("#pp").mouseleave(function() {
        $("#pp-description").fadeToggle();

    })

    $("#pp").click(function() {
        $(".onMouseClick").toggle();

    })

    $(".fpic").dblclick(function() {
        window.location.href = $(this).data("link");
    })

    $("#btnAn").click(function() {
        $(".fpic").animate({
            height: "150px",
            width: "200px"
        });
    })

    $("#btnAn").dblclick(function() {
        $(".fpic").animate({
            height: "500px",
            width: "500px"
        });
    })

   
    $("#fpic1").click(function() {
        $(".friend1").show();
    })

    $("#fpic2").click(function() {
        $(".friend2").show();
    })


    $("#btnb").click(function() {
        $("#autobio").show();
        $(".exercise1").hide();
        $(".exercise2").hide();
        $(".exercise3").hide();

    })

    function change() // no ';' here
    {
        var elem = document.getElementById("btnb");
        if (elem.value=="Auto-Biography") elem.value = "Scroll Down";
        else elem.value = "Auto-Biography";
    }

    $("#btn1").click(function() {
        $(".exercise1").show();
        $("#autobio").hide();
        $(".exercise2").hide();
        $(".exercise3").hide();

    })

    $("#btn2").click(function() {
        $(".exercise2").show();
        $(".exercise1").hide();
        $("#autobio").hide();
        $(".exercise3").hide();



    })
    $("#btn3").click(function() {
        $(".exercise3").show();
        $(".exercise1").hide();
        $(".exercise2").hide();
        $("#autobio").hide();


    })


    $("#btn").click(function() {
        $num = $('#firstNum').val();
        $base2 = $("#toBase").val();
        $("#result").val(parseInt($num, $base2))
    });




    $("#btnDate").click(function() {
        date = $("#date").val();
        ndx1 = date.indexOf("/")
        month = parseInt(date.slice(ndx1 + 1, ndx1 + 3));

        if (month == 1) {
            $("#displaymonth").val("JANUARY")
        } else if (month == 2) {
            $("#displaymonth").val("FEBRUARY")
        } else if (month == 3) {
            $("#displaymonth").val("MARCH")
        } else if (month == 4) {
            $("#displaymonth").val("APRIL")
        } else if (month == 5) {
            $("#displaymonth").val("MAY")
        } else if (month == 6) {
            $("#displaymonth").val("JUNE")
        } else if (month == 7) {
            $("#displaymonth").val("JULY")
        } else if (month == 8) {
            $("#displaymonth").val("AUGUST")
        } else if (month == 9) {
            $("#displaymonth").val("SEPTEMBER")
        } else if (month == 10) {
            $("#displaymonth").val("OCTOBER")
        } else if (month == 11) {
            $("#displaymonth").val("NOVEMBER")
        } else if (month == 12) {
            $("#displaymonth").val("DECEMBER")
        } else {
            $("#displaymonth").val("NO CORRESPONDING MONTH")
        }
    });

    $("#btnDay").click(function() {
        date = new Date($("#day").val());
        day = date.getDay();
        if ((day === 6) || (day === 0)) {
            $("#displayweek").val("Weekend")
        } else {
            $("#displayweek").val("Weekdays")
        }
    })