let pwaBtn = document.querySelector(".app-install-btn");

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
	e.preventDefault();
	deferredPrompt = e;
	pwaBtn.style.display = "block";
});

pwaBtn.addEventListener("click", async () => {
	if (!deferredPrompt) return;
	deferredPrompt.prompt();
	const { outcome } = await deferredPrompt.userChoice;
	console.log(`User response to PWA install: ${outcome}`);
	deferredPrompt = null;
	pwaBtn.style.display = "none";
});

window.addEventListener("appinstalled", () => {
	console.log("PWA installed successfully!");
	pwaBtn.style.display = "none";
});
