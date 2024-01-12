$(document).ready(function () {
    $('.filter-btn').click(function () {
        var category = $(this).data('category');
        $('.item').removeClass('hide');
        $('.item:not(.' + category + ')').toggleClass('hide');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Toggle visibility of html intro content
    $('.htmlintro').click(function () {
        $('.item').removeClass('hide');
        $('.item:not(.htmlintro)').toggleClass('hide');
        $('.filter-btn').removeClass('active');
        $('.htmlintro.filter-btn').addClass('active');
    });
});
