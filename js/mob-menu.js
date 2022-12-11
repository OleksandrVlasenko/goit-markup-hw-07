(() => {
	const refs = {
		openMobMenuBtn: document.querySelector("[mob-menu-open]"),
		closeMobMenuBtn: document.querySelector("[mob-menu-close]"),
		mobMenu: document.querySelector("[mob-menu]"),
	};

	refs.openMobMenuBtn.addEventListener("click", toggleMobMenu);
	refs.closeMobMenuBtn.addEventListener("click", toggleMobMenu);

	function toggleMobMenu() {
		refs.mobMenu.classList.toggle("mob-menu--is-hidden");
	}
})();