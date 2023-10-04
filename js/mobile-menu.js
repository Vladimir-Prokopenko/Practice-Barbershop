(() => {
	const refs = {
		openMenuBtn: document.querySelectorAll("[data-menu-open]"),
		closeMenuBtn: document.querySelector("[data-menu-close]"),
		menu: document.querySelector("[data-menu]"),
		menuList: document.querySelector("[data-list]"),
	};

	for (let button of refs.openMenuBtn) {
		button.addEventListener("click", toggleMenu);
	}

	refs.closeMenuBtn.addEventListener("click", toggleMenu);
	refs.menuList.addEventListener("click", removeMenu);

	function toggleMenu() {
		document.body.classList.toggle("menu-open");
		refs.menu.classList.toggle("is-hidden");
	}

	function removeMenu() {
		refs.menu.classList.add("is-hidden");
		document.body.classList.remove("menu-open");
	}
})();

(() => {
	document.querySelector(".js-speaker-form").addEventListener("submit", e => {
		e.preventDefault();

		new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));

		e.currentTarget.reset();
	});
})();
