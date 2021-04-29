function custom_button_dismiss() {
    document.cookie = 'custom-banner-dismiss=true; max-age=1800;';
    document.getElementsByClassName('custom-banner-container')[0].style.display = 'none';
}
