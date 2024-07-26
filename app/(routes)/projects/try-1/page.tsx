"use client";

import Cell from "@/components/Cell";
import React, { useEffect, useState } from "react";

const TryOne = () => {
    const [orders, setOrders] = useState<number[]>([]);
    // const [reverse, setReverse] = useState(false)
    const config = [
        [1, 1, 1],
        [1, 0, 1,],
        [1, 1, 1],
    ];

    let color = `#${Math.random().toString(16).substring(2, 8)}`;

    const handleOrders = (newOrder: number) => {
        setOrders((prev) => [...prev, newOrder]);
    };

    const handleReversing = () => {
        let timer = setInterval(() => {
            setOrders((prev) => {
                let newOrder = prev.slice();
                newOrder.pop();

                if (newOrder.length === 0) {
                    clearInterval(timer);
                }
                return newOrder;
            });
        }, 300);
    };

    const activeRevirsing = () => {
        const pureConfigLenght = config.flat(1).filter(Boolean).length;
        if (pureConfigLenght === orders.length + 1) {
            handleReversing();
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div
                className="grid p-4 gap-10 w-[400px]"
                style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
            >
                {config.flat(1).map((value, index) => {
                    return value === 1 ? (
                        <Cell
                            key={index}

                            index={index}
                            isDisabled={orders.includes(index)}
                            orders={orders}
                            handleOrders={handleOrders}
                            activeRevirsing={activeRevirsing}
                        />
                    ) : (
                        <span key={index}></span>
                    );
                })}
            </div>
        </div>
    );
};

export default TryOne;
