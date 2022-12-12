// (() => {
// 	const refs = {
// 		openModalBtn: document.querySelector("[data-modal-open]"),
// 		closeModalBtn: document.querySelector("[data-modal-close]"),
// 		modal: document.querySelector("[data-modal]"),
// 	};

// 	refs.openModalBtn.addEventListener("click", toggleModal);
// 	refs.closeModalBtn.addEventListener("click", toggleModal);

// 	function toggleModal() {
// 		refs.modal.classList.toggle("backdrop--is-hidden");
// 	}
// })();

(() => {
	const modal = document.querySelector(".data-modal");
	const openModalBtn = document.querySelector(".data-modal-open");
	const closeModalBtn = document.querySelector(".data-modal-close");

	const toggleMenu = () => {
		const isMenuOpen =
			openModalBtn.getAttribute("aria-expanded") === "true" || false;
		openModalBtn.setAttribute("aria-expanded", !isMenuOpen);
		modal.classList.toggle("backdrop--is-hidden");

		const scrollLockMethod = !isMenuOpen
			? "disableBodyScroll"
			: "enableBodyScroll";
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openModalBtn.addEventListener("click", toggleMenu);
	closeModalBtn.addEventListener("click", toggleMenu);

	// Close the mobile menu on wider screens if the device orientation changes
	window.addEventListener("change", e => {
		if (!e.matches) return;
		modal.classList.remove("backdrop--is-hidden");
		openModalBtn.setAttribute("aria-expanded", false);
		bodyScrollLock.enableBodyScroll(document.body);
	});
})();

