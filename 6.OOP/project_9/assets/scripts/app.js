class Component {
    constructor(renderHookId, shouldRender = true) {
        this.hookId = renderHookId;

        if (shouldRender) this.render();
    }

    render() {}

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);

        if (cssClasses) {
            rootElement.className = cssClasses;
        }

        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }

        document.getElementById(this.hookId).append(rootElement);

        return rootElement;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Product {
    // title = '';
    // imageUrl = '';
    // price = 0;
    // description = '';

    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId, false);
        this.product = product;
        this.render();
    }

    addToCart() {
        App.addProductToCart(this.product);
    }

    render() {
        const productElement = this.createRootElement('li', 'product-item');
        const { title, imageUrl, price, description } = this.product;

        productElement.innerHTML = `
            <div>
                <img src="${imageUrl}" alt="${title}">
                <div class="product-item__content">
                    <h2>${title}</h2>
                    <h3>\$${price}</h3>
                    <p>${description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        const addCartBtn = productElement.querySelector('button');
        addCartBtn.addEventListener('click', this.addToCart.bind(this));
        return productElement;
    }
}

class ProductList extends Component {
    products = [];

    constructor(renderHookId) {
        super(renderHookId);
        this.fetchProducts();
    }

    fetchProducts() {
        this.products = [
            new Product(
                'Pillow',
                'https://media.istockphoto.com/photos/white-pillow-isolated-on-white-background-picture-id1018424252?k=20&m=1018424252&s=612x612&w=0&h=Q2g1Ht1n-1xw0pGUM02f3lZnjFhLj1xMocg8e-oYSeo=',
                19.99,
                'A Soft Pillow!'
            ),
            new Product(
                'Carpet',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Carpet_MET_DP360538.jpg/1200px-Carpet_MET_DP360538.jpg',
                89.99,
                'A carpet which you might like - or not'
            ),
        ];

        this.renderProducts();
    }

    renderProducts() {
        for (const product of this.products) {
            new ProductItem(product, 'prod-list');
        }
    }

    render() {
        const productsList = this.createRootElement('ul', 'product-list', [
            new ElementAttribute('id', 'prod-list'),
        ]);

        if (this.products && this.products.length > 0) {
            this.renderProducts();
        }
    }
}

class ShoppingCart extends Component {
    items = [];

    constructor(renderHookId) {
        super(renderHookId, false);
        this.orderProducts = () => {
            console.log('Ordering...');
            console.log(this.items);
        };
        this.render();
    }

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
            2
        )}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevVal, curItem) => {
            return prevVal + curItem.price;
        }, 0);

        return sum;
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    orderProducts = () => {
        console.log('Ordering...');
        console.log(this.items);
    };

    render() {
        const cartElement = this.createRootElement('section', 'cart');
        cartElement.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;

        const orderBtn = cartElement.querySelector('button');
        orderBtn.addEventListener('click', this.orderProducts);

        this.totalOutput = cartElement.querySelector('h2');
    }
}

class Shop {
    constructor() {
        this.render();
    }

    render() {
        this.cart = new ShoppingCart('app');
        new ProductList('app');
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct();
    }
}

App.init();
