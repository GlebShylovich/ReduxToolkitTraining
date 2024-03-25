import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { setUser } from "../reduxToolkit/slice/userSlice";
export default function Foo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch()
  function handleClickUser(e) {
    e.preventDefault();
    if (!name || !email) return;
    dispatch(setUser({
        email:email,
        nameUser: name,
        token: new Date.getTime(),
    }))
  }
  return (
    <div>
      <form onSubmit={handleClickUser}>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </form>
    </div>
  );
}
