const button = $('.tab-button');
const contents = $('.tab-content');
button.on('click', function(){
    const index = button.index($(this));

    button.removeClass('orange');
    button.eq(index).addClass('orange');
    contents.removeClass('show');
    contents.eq(index).addClass('show');
})