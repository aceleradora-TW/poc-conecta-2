// $(document).ready(function(){
//
//   function showCards(inputSort){
//     console.log("TO NA FUNCTION");
//     if(inputSort == 'avaliacao'){
//       var divList = $(".listaCard");
//
//       console.log("TO NO IF");
//       divList.sort(function(a, b){
//         console.log("TO NO SORT");
//         var contentA = parseInt( $(a).attr('star'));
//         var contentB = parseInt( $(b).attr('star'));
//
//         return contentA - contentB;
//       });
//       $('.BoxCards').html(divList);
//     }
//
//   }
// });

$('#magic-button-1').click(function(){
  $('#magic-button-1').fadeOut(0);
  $('#success-message-1').fadeIn(3000);
});

$('#magic-button-2').click(function(){
  $('#magic-button-2').fadeOut(0);
  $('#success-message-2').fadeIn(3000);
});

$('#magic-button-3').click(function(){
  $('#magic-button-3').fadeOut(0);
  $('#success-message-3').fadeIn(3000);
});

$('#magic-button-4').click(function(){
  $('#magic-button-4').fadeOut(0);
  $('#success-message-4').fadeIn(3000);
});
