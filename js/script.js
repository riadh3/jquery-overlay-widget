$(document).ready(function(){

    // the main function; click trigger
    $('.overl-click').on('click',function(e){
        e.preventDefault()
        let overlay_id = $(this).data('click-item')

        showOverlay(overlay_id)
    })

// close the overlay
    $('.close-over').on('click', function(){
        closeOverlay()
    })

    function showOverlay(overl_id){
        $('.overl-veil').fadeTo('500', 0.7, function(){
            let elemntToDispaly= $(`.overlay-container[data-overlay = ${overl_id}]`)
            
            elemntToDispaly.fadeIn('300')
            elemntToDispaly.addClass('active')
        })
    }


    function closeOverlay(){
        $('.overl-veil').fadeOut();
        $(`.overlay-container`).fadeOut('300',function(){
            $(this).removeClass('active')
        } )
    }   
})