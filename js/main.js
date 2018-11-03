(function($) {
    "use strict";

    function renderInit() {
        if (sessionStorage.userInfo && JSON.parse(sessionStorage.userInfo) && JSON.parse(sessionStorage.userInfo).isLogin) {
            $('.login').text(JSON.parse(sessionStorage.userInfo).username);
        }

        var list = {
            men: [{
                id: 1,
                title: '男士连帽白色风衣男春秋短款2017新款学生帅气冬季男生外套潮',
                price: 299,
                originPrice: 529,
                url: 'img/singlepro/men1.jpg',
                imgUrl: ['img/singlepro/men1.jpg', 'img/singlepro/men2.jpg', 'img/singlepro/men3.jpg', 'img/singlepro/men4.jpg'],
                isNew: true,
                collect: 1,
                isRecomment: false,
                scoring: 4,
                visit: 5,
                hot: 5,
                isExclusive: false,
                best: false
            }, {
                id: 2,
                title: '官方旗舰店秋款男装外套2017新款秋季帅气潮牌欧美休闲风衣男',
                price: 239,
                originPrice: 379,
                url: 'img/singlepro/men5.jpg',
                imgUrl: ['img/singlepro/men5.jpg', 'img/singlepro/men6.jpg', 'img/singlepro/men8.jpg', 'img/singlepro/men9.jpg'],
                isNew: true,
                collect: 1,
                isRecomment: false,
                scoring: 4,
                visit: 5,
                hot: 5,
                isExclusive: false,
                best: false
            }, {
                id: 3,
                title: '连帽风衣男 2017秋季新款街头时尚青年字母印花简约短款外套',
                price: 199,
                originPrice: 349,
                url: 'img/singlepro/men10.jpg',
                imgUrl: ['img/singlepro/men10.jpg', 'img/singlepro/men11.jpg', 'img/singlepro/men12.jpg'],
                isNew: true,
                collect: 1,
                isRecomment: false,
                scoring: 4,
                visit: 5,
                hot: 5,
                isExclusive: false,
                best: false
            }, {
                id: 4,
                title: '秋季风衣男连帽迷彩印花青年男装秋装2017新款潮男外套时尚',
                price: 219,
                originPrice: 369,
                url: 'img/singlepro/men13.jpg',
                imgUrl: ['img/singlepro/men13.jpg', 'img/singlepro/men14.jpg', 'img/singlepro/men15.jpg', 'img/singlepro/men16.jpg'],
                isNew: true,
                collect: 1,
                isRecomment: false,
                scoring: 4,
                visit: 5,
                hot: 5,
                isExclusive: false,
                best: false
            }, {
                id: 5,
                title: '连帽休闲风衣男 2017秋季新款青年时尚拼色短款夹层男装外套',
                price: 219,
                originPrice: 349,
                url: 'img/singlepro/men17.jpg',
                imgUrl: ['img/singlepro/men17.jpg', 'img/singlepro/men18.jpg', 'img/singlepro/men19.jpg', 'img/singlepro/men20.jpg'],
                isNew: true,
                collect: 1,
                isRecomment: false,
                scoring: 4,
                visit: 5,
                hot: 5,
                isExclusive: false,
                best: false
            }],
            women: [{
                id: 6,
                title: '官方旗舰店秋冬女装长袖牛仔夹克 纯棉宽松翻领时尚刺绣外套女',
                price: 239,
                originPrice: 349,
                url: 'img/singlepro/women1.jpg',
                imgUrl: ['img/singlepro/women1.jpg', 'img/singlepro/women2.jpg', 'img/singlepro/women3.jpg', 'img/singlepro/women4.jpg'],
                isNew: false,
                collect: 1,
                isRecomment: false,
                scoring: 4,
                visit: 5,
                hot: 5,
                isExclusive: true,
                best: {
                    timeEnd: '2020/09/01',
                    disCount: '-12%'
                }
            }, {
                id: 7,
                title: '官方旗舰店冬季新款女装轻薄羽绒服女纯色防风外套女士上衣',
                price: 279,
                originPrice: 619,
                url: 'img/singlepro/women5.jpg',
                imgUrl: ['img/singlepro/women5.jpg', 'img/singlepro/women6.jpg', 'img/singlepro/women7.jpg'],
                isNew: false,
                collect: 1,
                isRecomment: false,
                scoring: 4,
                visit: 5,
                hot: 5,
                isExclusive: true,
                best: {
                    timeEnd: '2020/09/01',
                    disCount: '-12%'
                }
            }, {
                id: 8,
                title: '新款冬天衣服女2017女装软妹毛衣女 绑带宽松可爱小清新针织衫',
                price: 149,
                originPrice: 249,
                url: 'img/singlepro/women8.jpg',
                imgUrl: ['img/singlepro/women8.jpg', 'img/singlepro/women9.jpg', 'img/singlepro/women10.jpg', 'img/singlepro/women11.jpg'],
                isNew: false,
                collect: 1,
                isRecomment: false,
                scoring: 4,
                visit: 5,
                hot: 5,
                isExclusive: true,
                best: {
                    timeEnd: '2020/09/01',
                    disCount: '-12%'
                }
            }, {
                id: 9,
                title: '秋装女装长袖风衣女春秋2017新款 休闲宽松连帽撞色女士外套女',
                price: 239,
                originPrice: 369,
                url: 'img/singlepro/women12.jpg',
                imgUrl: ['img/singlepro/women12.jpg', 'img/singlepro/women13.jpg', 'img/singlepro/women14.jpg', 'img/singlepro/women15.jpg'],
                isNew: false,
                collect: 1,
                isRecomment: false,
                scoring: 4,
                visit: 5,
                hot: 5,
                isExclusive: true,
                best: {
                    timeEnd: '2020/09/01',
                    disCount: '-12%'
                }
            }, {
                id: 10,
                title: '秋冬新款2017女装长袖卫衣外套女开衫拉链刺绣连帽宽松上衣',
                price: 179,
                originPrice: 299,
                url: 'img/singlepro/women16.jpg',
                imgUrl: ['img/singlepro/women16.jpg', 'img/singlepro/women17.jpg', 'img/singlepro/women18.jpg', 'img/singlepro/women19.jpg'],
                isNew: false,
                collect: 1,
                isRecomment: false,
                scoring: 4,
                visit: 5,
                hot: 5,
                isExclusive: true,
                best: {
                    timeEnd: '2020/09/01',
                    disCount: '-12%'
                }
            }]
        }
        var cartData = {
            data: []
        }
        var total = 0;
        if (cartData.length) {
            total = cartData.data.reduce(function(acc, val) {
                return acc.price * acc.count + val.price * val.count;
            });
        }
        if (typeof total == 'object') {
            total = total.price * total.count;
        }
        cartData.total = total;
        var news = [];
        var hot = [];
        var visit = [];
        var collect = [];
        var exclusive = [];
        var men = list.men;
        var women = list.women;
        var best = [];

        for (var key in list) {
            list[key].forEach(function(d, i) {
                if (d.isNew) {
                    news.push(d);
                }
                if (d.isExclusive) {
                    exclusive.push(d)
                }
                if (d.best) {
                    best.push(d)
                }
            })
            hot = hot.concat(list[key].sort(compare('hot')));
            visit = visit.concat(list[key].sort(compare('visit')));
            collect = collect.concat(list[key].sort(compare('collect')));
            hot.length = 3;
            visit.length = 3;
            collect.length = 3;
        }
        var newListHtml = template('new_list', { list: news });
        var newContent = $('#new .tab-carousel');

        var menListHtml = template('men_list', { list: men });
        var menContent = $('#men .tab-carousel');

        var womenListHtml = template('women_list', { list: women });
        var womenContent = $('#women .tab-carousel');

        var hotListHtml = template('hot_list', { list: hot });
        var hotContent = $('#hot');

        var visitListHtml = template('visit_list', { list: visit });
        var visitContent = $('#visit');

        var collectListHtml = template('collect_list', { list: collect });
        var collectContent = $('#collect');

        var exclusiveHtml = template('exclusive_list', { list: exclusive });
        var exclusiveContent = $('#exclusive');

        var bestHtml = template('best_list', { list: best });
        var bestContent = $('#best');

        var cartHtml = template('cart_list', { list: cartData });
        var cartContent = $('#cart');

        var defaultOptions = {
            autoPlay: false,
            slideSpeed: 1000,
            pagination: false,
            navigation: true,
            items: 4,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
        }
        var exclusiveOptions = {
            autoPlay: false,
            slideSpeed: 1000,
            pagination: false,
            navigation: true,
            items: 3,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1]
        }
        var bestOptions = {
            autoPlay: true,
            slideSpeed: 1000,
            pagination: false,
            navigation: true,
            items: 1,
            /* transitionStyle : "fade", */
            /* [This code for animation ] */
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
        }
        Promise.all([renderList(newContent, newListHtml, defaultOptions),
            renderList(menContent, menListHtml, defaultOptions),
            renderList(womenContent, womenListHtml, defaultOptions),
            renderList(hotContent, hotListHtml),
            renderList(visitContent, visitListHtml),
            renderList(collectContent, collectListHtml),
            renderList(exclusiveContent, exclusiveHtml, exclusiveOptions),
            renderList(bestContent, bestHtml, bestOptions, true),
            renderList(cartContent, cartHtml)
        ]).then(function() {
            function handleClick(ev) {
                var id = $(this).attr('data-id');
                var detail;
                for (var key in list) {
                    list[key].forEach(function(d, i) {
                        if (d.id == id) {
                            detail = d
                        }
                    });
                }
                if (detail) {
                    var modalHtml = template('modal_list', { list: detail });
                    var modalContent = $('#modal_content');
                    renderList(modalContent, modalHtml);
                    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
                    $(".qtybutton").on("click", function() {
                        var $button = $(this);
                        var oldValue = $button.parent().find("input").val();
                        if ($button.text() == "+") {
                            var newVal = parseFloat(oldValue) + 1;
                        } else {
                            // Don't allow decrementing below zero
                            if (oldValue > 0) {
                                var newVal = parseFloat(oldValue) - 1;
                            } else {
                                newVal = 0;
                            }
                        }
                        $button.parent().find("input").val(newVal);
                    });
                }
                $('.shop-add-cart button').on('click', addCard);
            }
            $('[data-target="#myModal"]').on('click', handleClick);
            $('.add-cart').on('click', addCard);

        })

        function renderList(content, listHtml, options, countdown) {
            new Promise(function(resolve, reject) {
                content.html(listHtml);
                if (options) {
                    content.owlCarousel(options);
                }
                if (countdown) {
                    $('[data-countdown]').each(function() {
                        var $this = $(this),
                            finalDate = $(this).data('countdown');
                        $this.countdown(finalDate, function(event) {
                            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
                        });
                    });
                }
                resolve()
            })
        }

        function compare(name) {
            return function(obj1, obj2) {
                var value1 = obj1[name];
                var value2 = obj2[name];
                if (value1 < value2) {
                    return -1;
                } else if (value1 > value2) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }

        function addCard(ev) {
            var id = $(ev.target).attr('data-id');
            var data;
            var obj = {}
            var hasId;
            var count = $('.cart-plus-minus input').val() ? parseInt($('.cart-plus-minus input').val(), 10) : 1;
            for (var key in list) {
                list[key].forEach(function(d, i) {
                    if (d.id == id) {
                        data = d
                    }
                })
            }
            obj.id = data.id;
            obj.title = data.title;
            obj.url = data.url;
            obj.price = data.price;
            obj.count = count;

            cartData.data.forEach(function(d, i) {
                if (d.id == id) {
                    d.count = d.count + parseInt(count, 10);
                    hasId = true
                }
            })
            if (!hasId) {
                cartData.data.push(obj)
            }
            total = cartData.data.reduce(function(acc, val) {
                if (typeof acc == 'object') {
                    return acc.price * acc.count + val.price * val.count;
                } else if (typeof val == 'object') {
                    return acc + val.price * val.count;
                } else {
                    return acc + val;
                }
            })
            if (typeof total == 'object') {
                total = total.price * total.count;
            }
            cartData.total = total;
            cartHtml = template('cart_list', { list: cartData });
            renderList(cartContent, cartHtml);
            $('.fa-times').on('click', removeCard);
            $('.clearing').on('click',function(){
                $('#total').val('￥' + total);
            });
            layer.msg('添加成功');
        }

        function removeCard(ev) {
            var id = $(ev.target).attr('data-id');
            cartData.data = cartData.data.filter(function(d, i) {
                if (d.id == id) {
                    total = total - d.price * d.count;
                }
                return d.id != id;
            });
            cartData.total = total;
            cartHtml = template('cart_list', { list: cartData });
            renderList(cartContent, cartHtml);
            $('.fa-times').on('click', removeCard);
        }

    }




    $(renderInit);

    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    jQuery('nav#dropdown').meanmenu();

    /*----------------------------
     wow js active
    ------------------------------ */
    new WOW().init();

    /*----------------------------
     owl active
    ------------------------------ */
    $("#owl-demo").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });


    /*----------------------------
        slider
    ------------------------------ */
    $('#mainslider').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 12,
        boxRows: 4,
        animSpeed: 600,
        pauseTime: 5000,
        startSlide: 0,
        controlNav: false,
        controlNavThumbs: false,
        pauseOnHover: false,
        manualAdvance: false,
        prevText: '<i class="fa fa-chevron-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-chevron-right nivo-next-icon"></i>'

    });

    /*------------------------------
     new owl
    ------------------------------ */

    $(".new-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });

    $(".blog-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });

    /*------------------------------
    brand-carousel
    ------------------------------ */
    $(".brand-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 6,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 6],
        itemsDesktopSmall: [980, 5],
        itemsTablet: [768, 4],
        itemsMobile: [479, 3],
    });

    /*------------------------------
    related owl
    ------------------------------ */
    $(".related-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });

    /*----------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*-----------------
    meanmenu 
    -----------------*/
    $('nav#mobile_menu_active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu-area .container',
    });

})(jQuery);
