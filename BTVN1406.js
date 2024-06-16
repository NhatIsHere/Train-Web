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
        this.numProduct = 0;
        this._id = 0;

    }

    async getProduct() {
        if (this.fetched) return 0;
        this.product = await fetch("https://dummyapi-0uzr.onrender.com/products");
        this.product = await this.product.json();
        console.log(this.product);
        this.product = await this.product.products;
        this.displayResult.textContent = "Got product";
        this.fetched = true;
        this.numProduct = this.length;
        return 1;
    }

    clearProduct() {
        this.product = null;
        this.fetched = false;
        this.displayResult.textContent = "Cleared products";
        this.displayProductText.innerHTML = "";
        this._id = 0;
        this.numProduct = 0;
    }

    displayProduct() {
        if (!this.fetched) {
            this.displayProductText.textContent = "No product to display";
            return;
        }
        const formatPrice = (price, delimiter=".") => {return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter)}
        const truncatePrice = (price, k = 2) => {const factor = Math.pow(10, Math.abs(price).toString().length - k); return Math.floor(price / factor) * factor; }
        
        // Dummy action for fetching product from database
        function getProduct() {
          return test_product;
        }
        
        
        /**
         * Giải thích 1 số chỗ khó hiểu:
         * production-image: data là base64 cho nên chỉ cần thêm data sau data:image/png;base64, là được
         * production-sale: chỗ để display tag của sản phẩm, nếu có giảm giá thì ưu tiên hiển thị giảm giá, không có tag hay giảm giá thì để trống (cái này tự quy ước)
         * production-old-price: nếu có giảm giá thì thể hiện giá cũ, lẽ ra api phải trả về nhưng mà api không có nên tự tính 🐧
         * 
         * Bỏ cái phần element vô () để xuống dòng thoải mái
         */
        function createProductComponent(product) {
          return (
            `<div class="production-container">
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
        
        /**
         * Dùng insertAdjacentHTML để khỏi tạo node mới rồi re-render từ đầu, chỉ render node mới thêm vô
         */
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