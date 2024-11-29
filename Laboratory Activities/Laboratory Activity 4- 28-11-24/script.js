document.getElementById("phone-button").addEventListener("click", () => {
	const phoneNumber = "+63-905-296-7570";

	navigator.clipboard.writeText(phoneNumber).then(() => {
		const popup = document.querySelector(".popup");
		popup.classList.add("show");

		setTimeout(() => {
			popup.classList.remove("show");
		}, 2000);
	});
});
