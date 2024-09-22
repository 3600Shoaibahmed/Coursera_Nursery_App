// src/components/CheckoutPage.js
import React from 'react';
import { List, Button, Typography, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/CartSlice';

const { Title } = Typography;

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const increaseQuantity = (productId) => {
    dispatch(addItem({ id: productId })); // Dispatch addItem to increase quantity
  };

  const decreaseQuantity = (productId) => {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
      if (existingProduct.quantity === 1) {
        dispatch(removeItem(productId)); // Remove if quantity is 1
      } else {
        dispatch(addItem({ id: productId })); // Reduce quantity by adding again
      }
    }
  };

  const removeProduct = (productId) => {
    dispatch(removeItem(productId)); // Dispatch removeItem to remove product
  };

  if (cart.length === 0) {
    return <Title level={4}>Your cart is empty!</Title>; // Show a message if cart is empty
  }

  return (
    <div style={{ padding: '30px' }}>
      <Title level={3}>Your Cart</Title>
      <List
        itemLayout="horizontal"
        bordered
        dataSource={cart}
        renderItem={item => (
          <List.Item
            actions={[
              <Button onClick={() => decreaseQuantity(item.id)}>-</Button>,
              <Button onClick={() => increaseQuantity(item.id)}>+</Button>,
              <Button type="danger" onClick={() => removeProduct(item.id)}>Remove</Button>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={`/images/${item.image}`} size={64} />}
              title={item.name}
              description={`Quantity: ${item.quantity} | Total Price: $${item.price * item.quantity}`}
            />
          </List.Item>
        )}
      />
      <Title level={4}>Total: ${totalPrice}</Title>
      <Button type="primary" size="large" style={{ marginTop: '20px' }}>
        Proceed to Payment
      </Button>
    </div>
  );
};

export default CheckoutPage;
