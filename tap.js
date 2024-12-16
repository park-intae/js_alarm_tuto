// product detail
let car = {name : '소나타', price :[50000,30000,40000]}
$('.item').text(car.name);
$('.price').text(car.price[0]);
// listButton
const button = $('.tab-button');
const contents = $('.tab-content');
button.on('click', function(){
    const index = button.index($(this));
    openTab()
})
function openTab(){
    button.removeClass('orange');
    button.eq(index).addClass('orange');
    contents.removeClass('show');
    contents.eq(index).addClass('show');
}