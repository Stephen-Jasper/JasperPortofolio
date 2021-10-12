$(document).ready(function() {
    let images = $('.list-kor img');
    let counter = $('#counter')
    let index = 0;
    counter.html(index);
    images.hide();
    // for(i=index; i<=index.length; i++){
    //   images.eq(i).show();
    //   i++;
    // }
    images.eq(index).show()
    images.eq(index+1).show()
    images.eq(index+2).show()
    images.eq(index+3).show()
    images.eq(index+4).show()
    
    $('#prev').click(function() {
        images.eq(index).animate({
            left : '-100px',
            opacity: 0
        }, function(){
            images.eq(index).hide();
            if(index == 0)
                index = images.length - 1;
            else
                index -= 1; 
            counter.html(index);
  
            images.eq(index).show()
            images.eq(index+1).show()
            images.eq(index+2).show()
            images.eq(index+3).show()
            images.eq(index+4).show()
            images.eq(index).css('left', '100px');
            images.eq(index).css('opacity', '0');
            images.eq(index).animate({
                left: '0px',
                opacity: 1
            })
        })
    });
  
    $('#next').click(function() {
        images.eq(index).animate({
            left : '100px',
            opacity: 0
        }, function(){
            images.eq(index).hide();
            if(index == images.length - 1)
                index = 0;
            else
                index += 1; 
            counter.html(index);
  
            images.eq(index).show()
            images.eq(index-1).show()
            images.eq(index-2).show()
            images.eq(index-3).show()
            images.eq(index-4).show()
            images.eq(index).css('left', '-100px');
            images.eq(index).css('opacity', '0');
            images.eq(index).animate({
                left: '0px',
                opacity: 1
            })
        })
    })
  
    // setInterval(function(){
    //     images.eq(index).animate({
    //         left : '-100px',
    //         opacity: 0
    //     }, function(){
    //         images.eq(index).hide();
    //         if(index == 0)
    //             index = images.length - 1;
    //         else
    //             index -= 1; 
    //         counter.html(index);
  
    //         images.eq(index).show()
    //         images.eq(index).css('left', '100px');
    //         images.eq(index).css('opacity', '0');
    //         images.eq(index).animate({
    //             left: '0px',
    //             opacity: 1
    //         })
    //     })
    // }, 4000)
  });