"use client";

import Button from "../button/button";

export default function ChangeRetro() {
  const changeRetro = () => {
    const isRetro = document.body.classList.contains("retro");

    if (isRetro) {
      document.body.classList.remove("retro");
    } else {
      document.body.classList.add("retro");
    }
  };

  return <Button onClick={changeRetro}>Change retro</Button>;
}
