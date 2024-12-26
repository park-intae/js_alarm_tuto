// product detail
let car = { name: '소나타', price: [50000, 30000, 40000] }
$('.item').text(car.name);
$('.price').text(car.price[0]);
// listButton
const button = $('.tab-button');
const contents = $('.tab-content');
button.on('click', function () {
    const index = button.index($(this));
    openTab(index)
})
function openTab(index) {
    button.removeClass('orange');
    button.eq(index).addClass('orange');
    contents.removeClass('show');
    contents.eq(index).addClass('show');
}
//셔츠 선택지 함수
$('.custom-select').eq(0).on('input', function () {
    let value = $(this).val();
    if (value == '셔츠') {
        $('.custom-select').eq(1).removeClass('form-hide');
    } else {
        $('.custom-select').eq(1).addClass('form-hide');

    }
})