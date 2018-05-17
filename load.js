var load_img_0 = [];
load_img_0.push('img/loading.png');

var load_img = [];
load_img.push('img/1.png');
load_img.push('img/2.png');
load_img.push('img/3.png');
load_img.push('img/4.png');
load_img.push('img/5.png');
load_img.push('img/btn.png');
load_img.push('img/indexBg.png');

var load_img_progress = 0;
var load_img_total = load_img.length;

function loading0() {
    jQuery.imgpreload(load_img_0, {
        all: function () {
            $('.loading').css("opacity", "1");
            loading();
        }
    });
}

//加载
function loading() {
    jQuery.imgpreload(load_img, {
        each: function () {
            var status = $(this).data('loaded') ? 'success' : 'error';
            if (status === 'success') {
                load_img_progress++;
                var percent = Math.floor(load_img_progress / load_img_total * 100);
                $('#progress_num').html(percent + "%");
                console.log(percent)
            }
        },
        all: function () {
            $("#m_prog").remove();

                $(".loading").fadeOut(
                    {
                        duration: 2000
                    }
                );


            setTimeout(function () {
            $(".page").fadeIn({
                duration: 1000
            });
            },500)
        }
    });
}


loading0();
