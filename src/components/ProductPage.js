// src/components/ProductsPage.js
import React from 'react';
import { Card, Button, Row, Col, Badge, List, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/CartSlice';
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

const ProductsPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItem(productId));
  };

  return (
    <div style={{ padding: '30px' }}>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col span={8} key={product.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={product.name}
                  src={`/images/${product.image}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              }
              actions={[
                <Badge count={cart.find(item => item.id === product.id)?.quantity || 0}>
                  <Button type="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                </Badge>,
                <Button type="danger" onClick={() => handleRemoveFromCart(product.id)}>
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

      {cart.length > 0 && (
        <Link to="/checkout">
          <Button type="primary" size="large" style={{ marginTop: '20px' }}>
            Go to Checkout
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ProductsPage;
