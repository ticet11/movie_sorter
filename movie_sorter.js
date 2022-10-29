const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.DOMParser = new JSDOM().window.DOMParser;

// Convert string to HTML element
const HTML_MAKER = (html_string) => {
	const parser = new DOMParser();
	const html_obj = parser.parseFromString(html_string, "text/html");
	const ul_element = html_obj.body.firstChild;
	return ul_element;
};

// Retrieve and return price, as a number, for each item
const GET_PRICE = (item) => {
	const content = item.querySelector("span[data-hook='product-item-price-to-pay']")
		? item.querySelector("span[data-hook='product-item-price-to-pay']").textContent
		: "$0";
	return Number(content.replace("$", ""));
};

// Clear collection
const REMOVE_CHILDREN = (collection) => {
	while (collection.firstChild) {
		collection.removeChild(collection.lastChild);
	}
};

// Add array items to HTML Collection
const ARRAY_TO_COLLECTION = (items_array, collection) => {
	while (items_array[0]) {
		collection.appendChild(items_array.pop());
	}
};

// Sort the array by price, obviously
const SORT_BY_PRICE = (items_array, collection) => {
	console.log("pre-sort");
	items_array.forEach((item) => {
		if (item.querySelector("span[data-hook='product-item-price-to-pay']"))
			console.log(
				item.querySelector("span[data-hook='product-item-price-to-pay']").textContent
			);
		else console.log("priceless");
	});

	items_array.sort((a, b) => {
		a_amount = GET_PRICE(a);
		b_amount = GET_PRICE(b);

		return a_amount - b_amount;
	});

	console.log("\r\npost-sort");
	items_array.forEach((item) => {
		if (item.querySelector("span[data-hook='product-item-price-to-pay']"))
			console.log(
				item.querySelector("span[data-hook='product-item-price-to-pay']").textContent
			);
		else console.log("priceless");
	});

	REMOVE_CHILDREN(collection);

	ARRAY_TO_COLLECTION(items_array, collection);
};

const movies_list = `<ul class="S4WbK_ c2Zj9x" data-hook="product-list-wrapper" data-grid-type="1">
	<li data-hook="product-list-grid-item">
		<div
			role="group"
			aria-label="Superman: The Complete Animated Series gallery"
			data-hook="product-item-root"
			class="ETPbIy nvdiI6"
		>
			<a
				href="https://www.movies.fake/product-page/superman-the-complete-animated-series"
				tabindex="-1"
				class="oQUvqL x5qIv3"
				data-hook="product-item-container"
			>
				<div
					class="mS0yET heightByImageRatio heightByImageRatio3"
					aria-live="assertive"
					data-hook="ProductMediaDataHook.Images"
				>
					<div class="naMHY_ vALCqq" data-hook="ImageUiTpaWrapperDataHook.Wrapper_0">
						<div
							data-source-width="168"
							data-source-height="238"
							data-resize="contain"
							data-use-lqip="true"
							data-is-seo-bot="false"
							class="sG9Te8u oDEteSw---resize-7-contain oDEteSw--fluid oDEteSw--forceImageContain oDEteSw--verticalContainer s__65YAB3 v_lwe5"
							data-hook="ImageUiTpaWrapperDataHook.Media_0"
							style="--wut-source-width: 168px; --wut-source-height: 238px"
						>
							<wow-image
								class="zTx3Xx s__86kRdh"
								data-image-info='{"displayMode":"fit","isLQIP":true,"isSEOBot":false,"lqipTransition":null,"imageData":{"width":168,"height":238,"uri":"c835e5_5c3fba5bf8d34c2d9fafaf552dc71e62~mv2.jpg","name":"c835e5_5c3fba5bf8d34c2d9fafaf552dc71e62~mv2.jpg","displayMode":"fit"}}'
								data-bg-effect-name=""
								data-has-ssr-src=""
								data-src="https://static.mediastatic.fake/media/c835e5_5c3fba5bf8d34c2d9fafaf552dc71e62~mv2.jpg/v1/fill/w_176,h_250,al_c,lg_1,q_80,enc_auto/c835e5_5c3fba5bf8d34c2d9fafaf552dc71e62~mv2.jpg"
							>
								<img
									src="https://static.mediastatic.fake/media/c835e5_5c3fba5bf8d34c2d9fafaf552dc71e62~mv2.jpg/v1/fill/w_176,h_250,al_c,lg_1,q_80,enc_auto/c835e5_5c3fba5bf8d34c2d9fafaf552dc71e62~mv2.jpg"
									alt="Superman: The Complete Animated Series"
									style="
										width: 168px;
										height: 238px;
										object-fit: contain;
										object-position: center center;
									"
								/>
							</wow-image>
						</div>
					</div>
					<button
						class="TUWFt6"
						data-hook="product-item-quick-view-button"
						tabindex="-1"
						aria-hidden="true"
					>
						Quick View
					</button>
				</div>
			</a>
			<div data-hook="not-image-container" class="CZ0KIs">
				<a
					href="https://www.movies.fake/product-page/superman-the-complete-animated-series"
					class="JPDEZd"
					data-hook="product-item-product-details-link"
				>
					<div class="t2u_rw VVhXIF" data-hook="product-item-product-details">
						<h3
							class="sIXv5GE og388JK---typography-11-runningText og388JK---priority-7-primary syHtuvM FzO_a9"
							aria-hidden="false"
							data-hook="product-item-name"
						>
							Superman: The Complete Animated Series
						</h3>
						<div class="UqnnNN">
							<span class="ruX1QG" data-hook="sr-product-item-price-to-pay"
								>Price</span
							>
							<span data-hook="product-item-price-to-pay" class="cfpn1d">$27.99</span>
						</div>
					</div>
				</a>
			</div>
		</div>
	</li>
	<li data-hook="product-list-grid-item">
		<div
			role="group"
			aria-label="The James Bond Collection (VUDU HDX) gallery"
			data-hook="product-item-root"
			class="ETPbIy nvdiI6"
		>
			<a
				href="https://www.movies.fake/product-page/the-james-bond-collection-vudu-hdx"
				tabindex="-1"
				class="oQUvqL x5qIv3"
				data-hook="product-item-container"
			>
				<div
					class="mS0yET heightByImageRatio heightByImageRatio3"
					aria-live="assertive"
					data-hook="ProductMediaDataHook.Images"
				>
					<div class="naMHY_ vALCqq" data-hook="ImageUiTpaWrapperDataHook.Wrapper_0">
						<div
							data-source-width="310"
							data-source-height="465"
							data-resize="contain"
							data-use-lqip="true"
							data-is-seo-bot="false"
							class="sG9Te8u oDEteSw---resize-7-contain oDEteSw--fluid oDEteSw--forceImageContain oDEteSw--verticalContainer s__65YAB3 v_lwe5"
							data-hook="ImageUiTpaWrapperDataHook.Media_0"
							style="--wut-source-width: 310px; --wut-source-height: 465px"
						>
							<wow-image
								class="zTx3Xx s__86kRdh"
								data-image-info='{"displayMode":"fit","isLQIP":true,"isSEOBot":false,"lqipTransition":null,"imageData":{"width":310,"height":465,"uri":"c835e5_4916770151ca4d849b032044e6448e18~mv2.jpg","name":"c835e5_4916770151ca4d849b032044e6448e18~mv2.jpg","displayMode":"fit"}}'
								data-bg-effect-name=""
								data-has-ssr-src=""
								data-src="https://static.mediastatic.fake/media/c835e5_4916770151ca4d849b032044e6448e18~mv2.jpg/v1/fill/w_210,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c835e5_4916770151ca4d849b032044e6448e18~mv2.jpg"
							>
								<img
									src="https://static.mediastatic.fake/media/c835e5_4916770151ca4d849b032044e6448e18~mv2.jpg/v1/fill/w_210,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c835e5_4916770151ca4d849b032044e6448e18~mv2.jpg"
									alt="The James Bond Collection (VUDU HDX)"
									style="
										width: 225px;
										height: 300px;
										object-fit: contain;
										object-position: center center;
									"
								/>
							</wow-image>
						</div>
					</div>
					<button
						class="TUWFt6"
						data-hook="product-item-quick-view-button"
						tabindex="-1"
						aria-hidden="true"
					>
						Quick View
					</button>
				</div>
			</a>
			<div data-hook="not-image-container" class="CZ0KIs">
				<a
					href="https://www.movies.fake/product-page/the-james-bond-collection-vudu-hdx"
					class="JPDEZd"
					data-hook="product-item-product-details-link"
				>
					<div class="t2u_rw VVhXIF" data-hook="product-item-product-details">
						<h3
							class="sIXv5GE og388JK---typography-11-runningText og388JK---priority-7-primary syHtuvM FzO_a9"
							aria-hidden="false"
							data-hook="product-item-name"
						>
							The James Bond Collection (VUDU HDX)
						</h3>
						<div class="UqnnNN">
							<span class="ruX1QG" data-hook="sr-product-item-price-to-pay"
								>Price</span
							>
							<span data-hook="product-item-price-to-pay" class="cfpn1d">$59.99</span>
						</div>
					</div>
				</a>
			</div>
		</div>
	</li>
	<li data-hook="product-list-grid-item">
		<div
			role="group"
			aria-label="The Bourne Ultimate Collection (Movies Anywhere 4K) gallery"
			data-hook="product-item-root"
			class="ETPbIy nvdiI6"
		>
			<a
				href="https://www.movies.fake/product-page/the-bourne-ultimate-collection-movies-anywhere-4k-2"
				tabindex="-1"
				class="oQUvqL x5qIv3"
				data-hook="product-item-container"
			>
				<div
					class="mS0yET heightByImageRatio heightByImageRatio3"
					aria-live="assertive"
					data-hook="ProductMediaDataHook.Images"
				>
					<div class="naMHY_ vALCqq" data-hook="ImageUiTpaWrapperDataHook.Wrapper_0">
						<div
							data-source-width="669"
							data-source-height="900"
							data-resize="contain"
							data-use-lqip="true"
							data-is-seo-bot="false"
							class="sG9Te8u oDEteSw---resize-7-contain oDEteSw--fluid oDEteSw--forceImageContain oDEteSw--verticalContainer s__65YAB3 v_lwe5"
							data-hook="ImageUiTpaWrapperDataHook.Media_0"
							style="--wut-source-width: 669px; --wut-source-height: 900px"
						>
							<wow-image
								class="zTx3Xx s__86kRdh"
								data-image-info='{"displayMode":"fit","isLQIP":true,"isSEOBot":false,"lqipTransition":null,"imageData":{"width":669,"height":900,"uri":"c835e5_d5070b5fa3d04948855145d01fc5dc39~mv2.jpg","name":"c835e5_d5070b5fa3d04948855145d01fc5dc39~mv2.jpg","displayMode":"fit"}}'
								data-bg-effect-name=""
								data-has-ssr-src=""
								data-src="https://static.mediastatic.fake/media/c835e5_d5070b5fa3d04948855145d01fc5dc39~mv2.jpg/v1/fill/w_234,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c835e5_d5070b5fa3d04948855145d01fc5dc39~mv2.jpg"
							>
								<img
									src="https://static.mediastatic.fake/media/c835e5_d5070b5fa3d04948855145d01fc5dc39~mv2.jpg/v1/fill/w_234,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c835e5_d5070b5fa3d04948855145d01fc5dc39~mv2.jpg"
									alt="The Bourne Ultimate Collection (Movies Anywhere 4K)"
									style="
										width: 225px;
										height: 300px;
										object-fit: contain;
										object-position: center center;
									"
								/>
							</wow-image>
						</div>
					</div>
					<button
						class="TUWFt6"
						data-hook="product-item-quick-view-button"
						tabindex="-1"
						aria-hidden="true"
					>
						Quick View
					</button>
				</div>
			</a>
			<div data-hook="not-image-container" class="CZ0KIs">
				<a
					href="https://www.movies.fake/product-page/the-bourne-ultimate-collection-movies-anywhere-4k-2"
					class="JPDEZd"
					data-hook="product-item-product-details-link"
				>
					<div class="t2u_rw VVhXIF" data-hook="product-item-product-details">
						<h3
							class="sIXv5GE og388JK---typography-11-runningText og388JK---priority-7-primary syHtuvM FzO_a9"
							aria-hidden="false"
							data-hook="product-item-name"
						>
							The Bourne Ultimate Collection (Movies Anywhere 4K)
						</h3>
						<div class="UqnnNN">
							<span class="ruX1QG" data-hook="sr-product-item-price-to-pay"
								>Price</span
							>
							<span data-hook="product-item-price-to-pay" class="cfpn1d">$24.99</span>
						</div>
					</div>
				</a>
			</div>
		</div>
	</li>
	<li data-hook="product-list-grid-item">
		<div
			role="group"
			aria-label="The Hobbit Trilogy Theatrical + Extended (Movies Anywhere 4K) gallery"
			data-hook="product-item-root"
			class="ETPbIy nvdiI6"
		>
			<a
				href="https://www.movies.fake/product-page/the-hobbit-trilogy-theatrical-extended-movies-anywhere-4k"
				tabindex="-1"
				class="oQUvqL x5qIv3"
				data-hook="product-item-container"
			>
				<div
					class="mS0yET heightByImageRatio heightByImageRatio3"
					aria-live="assertive"
					data-hook="ProductMediaDataHook.Images"
				>
					<div class="naMHY_ vALCqq" data-hook="ImageUiTpaWrapperDataHook.Wrapper_0">
						<div
							data-source-width="2000"
							data-source-height="3000"
							data-resize="contain"
							data-use-lqip="true"
							data-is-seo-bot="false"
							class="sG9Te8u oDEteSw---resize-7-contain oDEteSw--fluid oDEteSw--forceImageContain oDEteSw--verticalContainer s__65YAB3 v_lwe5"
							data-hook="ImageUiTpaWrapperDataHook.Media_0"
							style="--wut-source-width: 2000px; --wut-source-height: 3000px"
						>
							<wow-image
								class="zTx3Xx s__86kRdh"
								data-image-info='{"displayMode":"fit","isLQIP":true,"isSEOBot":false,"lqipTransition":null,"imageData":{"width":2000,"height":3000,"uri":"c835e5_12cd81caaa7d4a95aaa15a7bebd08a9b~mv2.jpg","name":"c835e5_12cd81caaa7d4a95aaa15a7bebd08a9b~mv2.jpg","displayMode":"fit"}}'
								data-bg-effect-name=""
								data-has-ssr-src=""
								data-src="https://static.mediastatic.fake/media/c835e5_12cd81caaa7d4a95aaa15a7bebd08a9b~mv2.jpg/v1/fill/w_210,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c835e5_12cd81caaa7d4a95aaa15a7bebd08a9b~mv2.jpg"
							>
								<img
									src="https://static.mediastatic.fake/media/c835e5_12cd81caaa7d4a95aaa15a7bebd08a9b~mv2.jpg/v1/fill/w_210,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c835e5_12cd81caaa7d4a95aaa15a7bebd08a9b~mv2.jpg"
									alt="The Hobbit Trilogy Theatrical + Extended (Movies Anywhere 4K)"
									style="
										width: 225px;
										height: 300px;
										object-fit: contain;
										object-position: center center;
									"
								/>
							</wow-image>
						</div>
					</div>
					<button
						class="TUWFt6"
						data-hook="product-item-quick-view-button"
						tabindex="-1"
						aria-hidden="true"
					>
						Quick View
					</button>
				</div>
			</a>
			<div data-hook="not-image-container" class="CZ0KIs">
				<a
					href="https://www.movies.fake/product-page/the-hobbit-trilogy-theatrical-extended-movies-anywhere-4k"
					class="JPDEZd"
					data-hook="product-item-product-details-link"
				>
					<div class="t2u_rw VVhXIF" data-hook="product-item-product-details">
						<h3
							class="sIXv5GE og388JK---typography-11-runningText og388JK---priority-7-primary syHtuvM FzO_a9"
							aria-hidden="false"
							data-hook="product-item-name"
						>
							The Hobbit Trilogy Theatrical + Extended (Movies Anywhere 4K)
						</h3>
						<div class="UqnnNN">
							<span class="ruX1QG" data-hook="sr-product-item-price-to-pay"
								>Price</span
							>
							<span data-hook="product-item-price-to-pay" class="cfpn1d">$22.99</span>
						</div>
					</div>
				</a>
			</div>
		</div>
	</li>
	<li data-hook="product-list-grid-item">
		<div
			role="group"
			aria-label="Batman Beyond: The Complete Series (VUDU HDX) gallery"
			data-hook="product-item-root"
			class="ETPbIy nvdiI6"
		>
			<a
				href="https://www.movies.fake/product-page/batman-beyond-complete-series-vudu-hdx-1"
				tabindex="-1"
				class="oQUvqL x5qIv3"
				data-hook="product-item-container"
			>
				<div
					class="mS0yET heightByImageRatio heightByImageRatio3"
					aria-live="assertive"
					data-hook="ProductMediaDataHook.Images"
				>
					<div class="naMHY_ vALCqq" data-hook="ImageUiTpaWrapperDataHook.Wrapper_0">
						<div
							data-source-width="2000"
							data-source-height="3000"
							data-resize="contain"
							data-use-lqip="true"
							data-is-seo-bot="false"
							class="sG9Te8u oDEteSw---resize-7-contain oDEteSw--fluid oDEteSw--forceImageContain oDEteSw--verticalContainer s__65YAB3 v_lwe5"
							data-hook="ImageUiTpaWrapperDataHook.Media_0"
							style="--wut-source-width: 2000px; --wut-source-height: 3000px"
						>
							<wow-image
								class="zTx3Xx s__86kRdh"
								data-image-info='{"displayMode":"fit","isLQIP":true,"isSEOBot":false,"lqipTransition":null,"imageData":{"width":2000,"height":3000,"uri":"c835e5_422f44f269d54cb99886c649b033abe7~mv2.jpg","name":"c835e5_422f44f269d54cb99886c649b033abe7~mv2.jpg","displayMode":"fit"}}'
								data-bg-effect-name=""
								data-has-ssr-src=""
								data-src="https://static.mediastatic.fake/media/c835e5_422f44f269d54cb99886c649b033abe7~mv2.jpg/v1/fill/w_210,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c835e5_422f44f269d54cb99886c649b033abe7~mv2.jpg"
							>
								<img
									src="https://static.mediastatic.fake/media/c835e5_422f44f269d54cb99886c649b033abe7~mv2.jpg/v1/fill/w_210,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c835e5_422f44f269d54cb99886c649b033abe7~mv2.jpg"
									alt="Batman Beyond: The Complete Series (VUDU HDX)"
									style="
										width: 225px;
										height: 300px;
										object-fit: contain;
										object-position: center center;
									"
								/>
							</wow-image>
						</div>
					</div>
					<button
						class="TUWFt6"
						data-hook="product-item-quick-view-button"
						tabindex="-1"
						aria-hidden="true"
					>
						Quick View
					</button>
				</div>
			</a>
			<div data-hook="not-image-container" class="CZ0KIs">
				<a
					href="https://www.movies.fake/product-page/batman-beyond-complete-series-vudu-hdx-1"
					class="JPDEZd"
					data-hook="product-item-product-details-link"
				>
					<div class="t2u_rw VVhXIF" data-hook="product-item-product-details">
						<h3
							class="sIXv5GE og388JK---typography-11-runningText og388JK---priority-7-primary syHtuvM FzO_a9"
							aria-hidden="false"
							data-hook="product-item-name"
						>
							Batman Beyond: The Complete Series (VUDU HDX)
						</h3>
						<div class="UqnnNN">
							<span class="ruX1QG" data-hook="sr-product-item-price-to-pay"
								>Price</span
							>
							<span data-hook="product-item-price-to-pay" class="cfpn1d">$24.99</span>
						</div>
					</div>
				</a>
			</div>
		</div>
	</li>
	<li data-hook="product-list-grid-item">
		<div
			role="group"
			aria-label="Dreamworks 10-Movie Collection (Movies Anywhere HD) gallery"
			data-hook="product-item-root"
			class="ETPbIy nvdiI6"
		>
			<a
				href="https://www.movies.fake/product-page/dreamworks-10-movie-collection-movies-anywhere-hd"
				tabindex="-1"
				class="oQUvqL x5qIv3"
				data-hook="product-item-container"
			>
				<div
					class="mS0yET heightByImageRatio heightByImageRatio3"
					aria-live="assertive"
					data-hook="ProductMediaDataHook.Images"
				>
					<div class="naMHY_ vALCqq" data-hook="ImageUiTpaWrapperDataHook.Wrapper_0">
						<div
							data-source-width="564"
							data-source-height="800"
							data-resize="contain"
							data-use-lqip="true"
							data-is-seo-bot="false"
							class="sG9Te8u oDEteSw---resize-7-contain oDEteSw--fluid oDEteSw--forceImageContain oDEteSw--verticalContainer s__65YAB3 v_lwe5"
							data-hook="ImageUiTpaWrapperDataHook.Media_0"
							style="--wut-source-width: 564px; --wut-source-height: 800px"
						>
							<wow-image
								class="zTx3Xx s__86kRdh"
								data-image-info='{"displayMode":"fit","isLQIP":true,"isSEOBot":false,"lqipTransition":null,"imageData":{"width":564,"height":800,"uri":"c835e5_f42be6b53abf42fab2b79a02d33c1038~mv2.jpg","name":"c835e5_f42be6b53abf42fab2b79a02d33c1038~mv2.jpg","displayMode":"fit"}}'
								data-bg-effect-name=""
								data-has-ssr-src=""
								data-src="https://static.mediastatic.fake/media/c835e5_f42be6b53abf42fab2b79a02d33c1038~mv2.jpg/v1/fill/w_222,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c835e5_f42be6b53abf42fab2b79a02d33c1038~mv2.jpg"
							>
								<img
									src="https://static.mediastatic.fake/media/c835e5_f42be6b53abf42fab2b79a02d33c1038~mv2.jpg/v1/fill/w_222,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c835e5_f42be6b53abf42fab2b79a02d33c1038~mv2.jpg"
									alt="Dreamworks 10-Movie Collection (Movies Anywhere HD)"
									style="
										width: 225px;
										height: 300px;
										object-fit: contain;
										object-position: center center;
									"
								/>
							</wow-image>
						</div>
					</div>
					<button
						class="TUWFt6"
						data-hook="product-item-quick-view-button"
						tabindex="-1"
						aria-hidden="true"
					>
						Quick View
					</button>
				</div>
			</a>
			<div data-hook="not-image-container" class="CZ0KIs">
				<a
					href="https://www.movies.fake/product-page/dreamworks-10-movie-collection-movies-anywhere-hd"
					class="JPDEZd"
					data-hook="product-item-product-details-link"
				>
					<div class="t2u_rw VVhXIF" data-hook="product-item-product-details">
						<h3
							class="sIXv5GE og388JK---typography-11-runningText og388JK---priority-7-primary syHtuvM FzO_a9"
							aria-hidden="false"
							data-hook="product-item-name"
						>
							Dreamworks 10-Movie Collection (Movies Anywhere HD)
						</h3>
						<div class="UqnnNN">
							<span class="ruX1QG" data-hook="sr-product-item-price-to-pay"
								>Price</span
							>
							<span data-hook="product-item-price-to-pay" class="cfpn1d">$24.99</span>
						</div>
					</div>
				</a>
			</div>
		</div>
	</li>
</ul>`;

const movies_collection = HTML_MAKER(movies_list);

const movies_array = [...movies_collection.children];

SORT_BY_PRICE(movies_array, movies_collection);
