var tabBtn = $('.tab-button');
var tabContent = $('.tab-content');
//ctrl+ r  검색하고 바꾸기가 가능.
//for반복문
//for(var 변수i = 0; 반복조건; i++;
//for(var  i= 0; i < 10; i++){console.log(i);}

//두가지 답.
// $('.list').click(function(e){
//     if (e.target == document.querySelectorAll('.tab-button')[0] ){
//         tabOpen(0)
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[1] ){
//         tabOpen(1)
//     }
//     if (e.target == document.querySelectorAll('.tab-button')[2] ){
//         tabOpen(2)
//     }
// })
//이것도 가능함.
// $('.list').on('click',function (){
//     if($(e.target).is.($('.tab-button').eq(0))){
//         tabOpen(0);
//     }
//     if($(e.target).is.($('.tab-button').eq(0))){
//         tabOpen(1);
//     }
//     if($(e.target).is.($('.tab-button').eq(0))){
//         tabOpen(2);
//     }
//
// })
$('.p-3').html()



$('.list').click(function(e){
    tabOpen(e.target.dataset.이름);
})

// for(let i=0; i<3; i++ ){
//     tabBtn.eq(i).on('click', function (){
//     tabOpen(i);
// })
// }

function tabOpen(num){
        tabBtn.removeClass('orange');
        tabContent.removeClass('show');
        tabBtn.eq(num).addClass('orange');
        tabContent.eq(num).addClass('show');


}



// tabBtn.eq(0).on('click', function (){
//     tabBtn.removeClass('orange');
//     tabContent.removeClass('show');
//     tabBtn.eq(0).addClass('orange');
//     tabContent.eq(0).addClass('show');
//
// })
//
// tabBtn.eq(1).on('click', function (){
//     tabBtn.removeClass('orange');
//     tabContent.removeClass('show');
//     tabBtn.eq(1).addClass('orange');
//     tabContent.eq(1).addClass('show');
//
// })
//
// tabBtn.eq(2).on('click', function (){
//     tabBtn.removeClass('orange');
//     tabContent.removeClass('show');
//     tabBtn.eq(2).addClass('orange');
//     tabContent.eq(2).addClass('show');
//
// })
