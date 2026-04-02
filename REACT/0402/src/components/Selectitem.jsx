import React from "react";
import { useState } from "react";

function Selectitem() {
  const [selected, setSelected] = useState("");
  return (
    <>
      <h1>아이템 선택</h1>
      <button onClick={() => setSelected("사과")}>사과</button>
      <button onClick={() => setSelected("바나나")}>바나나</button>
      <button onClick={() => setSelected("오렌지")}>오렌지</button>
      <button onClick={() => setSelected("포도")}>포도</button>
      <button onClick={() => setSelected("딸기")}>딸기</button>
      <p>선택된 과일: {selected}</p>

      <p>{selected && `🎉 ${selected}를 선택하셨습니다!`} </p>
    </>
  );
}

export default Selectitem;
