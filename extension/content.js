let productName = document.querySelector("#title").innerText;

let apiUrl = "http://amazon-price-compare.herokuapp.com/items/";

(async function (url, search) {
	let urlSearch = encodeURIComponent(search);
	const response = await (await fetch(url + urlSearch)).json();

	let moreItems = true;

	for (i = 0; moreItems === true; i++) {
		const curItem = response["item" + i];
		if (
			curItem.price == false ||
			curItem.manufacturer == false ||
			curItem.link == false
		) {
			break;
		}

		const priceTable = document.querySelector("#price > table > tbody");
		const newRow = document.createElement("tr");
		const newItem1 = document.createElement("td");
		if (i === 0) {
			const newItem1Text = document.createTextNode("OR:");
			newItem1.className =
				"a-color-secondary a-size-base a-text-right a-nowrap";
			newItem1.appendChild(newItem1Text);
		}
		const newItem2 = document.createElement("td");
		const newItem2Text = document.createTextNode(`${curItem.price} at `);
		const newItem2Link = document.createElement("a");
		const newItem2LinkText = document.createTextNode(
			`${curItem.manufacturer}`
		);

		newItem2.className = "a-span12 a-color-secondary a-size-base";

		newItem2Link.href = curItem.link;
		newItem2Link.target = "blank";

		newItem2Link.appendChild(newItem2LinkText);
		newItem2.appendChild(newItem2Text);
		newItem2.appendChild(newItem2Link);
		newRow.appendChild(newItem1);
		newRow.appendChild(newItem2);
		priceTable.appendChild(newRow);

		if (!response["item" + (i + 1)]) {
			moreItems = false;
		}
	}
})(apiUrl, productName);
