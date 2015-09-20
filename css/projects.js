                
//script to scroll to top of a page
// second number determines time took to move up
                $(document).ready(function () {
                    $('a[href=#top]').click(function () {
                        $('html, body').animate({scrollTop: 0}, 1800);
                        return false;
                    });
                })

