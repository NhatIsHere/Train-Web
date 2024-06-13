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
}