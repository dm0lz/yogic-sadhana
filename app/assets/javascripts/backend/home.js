
$(document).ready(function(){

  if ($("input#medium_media_type_audio").is(':checked')){
    $("div.form-group.video").hide();
    $("input#medium_media_type_video").hide();
    $("label[for='video']").hide();
    $("div.form-group.audio").show();
  };
  if ($("input#medium_media_type_video").is(':checked')){
    $("div.form-group.audio").hide();
    $("input#medium_media_type_audio").hide();
    $("label[for='audio']").hide();
    $("div.form-group.video").show();
  };

  $("input#medium_media_type_audio").bind('click', function(){
    $("div.form-group.video").hide();
    $("input#medium_media_type_video").hide();
    $("label[for='video']").hide();
    $("div.form-group.audio").show();
  });
  $("input#medium_media_type_video").bind('click', function(){
    $("div.form-group.audio").hide();
    $("input#medium_media_type_audio").hide();
    $("label[for='audio']").hide();
    $("div.form-group.video").show();
  });

});
