$(document).ready(function() {
    $('.companies_items_item_main').click(function() {
        var $item = $(this).closest('.companies_items_item');
        var $content = $item.find('.companies_items_item_content');

        // Останавливаем текущие анимации и очищаем очередь
        $content.stop(true, true);

        if ($item.hasClass('expanded')) {
            $content.hide('fast');
            $item.removeClass('expanded');
        } else {
            $content.show('fast');
            $item.addClass('expanded');
        }
    });

    $('#togglePassword').click(function() {
        var input = $('#passwordInput');
        console.log(132);
        var type = input.attr('type') === 'password' ? 'text' : 'password';
        input.attr('type', type);
    });


    $('.show_options').on('click', function(){
        // $('.show_options').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.main_files_col_cards_lines span').on('click', function(){
        $('.main_files_col_cards_lines span').removeClass('active');
       $(this).addClass('active');
    });

    $('.header_account').on('click', function(){
        $('.header_account_popup').toggleClass('active');
    });

    $('.header_chat').on('click', function(){
        $('body').addClass('chat-open');
    });

    $('.overflow').click(function(event) {
        if (!$(event.target).closest('.header_chat_wrapper_popup').length) {
           $('body').removeClass('chat-open');
        }
    });

    $('.header_chat_wrapper_popup_wrapper_chat_top svg').on('click', function(){
        $(this).parents('.header_chat_wrapper_popup_wrapper_chat').hide();
        $('.header_chat_wrapper_popup_wrapper').show();
    });

    $('.user_item').on('click', function(){
        $(this).parents('.header_chat_wrapper_popup_wrapper').hide();
        $('.header_chat_wrapper_popup_wrapper_chat').show();
    });


    $('.modal_close').on('click', function(){
        $('body').removeClass('modal-active');
        $('.modal').removeClass('show');
    });

    $('.file_deleted_close').on('click', function(){
        $('.file_deleted').removeClass('active');
    });

    $('.delete_file').on('click', function(){
        $('body').removeClass('modal-active');
        $('.modal').removeClass('show');
        $('.file_deleted').addClass('active');
        setTimeout(function(){
            $('.file_deleted').removeClass('active');
        }, 5000);
    });

    $('.modal_btn').on('click', function(){
        $('body').addClass('modal-active');
        $(`.modal#${$(this).data('modal')}`).addClass('show');
    })


    $('.companies_storages_item_second_spaces_filemanager ul > li > div').not('.show_options').on('mouseleave', function() {
        if (!$(this).find('.show_options').is(':hover')) {
            $(this).find('.show_options').removeClass('active');
        }
    });

    $('.companies_storages_item_second_spaces_filemanager ul > li > div.show_options').on('mouseenter', function() {
        $(this).addClass('active');
    });

    $('.companies_storages_item_second_spaces_filemanager ul > li > div.show_options').on('mouseleave', function() {
        $(this).removeClass('active');
    });

   

    $('.progress-container').each(function() {
        var $this = $(this);
        var percent = $this.data('progress');
        setProgress($this, percent);
    });


});


function setProgress($container, percent) {
    var $circle = $container.find('.progress-ring__circle');
    var radius = $circle.attr('r');
    var circumference = 2 * Math.PI * radius;

    $circle.css('stroke-dasharray', `${circumference} ${circumference}`);
    $circle.css('stroke-dashoffset', circumference);

    var offset = circumference - (percent / 100 * circumference);
    $circle.css('stroke-dashoffset', offset);

    $container.find('.progress-text').text(`${percent}%`);
}
