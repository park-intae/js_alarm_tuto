
// nav-bar
//다크모드
let count = 0;
$('.badge').on('click', function () {
    count++;
    if (count % 2 == 0) {
        $(this).text('Dark🔄').css('color', 'white');
        $(this).removeClass('bg-light').addClass('bg-dark');
        $('body').removeClass('dark');
        $('.navbar')
            .removeClass('navbar-dark bg-dark')
            .addClass('navbar-light bg-light');
    } else if (count % 2 == 1) {
        $(this).text('Light🔄').css('color', 'black');
        $(this).removeClass('bg-dark').addClass('bg-light');
        $('body').addClass('dark');
        $('.navbar')
            .removeClass('navbar-light bg-light')
            .addClass('navbar-dark bg-dark');
    }
})
//nav-bar 메뉴 작동
$('.navbar-toggler').on('click', function () {
    $('.list-group').toggleClass('show');
})
//nav-bar 스크롤시 크기 조절
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.navbar-brand').css('font-size', '20px');
    } else {
        $('.navbar-brand').css('font-size', '30px');
    }
})
//페이지 스크롤량 확인 바
let wholehi = $('html').prop('scrollHeight');
let viewhi = $('html').innerHeight();
console.log(wholehi, viewhi)
$(window).on('scroll', function () {
    let nowScr = $('html').scrollTop();
    let scrollPercent = 100 - (2 * nowScr / 10);
    console.log(nowScr, scrollPercent)
    $('.scrolling').css('transform', `translateX(-${scrollPercent}%)`);
})


// modal
$('#login').on('click', function () {
    $('.black-bg').addClass('show-modal');
})
$('#close').on('click', function () {
    $('.black-bg').removeClass('show-modal');
})
$('.black-bg').on('click', function (e) {
    if (e.target == this) {
        $(this).removeClass('show-modal')
    }
})
//form
$('form').on('submit', function (e) {
    $('.input-container p').remove();
    if ($('#id-input').val() == "" || $('#pw-input').val() == "") {
        e.preventDefault();
        $('.input-container').append("<p class='decline'>아이디나 비밀번호가 입력되지 않았습니다</p>");
    } // id/pw 값 없이 form을 submit

    if ($('#pw-input').val().length < 6) {
        e.preventDefault();
        $('.input-container').append("<p class='decline'> pw의 길이가 너무 짧습니다(6자 이상)</p>")
    } // id/pw 길이가 너무 짧을 경우

    let enterId = $('#id-input').val();
    if (enterId == '') {
        alert('아이디 입력 안함')
    } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(enterId) == false) {
        alert('올바른 이메일 형식이 아님') // 이메일 정규식을 통해 입력 확인
    }

    let enterPW = $('#pw-input').val();
    if (/[A-Z]/.test(enterPW) == false) {
        alert('올바른 비밀번호 형식이 아님')
    } // pw에 대문자 여부 확인
});

$('#close').on('click', function () {
    $('.input-container p').remove();
}); // 모달 닫을 때 p태그 제거

// main
//사은품 증정 타임아웃
function timeSet() {
    let time = 4;
    const interval = setInterval(function () {
        $('.alert').text(`${time}초 이내 구매 시 사은품 증정!!!`);
        time--;

        if (time < 0) {
            clearInterval(interval);
        }
    }, 1000)

    setTimeout(() => {
        $('.alert').hide()
    }, 5000)
}
// 이용약관 스크롤 안내
$('.lorem').on('scroll', function () {
    let 스크롤양 = $('.lorem').scrollTop();
    let div높이 = $('.lorem').prop('scrollHeight');
    let 보이는높이 = $('.lorem').innerHeight();
    if (스크롤양 + 보이는높이 >= div높이 - 10) {
        if (!$('.lorem-container p').length) {
            $('.lorem-container').append('<p style="color:orange">약관을 모두 읽었습니다</p>');
        }
    }
})

//슬라이드 넘기기
function slideFlip() {
    let now = 1; // 현재 슬라이드 번호 초기화
    const totalSlides = $('.slide-box').length; // 슬라이드 총 개수

    // 숫자 버튼으로 슬라이드 이동
    $('[class^="slide-"]').on('click', function () {
        const num = $(this).attr('class').match(/slide-(\d+)/);
        if (num) {
            now = parseInt(num[1]); // 버튼 번호 가져오기
            $('.slide-container').css('transform', `translateX(-${(now - 1) * 100}vw)`);
        }
    });

    // < 버튼으로 이전 슬라이드 이동
    $('.slide-pre').on('click', function () {
        if (now > 1) {
            now--;
            $('.slide-container').css('transform', `translateX(-${(now - 1) * 100}vw)`);
        }
        console.log('<눌림?');
    });

    // > 버튼으로 다음 슬라이드 이동
    $('.slide-pss').on('click', function () {
        if (now < totalSlides) {
            now++;
            $('.slide-container').css('transform', `translateX(-${(now - 1) * 100}vw)`);
        }
        console.log('>눌림?');
    });

    // 마우스 드래그 시 슬라이드 이동
    let startPoint = 0;
    let clicked = false;

    $('.slide-box').eq(0).on('mousedown', (e) => {
        startPoint = e.clientX;
        clicked = true;
    });

    $('.slide-box').eq(0).on('mouseup', (e) => {
        clicked = false;
        if(e.clientX - startPoint < -200){
            $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(-100vw)')
        }else{
            $('.slide-container').css('transition', 'all 0.5s').css('transform', 'translateX(0vw)');
        }
        setTimeout(() => {
            $('.slide=container').css('transition', 'none')
        }, 500);
    })
    
    $('.slide-box').eq(0).on('mousemove', (e) => {
        if (clicked === true) {
            $('.slide-container').css('transform', `translateX( ${e.clientX - startPoint}px)`)
        }
    });
}

//코드실행기
$(document).ready(function () {
    timeSet();
    slideFlip();
});