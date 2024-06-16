class ajaxDemo {
    constructor() {
        this.getProduct = this.getProduct.bind(this);
        this.clearProduct = this.clearProduct.bind(this);
        this.displayProduct = this.displayProduct.bind(this);

        this.getButton = document.getElementById("get-product-button");
        this.clearButton = document.getElementById("clear-product-button");
        this.displayResult = document.getElementById("get-clear-product-result");
        this.displayButton = document.getElementById("display-button");
        this.displayProductText = document.getElementById("display-product-text");

        this.product = null;
        this.fetched = false;
    }

    async getProduct() {
        if (this.fetched) return 0;
        this.product = await fetch("https://dummyapi-0uzr.onrender.com/products");
        this.product = await this.product_list.json();
        console.log(this.product_list);
        this.product = await this.product.product_list;
        this.displayResult.textContent = "Got product";
        this.fetched = true;
        return 1;
    }

    clearProduct() {
        this.product = null;
        this.fetched = false;
        this.displayResult.textContent = "Cleared products";
        this.displayProductText.innerHTML = "";
    }

    displayProduct() {
        if (!this.fetched) {
            this.displayProductText.textContent = "No product to display";
            return;
        }
        const formatPrice = (price, delimiter=".") => {return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter)}
        const truncatePrice = (price, k = 2) => {const factor = Math.pow(10, Math.abs(price).toString().length - k); return Math.floor(price / factor) * factor; }~
        function createProductComponent(product) {
          return (
           this.displayProductText.textContent = `<div class="production-container">
            <img class="production-image" src="data:image/png;base64,${this.product.image}" alt="${this.product.name}">
            <span class="production-sale"><p>${this.product.discount ? `-${this.product.discount}%` : `${this.product.tag}`}</p></span>
            
            <h3 class="production-name">${this.product.name}</h3>
            <p class="production-description">${this.product.short_desc}</p>
            <h4 class="production-price">${this.product.unit_price} ${formatPrice(this.product.price)}</h4>
            ${this.product.discount ? `<p class="production-old-price"><del>${this.product.unit_price} ${formatPrice(truncatePrice(Math.floor(this.product.price / (100 - this.product.discount) * 100)))}</del></p>` : ""}
            <div class="hidden-info">
                <button>Add to cart</button>
                <p class="action-share"><span class="material-symbols-outlined icon-filled">share</span>Share</p>
                <p class="action-compare"><span class="material-symbols-outlined">swap_horiz</span>Compare</p>
                <p class="action-compare"><span class="material-symbols-outlined">favorite</span>Like</p>         
            </div>
            </div>`
          )
        }
        
        function populateProduct() {
          const container = document.querySelector(".production-list");
        } 
    }

    addEvent() {
        // this.getButton.addEventListener("click",this.getProduct);
        this.getButton.addEventListener("click",() => setTimeout(this.getProduct,2000));
        this.clearButton.addEventListener("click",this.clearProduct);
        this.displayButton.addEventListener("click",this.displayProduct);
    }
}
let ajaxClass = new ajaxDemo(); 
ajaxClass.addEvent();
const formatPrice = (price, delimiter=".") => {return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter)}
const truncatePrice = (price, k = 2) => {const factor = Math.pow(10, Math.abs(price).toString().length - k); return Math.floor(price / factor) * factor; }
