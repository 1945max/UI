        
$(document).ready(function() {
    $('.meun_1').find('a').click(function() {
        //$(this).parent().parent().next('div').attr('class')=='panel-collapse collapse menu_2_m in'&&
            if($(this).find('span').attr('class')=='glyphicon pull-right glyphicon-plus'){
                
                $(this).find('span').removeClass('glyphicon-plus');
                $(this).find('span').addClass('glyphicon-minus');
                $(this).parent().parent().parent().siblings().find('.meun_1').find('span').attr('class','glyphicon pull-right glyphicon-plus');
            } else {
                
                $(this).find('span').removeClass('glyphicon-minus');
                $(this).find('span').addClass('glyphicon-plus');
                $(this).parent().parent().parent().siblings().find('.meun_1').find('span').attr('class','glyphicon pull-right glyphicon-plus');
            }
            
        });
});