import React from "react";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    alert(
      `로그인 시도!\n사용자: ${username}\n기억하기: ${remember ? "예" : "아니요"}`,
    );
  };

  return (
    <>
      <h1>로그인 폼</h1>

      <div>
        <label>사용자명: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>비밀번호: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label>로그인 상태 유지</label>
      </div>

      <button
        disabled={username === "" || password === ""}
        onClick={handleLogin}
      >
        로그인
      </button>
    </>
  );
}

export default Login;
