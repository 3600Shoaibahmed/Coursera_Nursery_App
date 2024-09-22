import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout, Menu, Badge } from 'antd';

const { Header } = Layout;

const AppHeader = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Header style={{backgroundColor:""}}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/checkout">
            <Badge count={cart.reduce((total, item) => total + item.quantity, 0)}>
              <span style={{color:"white"}}> Cart</span>
            </Badge>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;

