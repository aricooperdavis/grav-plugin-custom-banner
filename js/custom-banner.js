document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementsByClassName('custom-banner-dismiss')[0].style.display != 'none') {
        if (document.cookie.split('; ').find(row => row.startsWith('custom-banner-dismiss'))) {
            document.getElementsByClassName('custom-banner-container')[0].style.display = 'none';
        }
    } else {
        document.cookie = "custom-banner-dismiss=false; max-age=0";
    }
});

function custom_button_dismiss() {
    document.cookie = 'custom-banner-dismiss=true; max-age=1800';
    document.getElementsByClassName('custom-banner-container')[0].style.display = 'none';
}
