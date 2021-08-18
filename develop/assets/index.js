document.addEventListener('DOMContentLoaded', () => {
	//$('.navMob').hide();//?
     $('.mob').on('click', function(){
       $('.navMob').slideToggle();
       $('body').toggleClass('vh');
      });
     $('.navMob__close').on('click', function(){
      $('.navMob').slideToggle();
      $('body').toggleClass('vh');
      });
  /////////////////mob nav///////////////////////////////

	//$('#CartDrawer').hide();//?
     $('.cart').on('click', function(){
       $('html').toggleClass('vis');
      $('body').toggleClass('overlay');
       $('#CartDrawer').toggleClass('active');
      });
     $('.drawer__close').on('click', function(){
       $('html').toggleClass('vis');
      $('body').toggleClass('overlay');
       $('#CartDrawer').toggleClass('active');
      });
////////////////////////////////////////////////
$('.select').each(function() {
      const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

 const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                    class: 'new-select__item',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
   selectHead.on('click', function() {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    $(_this.wrap()).trigger("change");
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });

});
//////////////////////////////////////////////////////////////////////
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true
});
/////////////////////////////////
$('.ajaxcart__qtyBtn_minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.ajaxcart__qtyBtn_plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});
}); // end DOMContentLoaded