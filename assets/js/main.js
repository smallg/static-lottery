/* global $ _ */
$(document).ready(function () {
    var items = $('.item');

    // add top-left corner
    _.forEach(items, function (item, index) {
        $('<label>' + (index + 1) + '</label>').appendTo(item);
    });

    var posArr = [];
    _.forEach(items, function (item) {
        posArr.push({
            left: item.offsetLeft,
            top: item.offsetTop
        });
    });

    _.forEach(items, function (item, index) {
        item.style.position = 'absolute';
        item.style.left = posArr[index].left + 'px';
        item.style.top = posArr[index].top + 'px';
        item.style.margin = 0;
    });


    var i = 0;
    $('#btn').click(function () {
        // if (i === 0) {
        //     activeItem(items[i]);
        // } else {
        //     inactiveItem(items[i - 1]);
        //     activeItem(items[i])
        // }
        // i++;
        _.forEach(items, function (item, index) {
            if (index === 0) {
                console.log(0,index)
                activeItem(item);
            } else if (index === items.length) {
                var that = this;
                console.log('last',index)
                $(item).addClass("active").delay(1000).queue(function(next){
                    $(item).removeClass("active");
                    next();
                });
            } else {
                inactiveItem(items[index - 1]);
                activeItem(item)
            }
            // $(item).addClass('active')
            // sleep(3000)
        })
        // _.forEach(items, function (item, index) {
        //     setTimeout((function (items, item, index) {
        //         return function () {
        //
        //             if(index>3){
        //                 return;
        //             }
        //             console.log(index)
        //             if (index === 0) {
        //                 activeItem(item);
        //             } else {
        //                 inactiveItem(items[index - 1]);
        //                 activeItem(item)
        //             }
        //         }
        //     })(items, item, index), 3000);
        //
        // });
    });

    function sleep(numberMillis) {
        var now = new Date();
        var exitTime = now.getTime() + numberMillis;
        while (true) {
            now = new Date();
            if (now.getTime() > exitTime)
                return;
        }
    }

    function activeItem(item) {
        $(item).delay(500).addClass('active');
    }

    function inactiveItem(item) {
        $(item).delay(500).removeClass('active');
    }

});
