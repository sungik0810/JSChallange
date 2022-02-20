
$(document).ready(function() {
  $("#search").click(function(event) {
    event.preventDefault();    
    $.ajax({
      method: "GET",
      url: "https://dapi.kakao.com/v2/search/web",
  data: { query: $("#searchbar").val(),size:50 },
  headers: { Authorization: "KakaoAK f529733ccf1fadfda8c042bdde2d03ec" },
  }).done(function (msg) {
    $('.result').empty();
    for(var i = 0; i < 50; i++){
      $('.result').append($(`<p class="p${i} cssp">`));
      $('.result').append($(`<p class="p1${i} contents">`));
      $(`.p${i}`).append("<strong>"+msg.documents[i].title+"</strong>");
      $(`.p1${i}`).append("<strong>"+msg.documents[i].contents+"</strong>");
      $(`.p${i}`).attr("onclick","window.open(\""+msg.documents[i].url+"\")")
    }
  });
});
});