import $ from 'jquery';
import {items} from "./staritems.js";
// I need the item image
// The item "title" 
// Item "url" 
// The items maker "Shop"--"shop_name"
// The items price and currency "price" "currency_code"

items.results.forEach(function(x){


console.log("COW");
var price = x.price;

var title = x.title;
var url = x.url;
var shopname = x.Shop.shop_name;
var shop_url = x.Shop.url;
var currency;
if ( x.currency_code == "USD") {currency = "\x24";}
	else if (x.currency_code == "EUR"){currency = "&euro;";}
	else if (x.currency_code == "GBP"){currency = "\xA3";}
var image;

x.Images.forEach(function(n){
	image = n.url_570xN;
});

var item_template = `      <div class="grid_point">
        
        <div class="img_div"> <img class="items_img" src="${image}"> 
        </div>
        
  
          <div class="title_div"> <a href="${url}"> ${title}</a> </div>

          <div class="shopname_price_div"> <a href="${shop_url}">${shopname}</a> <span class="test_price">${currency}${price}</span>  </div>`;

return $(".Maincontent_grid_div").append(item_template);

});