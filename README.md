# Amazon Price Compare

This is a chrome extension that will add prices from other retailers to amazon product listings.

## Installation

This extension is not in the chrome extension store, so to install it you need to sideload it.

Make sure you have the latest `extension.crx` file from the releases page.

1. Go to the extensions page. Click the three dots in the corner under More Tools click Extensions.
2. Enable Developer Mode. (A toggle in the top right corner.)
3. Drag the `extension.crx` onto the extensions page. (Make sure it says Drop to Install.)

## Usage

Just install the extension. That's it. After the install it automatically get prices for you.

## How it works

1. When you visit an amazon listing the extension passes the name of the product to an my api.

2. The api then searches Google Shopping for the product. It gets the prices that google lists on their site and passes them back to the extension.

3. The extension displays the price with a link to the product listing on that retailers site.

## Tech Stack

1. Javascript
2. Node JS
3. Puppeteer
4. Express
5. Heroku

### Notes

Google is constantly pushing changes to Google Shopping, and every time they do the element class names change and my API doesn't work anymore.

Because Google is A/B testing Google Shopping right now, it might take a little bit longer to get results.

The product chosen to have its prices displayed is always the top search result on Google Shopping. That means that it might not always be the same product.
