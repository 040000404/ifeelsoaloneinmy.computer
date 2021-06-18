
//images
$( document ).ready(function () { startLoadFile();
});

function startLoadFile(){
  $.ajax({
    url: 'images.json',
    type: 'GET',
    dataType : 'json',
    success : function (data) {
      createImages(data)
      }
    });
  }

// JSON 포멧 데이터 처리
  function createImages(objImageInfo) {
    var images = objImageInfo.images;
    var strDOM = "";
    for (var i = 0; i < images.length; i++) {
       // N번째 이미지 정보를 구하기
       var image = images[i];

       // N번째 이미지 패널을 생성
       strDOM +=  "<div class='gallery-item' tabindex='0'><img src='" + image.url + " ' class='gallery-image'></div>";
       strDOM += '</div>';
     }
       // 이미지 컨테이너에 생성한 이미지 패널들을 추가하기
       var $gallery = $(".container .gallery");
       $gallery.append(strDOM);
     }

//image resize
$(window).on('load',function(){
    $('.gallery-item img').each(function(){
      //you need to put this inside the window.onload-function (not document.ready), otherwise the image dimensions won't be available yet
         if ($(this).width()/$(this).height() >= 1) {
            $(this).addClass('landscape');
        } else {
            $(this).addClass('portrait');
        }
    });
});
