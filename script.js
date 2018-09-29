var t1 = new TimelineMax();


t1.from('#e_background', 0.5, {
    scaleY:0, transformOrigin:"top", ease: Power1.easeOut, delay:0.5})
    .from('#e_letter', 0.5, {scaleY:0, transformOrigin:"center", ease: SlowMo.easeOut})
    .from('#p_background', 0.5, {scaleY:0, transformOrigin:"left", ease: Power1.easeOut})
    .from('#p_letter',0.6, {scaleY: 0, transformOrigin:"center", ease:Circ.easeOut})
    .from('#k_background', 0.5, {scaleY:0, transformOrigin:"left", ease: Power1.easeOut})
    .from('#k_letter',0.6, {scaleY: 0, transformOrigin:"center", ease:Circ.easeOut})

$('#icons').click(function(){
  
    TweenMax.to('#e_background', 0.1, {x:"+=20", yoyo:true, repeat:5})
    TweenMax.to('#e_background', 0.1, {x:"-=20", yoyo:true, repeat:5})
    TweenMax.to('#e_letter', 0.1, {x:"+=20", yoyo:true, repeat:5})
    TweenMax.to('#e_letter', 0.1, {x:"-=20", yoyo:true, repeat:5})
    TweenMax.to('#p_background', 0.1, {x:"+=20", yoyo:true, repeat:5})
    TweenMax.to('#p_background', 0.1, {x:"-=20", yoyo:true, repeat:5})
    TweenMax.to('#p_letter', 0.1, {x:"+=20", yoyo:true, repeat:5})
    TweenMax.to('#p_letter', 0.1, {x:"-=20", yoyo:true, repeat:5})
    TweenMax.to('#k_background', 0.1, {x:"+=20", yoyo:true, repeat:5})
    TweenMax.to('#k_background', 0.1, {x:"-=20", yoyo:true, repeat:5})
    TweenMax.to('#k_letter', 0.1, {x:"+=20", yoyo:true, repeat:5})
    TweenMax.to('#k_letter', 0.1, {x:"-=20", yoyo:true, repeat:5})
})