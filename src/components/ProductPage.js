// src/components/ProductsPage.js
import React from 'react';
import { Card, Button, Row, Col, Badge, List, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const products = [
  { id: 1, name: 'Rose Plant', price: 10, image: 'rose.jpg' },
  { id: 2, name: 'Tulip Plant', price: 15, image: 'tulip.jpg' },
  { id: 3, name: 'Bonsai Tree', price: 50, image: 'bonsai.jpg' },
  { id: 4, name: 'Cactus', price: 20, image: 'cactus.jpg' },
  { id: 5, name: 'Orchid', price: 25, image: 'orchid.jpg' },
  { id: 6, name: 'Fern', price: 30, image: 'fern.jpg' }
];

const ProductsPage = ({ cart, setCart }) => {
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => 
      prevCart.map(item => {
        if (item.id === productId) {
          if (item.quantity === 1) {
            return { ...item, quantity: 0 }; // Mark for removal (if needed)
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      }).filter(item => item.quantity > 0) // Filter out items with quantity 0
    );
  };

  return (
    <div style={{ padding: '30px' }}>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col span={8} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={`/images/${product.image}`} style={{ height: '200px', objectFit: 'cover' }} />}
              actions={[
                <Badge count={cart.find(item => item.id === product.id)?.quantity || 0}>
                  <Button type="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                </Badge>,
                <Button type="danger" onClick={() => removeFromCart(product.id)}>
                  Remove from Cart
                </Button>
              ]}
            >
              <Card.Meta title={product.name} description={`$${product.price}`} />
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={4} style={{ marginTop: '30px' }}>Selected Items</Title>
      {cart.length > 0 ? (
        <List
          bordered
          dataSource={cart}
          renderItem={(item) => (
            <List.Item>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
            </List.Item>
          )}
        />
      ) : (
        <p>No items selected yet.</p>
      )}

      <Link to="/checkout">
        <Button type="primary" size="large" style={{ marginTop: '20px' }}>Go to Checkout</Button>
      </Link>
    </div>
  );
};

export default ProductsPage;
