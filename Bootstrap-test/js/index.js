 //页面加载完成时初始化部分标签的尺寸
        $(document).ready(function() {
            reWinSize();
        });
        //页面尺寸改变时初始化部分标签的尺寸
        $(window).resize(function() {
            reWinSize();
        });
        //页面标签尺寸调整
        function reWinSize() {
            $('#bottom').css('height',$(window).height()-120);
            $('#left').css('height','100%');
            $('#leftIframe').css('height','100%');
            $('#right').css('height',$('#bottom').height());
            $('#rightIframe').css('height',$('#right').height());
            $('#right').css('width',$('#bottom').width()-200);
            $('#rightIframe').css('width',$('#right').width());
        }

