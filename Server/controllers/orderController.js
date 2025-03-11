const Order = require('../models/orderModel');

const createOrder = async (req, res) =>{
    const {products, totalAmount} = req.body;
    try {
        const order = new Order ({
            user: req.userId,
            products,
            totalAmount
        });

        await order.save();
        res.status(201).json(order);
    } catch (error){
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


const getUserOrders = async (req, res) => {
    try {
      const orders = await Order.find({ user: req.userId });
      res.json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };



  const updateOrderStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
      const order = await Order.findById(orderId);
      if (!order) return res.status(404).json({ message: 'Order not found' });
  
      order.status = status;
      await order.save();
  
      res.status(200).json(order);
    } catch (error) {
      console.error('Error updating order status:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };



module.exports = {createOrder, getUserOrders, updateOrderStatus};