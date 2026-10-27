function custom_banner_set_dismiss_cookie() {
    const banner = document.getElementsByClassName('custom-banner-container')[0];
    const maxAge = banner && banner.dataset.dismissCookieMaxAge;
    document.cookie = 'custom-banner-dismiss=true; max-age=' + maxAge + '; SameSite=Strict';
}

function custom_button_dismiss() {
    custom_banner_set_dismiss_cookie();
    document.getElementsByClassName('custom-banner-container')[0].classList.remove('shown');
}

function custom_button_show() {
    document.getElementsByClassName('custom-banner-container')[0].classList.add('shown');
}

let hidden = document.cookie
.split('; ')
.find(row => row.startsWith('custom-banner-dismiss='));

document.addEventListener('DOMContentLoaded', (event) => {
	if (!hidden) {
		try {
			custom_button_show();
		} catch (error) {
			if (!error instanceof TypeError) {
				throw error;
			}
		}
	}
});
