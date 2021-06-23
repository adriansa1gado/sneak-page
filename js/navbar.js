const updateNavbarClass = (navbarItem) => {
	for (let i = 0; i < navbarItems.length; i++) {
		navbarItems[i].classList.remove('btn--primary');
	}
	navbarItem.classList.add('btn--primary');
};
