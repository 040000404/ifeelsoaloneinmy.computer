var i = 0;
$('.number').click(function(){
  var sentence = [ 'y', 'o', 'u','r','l','a','n','g','u','a','g','e','m','a','k','e','s','m','e','f','e','e','l','u','n','s','p','e','c','i','a','l' ];
  var no = $(this).text();
    if(i<2){
      $( ".dial" ).append(no);
    }
    else{
    $( ".dial" ).append(sentence[i%sentence.length]);
  }
    i+=1;
    
   
})



 