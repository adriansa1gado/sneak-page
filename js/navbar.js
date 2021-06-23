const updateNavbarClass = (navbarItem) => {
	for (let i = 0; i < navbarItems.length; i++) {
		navbarItems[i].classList.remove('btn--primary');

		if (navbarItems[i].dataset.area === navbarItem.dataset.area) {
			navbarItems[i].classList.add('btn--primary');
		}
	}
};

const showNavbar = (e) => {
	const navbarList = document.getElementsByClassName('navbar-list')[0];
	navbarList.classList.toggle('navbar-list--active');
};
