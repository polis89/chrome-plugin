
(async () => {
	const article = document.querySelector("article, #content-main");
	console.log('article', article);

	if (article) {
		const text = article.textContent.replace(/\n/g, "").replace(/ +(?= )/g,'');

		const sidebar = document.createElement("div");
		sidebar.classList.add("storypact-plugin-sidebar");
		const header = document.createElement("h2");
		header.classList.add("storypact-plugin-header");
		header.textContent = "Storypact";
		sidebar.append(header);
		const content = document.createElement("div");
		content.classList.add("storypact-plugin-content");
		sidebar.append(content);

		document.querySelector("body").append(sidebar);

		const url = "";

		const data = {
			text: "test text tes test trump",
			mode: "news",
			time: "month",
			sources: "news_us",
			language: "en"
		}

		try {
			const response = await fetch(url, {
			  method: "POST", // or 'PUT'
			  headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			  },
			  body: new URLSearchParams(data).toString(),
			});
		
			const result = await response.text();
			console.log("Success:", result);
		  } catch (error) {
			console.error("Error:", error);
		  }
		// fetch(url, {
		// 	method: "POST", // *GET, POST, PUT, DELETE, etc.
		// 	mode: "no-cors", // no-cors, *cors, same-origin
		// 	headers: {
		// 	// "Content-Type": "application/json",
		// 		'Content-Type': 'application/x-www-form-urlencoded',
		// 	},
		// 	body: new URLSearchParams(data).toString(), // body data type must match "Content-Type" header
		// }).then(response => {
		// 	console.log('response', response);
			
		// 	if (!response.ok) {
		// 	  throw new Error(`HTTP error! Status: ${response.status}`);
		// 	}
		// 	return response.json()
		// }).then(json => {
		// 	console.log('json', json);
			
		// }).catch(error => {
		//   console.error('Error:', error);
		// });
	}
})()
