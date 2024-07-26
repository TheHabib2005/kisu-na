// UserProfile.js

import React from 'react';

const UserProfile = () => {
    // Dummy data for user profile
    const userData = {
        username: 'john_doe',
        email: 'john.doe@example.com',
        cart: [
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' },
        ],
        wishlist: [
            { id: 3, name: 'Product 3' },
            { id: 4, name: 'Product 4' },
        ],
        orders: [
            { id: 'A123', date: '2024-07-20' },
            { id: 'B456', date: '2024-07-22' },
        ],
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">User Profile</h1>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Account Information</h2>
                    <div className="border-b border-gray-200 pb-4">
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-gray-600">Username:</span>
                            <span className="text-gray-800">{userData.username}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium text-gray-600">Email:</span>
                            <span className="text-gray-800">{userData.email}</span>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Cart Items</h2>
                    <ul className="list-disc pl-5">
                        {userData.cart.map(item => (
                            <li key={item.id} className="text-gray-700">{item.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Wishlist</h2>
                    <ul className="list-disc pl-5">
                        {userData.wishlist.map(item => (
                            <li key={item.id} className="text-gray-700">{item.name}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Orders History</h2>
                    <ul className="list-disc pl-5">
                        {userData.orders.map(order => (
                            <li key={order.id} className="text-gray-700">
                                Order ID: <span className="font-medium">{order.id}</span>, Date: {order.date}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
