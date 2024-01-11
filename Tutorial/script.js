
        // Check active classes
        var checkClass = function () {
            if ($('.item').hasClass('hide')) {
                $('.item').removeClass('hide');
            }
        };
        $(".html").addClass("active");
        $(".item.html").removeClass("hide")
        // Category filters
        $('.item').click(function () {
            checkClass();
        });
        $('.html').click(function () {
            checkClass();
            $('.item:not(.html)').toggleClass('hide');
        });
        $('.css').click(function () {
            checkClass();
            $('.item:not(.css)').toggleClass('hide');
        });
        $('.js').click(function () {
            checkClass();
            $('.item:not(.js)').toggleClass('hide');
        });
        $('.bootstrap').click(function () {
            checkClass();
            $('.item:not(.bootstrap)').toggleClass('hide');
        });
        $('.react').click(function () {
            checkClass();
            $('.item:not(.react)').toggleClass('hide');
        });


        // Active tag
        $('.filter-btn').click(function () {
            $('.filter-btn').removeClass('active');
            $(this).addClass('active');
        })
    