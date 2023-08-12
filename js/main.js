$('#btn-square').click(function () {
    let box = $('.box');
    box.animate({
        left: 200
    });
    box.animate({
        top: 200
    });
    box.animate({
        left: 0
    });
    box.animate({
        top: 0
    });
});
$('#btn-triangle').click(function () {
    let box1 = $('.box');
    box1.animate({
        left: 100
    });
    box1.animate({
        left: 300
    });
    box1.animate({
        top: 200,
        left: 100
    });
    box1.animate({
        top: 0
    });
    box1.animate({
        left: 0
    });
});
// $('#btn-reveal').click(function () {
//     let box2 = $('.box2');
//     box2.animate({
//         width: '200px',
//         height: '200px',
//         opacity: 1
//     })
// });
let biba = true;
$('#btn-reveal').click(function (e) {
    if (biba) {
        $('.box2').animate({
            width: '60px',
            height: '60px',
            opacity: 0
        });
        biba = false;
    } else {
        $('.box2').animate({
            width: '200px',
            height: '200px',
            opacity: 1
        });
        biba = true;
    }
});