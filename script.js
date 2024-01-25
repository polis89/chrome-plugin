console.log('out function');
(() => {
	console.log('in function');
	
	const article = document.querySelector("#content-main");
	console.log('article', article);

	if (article) {
		const text = article.textContent;
		console.log('article text', text.replace(/\n/g, "").replace(/ +(?= )/g,''));

		const sidebar = document.createElement("div");
		sidebar.classList.add("storypact-plugin-sidebar");
		sidebar.textContent = text.replace(/\n/g, "").replace(/ +(?= )/g,'');
		document.querySelector("body").append(sidebar);
	}
})()
