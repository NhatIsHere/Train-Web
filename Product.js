 discount (int)
 image (base64)
 name (string)
 price (int)
 short_desc (string)
 tag (string)
 unit_price(string)
function generateProduct(product) {

    if (product.tag) {
        product.tag = capitalizeFirstletter(product.tag)
    
    }
    if (product.image) {
        product.image = "dataimage/png;base64," + product.image;
    }
    product.price = changePriceFormat(product.price);
    product.unit_price = capitalizeFirstLetter(product.unit_price);
    const markup = `<div class="product-container" id="${product.name}">
    <img class="product-image" src"${product.image}" alt="${product.name}">
    <p class="discount">${product.discount ? `-${product.discount}%` : ""}</p>
    <p class="tag">${product.tag ? product.tag : ""}</p>
    
    <h3 class="product-name">${product.name}</h3>
    <p class="product-description">${product.short_desc}</p>
    <h4 class="product-price">${product.unit-price} ${product.price}</h4>
    <p class="product-old-price"><del>${product.old-price ? product.old_price : ''}</del></p>`
