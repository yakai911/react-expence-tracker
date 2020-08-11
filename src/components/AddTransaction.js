import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseInt(amount),
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>添加新的收支记录</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">内容</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="输入内容..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            金额 <br />
            (负值 - 支出 , 正值 - 收入 )
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="输入金额..."
          />
        </div>
        <button className="btn">添加记录</button>
      </form>
    </>
  );
};
