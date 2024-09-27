import $ from "jquery";
import 'jquery-modal';

$(document).ready(function() {
    const allButtons = document.querySelectorAll('[data-modal]');

    allButtons?.forEach((item) => {
        item?.addEventListener('click', () => {
            const modalId = $(item).data('modal')
            
            $(modalId).modal();
            //$("[rel]=modal:close").hide();
            $(".close-modal").hide();
            $(document).scrollTop(0);
            
            $(modalId).find('.close__btn').on('click', () => {
                $.modal.close()
                $('#app').css('filter', "blur(0px)")
            })
            
            $('#app').css('filter', "blur(20px)")
        })
    })

    $('.dismiss, .overlay').on('click', function() {
        $('.sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });
    $('.sidebar-header .search').on('click', function(e) {
        $('.search-container').toggleClass('hidden')
    });
 
    $('.header-menu__line').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.overlay').addClass('active');
        // close opened sub-menus
        $('.collapse.show').toggleClass('show');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
     
   
});
