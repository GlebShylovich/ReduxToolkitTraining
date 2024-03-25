import React from "react";
import { useSelector } from "react-redux";

export default function Item() {
  const { email, nameUser } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.postServ)
  console.log(email)
  console.log(posts)
  return <div>Item</div>;
}
