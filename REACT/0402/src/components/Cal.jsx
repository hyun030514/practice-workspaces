import React from "react";
import { useState } from "react";

function Cal() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(5);

  return (
    <>
      <h1>간단한 계산기</h1>

      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      >
        <label style={{ width: "50px" }}>숫자 1:</label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <label style={{ width: "50px" }}>숫자 2:</label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </div>

      <div>
        <p>
          덧셈: {num1} + {num2} = {num1 + num2}{" "}
        </p>
        <p>
          뺄셈: {num1} - {num2} = {num1 - num2}{" "}
        </p>
        <p>
          곱셈: {num1} × {num2} = {num1 * num2}{" "}
        </p>
        <p>
          나눗셈: {num1} ÷ {num2} = {(num1 / num2).toFixed(2)}{" "}
        </p>
      </div>
    </>
  );
}

export default Cal;
