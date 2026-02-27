


import { useState } from "react";
import "../App.css";

const items = [
  {
    name: "Gold Edition",
    price: 150,
    img: "https://images.ctfassets.net/wtodlh47qxpt/4AcPJzGNNxfXiF1rWvlydj/2a8548a717ff678fbfb0d881b7367ba8/KFC-Gold-Burger-White-Category-23MAY_4.jpg"
  },
  {
    name: "Box Meals",
    price: 250,
    img: "https://images.ctfassets.net/wtodlh47qxpt/7zQ4a4xD9BW9Qyl03WlTqR/bbcea04b544b8700ea7fe7834d85feb7/KFC-Box-Meals.jpg"
  },
  {
    name: "Burger",
    price: 550,
    img: "https://images.ctfassets.net/wtodlh47qxpt/3NdeHBtjjYPHMAoOTpEZ0w/d6c6fadd15bcfa8f6bc969aa02207f0c/KFC-Burger.jpg"
  },
  {
    name: "Veg",
    price: 170,
    img: "https://images.ctfassets.net/wtodlh47qxpt/169o6qKazOgakFLMKkHUGY/d9d657af816a140bdaf3f5a7d64e3ef7/KFC-Veg.jpg"
  },
  {
    name: "8 pc Hot & Crispy Chicken",
    price: 240,
    img: "https://images.ctfassets.net/wtodlh47qxpt/2YPzMN8EFsAnx6VS2waX18/29e106d4f989f718ce0041dd54e02834/D-K009-prod?h=600&w=800&fm=webp&fit=fill"
  },
  {
    name: "6 pc Hot & Crispy Chicken",
    price: 50,
    img: "https://images.ctfassets.net/wtodlh47qxpt/3AFoq7WgVjCHnL6aMTR7gz/f8ebb7339eb2c0172e7d54c7cce037bf/D-K012-prod?h=600&w=800&fm=webp&fit=fill"
  },
  {
    name: "Peri Peri 5 Leg Pc",
    price: 400,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K685.jpg?ver=77.64"
  },
  {
    name: "4pc Hot Wings",
    price: 200,
    img: "https://images.ctfassets.net/wtodlh47qxpt/5ckA3JwXsl2vuMj9NbImia/0b0640b850b39f2aef804d90262b12aa/D-K303-prod?h=600&w=800&fm=webp&fit=fill"
  },
  {
    name: "2 Chana Burgers",
    price: 240,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K1157.jpg?ver=77.64"
  },
  {
    name: "2 Chana Burger & Fries combo",
    price: 50,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00003071.jpg?ver=77.64"
  },
  {
    name: "Spicy Zinger Burger",
    price: 400,
    img: "https://images.ctfassets.net/wtodlh47qxpt/4hXrsUTji88odWH6jrnMRK/9bcd3c8ca97d86ba2db2ec8f752f4b77/Burgers-Caribbean_Spicy_Zinger_Burger-delivery.jpg?h=600&w=800&fm=webp&fit=fill"
  },
  {
    name: "Classic Zinger",
    price: 200,
    img: "https://images.ctfassets.net/wtodlh47qxpt/1gRTrPUhdDUaTqhorx1RmW/38f1455dbbb519c0f84bf99851ea16c5/Burgers-American-Classic-Zinger-delivery.jpg?h=600&w=800&fm=webp&fit=fill"
  },
  {
    name: "Virgin Mojito Reusable Bottle",
    price: 240,
    img: "https://images.ctfassets.net/wtodlh47qxpt/nIxJldTk5sJ14dt5NNgdP/e84048d7cd1be38e3adcbbbcf2c16770/D-K935-prod?h=600&w=800&fm=webp&fit=fill"
  },
  {
    name: "Dew Mojito Reusable Bottle",
    price: 50,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K1023.jpg?ver=77.64"
  },
  {
    name: "Pepsi Reusable Bottle",
    price: 400,
    img: "https://images.ctfassets.net/wtodlh47qxpt/11Nfyef551RxuQK6n3VU2o/d339dd7f77a2947b3eeacfa9e123db24/D-K934-prod?h=600&w=800&fm=webp&fit=fill"
  },
  {
    name: "7Up Reusable Bottle",
    price: 200,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K1021.jpg?ver=77.64"
  },
   {
    name: "Thai Spicy chicken roll",
    price: 240,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K973.jpg?ver=77.64"
  },
  {
    name: "Indian T&oori Chicken Roll",
    price: 50,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K975.jpg?ver=77.64"
  },
  {
    name: "Korean Tangy Chicken Roll",
    price: 400,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K974.jpg?ver=77.64"
  },
  {
    name: "Double Chicken Roll",
    price: 200,
    img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K977.jpg?ver=77.64"
  },
   {
    name: "Popcorn Chicken Rice Bowlz",
    price: 240,
    img: "https://images.ctfassets.net/wtodlh47qxpt/4yqdKSsr11hvNSycCQqOul/ce79d2b426b2d8c57eb5a853b490390d/D-K870-prod?h=600&w=800&fm=webp&fit=fill"
  },
  {
    name: "Classic Chicken Rice Bowlz",
    price: 50,
    img: "https://images.ctfassets.net/wtodlh47qxpt/1mJ7OrVXe5r1vnfvgZkcrz/4380a2766623b081eb1513a04a89ea34/D-K872-prod?h=600&w=800&fm=webp&fit=fill"
  },
  {
    name: "Plain Rice Bowlz",
    price: 400,
    img: "https://images.ctfassets.net/wtodlh47qxpt/5gmYC6l48VgkcPmOPKq9rd/b7798518d27ebce3d774bb2715b339cc/D-K867-prod?h=600&w=800&fm=webp&fit=fill"
  },
  {
    name: "Smoky Red Chicken Rice Bowlz",
    price: 200,
    img: "https://images.ctfassets.net/wtodlh47qxpt/RKIkE7msRQQ3GJsijsOYO/27114ab7bbfba8c76621d8d22ca46581/D-K873-prod?h=600&w=800&fm=webp&fit=fill"
  }
  // ... baki items
];

function MenuSection() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState(""); // search state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.name === item.name);
    if (existing) {
      setCart(cart.map((i) => i.name === item.name ? { ...i, qty: i.qty + 1 } : i));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const increaseQty = (name) => {
    setCart(cart.map((item) => item.name === name ? { ...item, qty: item.qty + 1 } : item));
  };

  const decreaseQty = (name) => {
    setCart(cart.map((item) => item.name === name ? { ...item, qty: item.qty - 1 } : item)
      .filter((item) => item.qty > 0));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    setCart([]);
    setIsCartOpen(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  // Filter items based on search input
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="search-bar" style={{ textAlign: "center", margin: "15px 0" }}>
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px 12px",
            width: "300px",
            borderRadius: "25px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none"
          }}
        />
      </div>

      <div className="container">
        <div className="cart-icon" onClick={() => setIsCartOpen(true)}>
          🛒 {cart.length}
        </div>

        <div className="menu-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div className="card" key={item.name}>
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", width: "100%" }}>No items found</p>
          )}
        </div>
      </div>

      {isCartOpen && (
        <div className="cart-panel">
          <h3>Your Cart</h3>
          {cart.length === 0 ? (
            <p>No items added</p>
          ) : (
            cart.map((item) => (
              <div key={item.name} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="cart-details">
                  <p>{item.name}</p>
                  <div className="qty-control">
                    <button onClick={() => decreaseQty(item.name)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.name)}>+</button>
                  </div>
                  <p>₹{item.qty * item.price}</p>
                </div>
              </div>
            ))
          )}
          <h4>Total: ₹{total}</h4>
          <button className="order-btn" onClick={placeOrder}>Place Order</button>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>Close</button>
        </div>
      )}

      {success && (
        <div className="success-overlay">
          <div className="success-box">
            <div className="checkmark">✓</div>
            <h2>Order Confirmed!</h2>
            <p>Your delicious food is on the way 🚀</p>
            <p className="order-id">Order ID: #{Math.floor(Math.random() * 100000)}</p>
            <button onClick={() => setSuccess(false)}>Continue Shopping</button>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuSection;