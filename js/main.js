function sizeText(cl) {
     $( cl ).each(function ( i, box ) {

        var width = $( box ).width(),
            height = $( box ).height(),
            html = '<span style="white-space:nowrap">',
            line = $( box ).wrapInner( html ).children()[ 0 ],
            n = 100;

        $( box ).css( 'font-size', n );

        while ( $( line ).width() > width  && $( line ).height() > height ) {
            $( box ).css( 'font-size', --n );
        }

        $( box ).text( $( line ).text() );

    });   
    
}

function resizeAll() {
    sizeText(".title-block");
//    sizeText(".nav-item");
}



$("document").ready(function() {


});
