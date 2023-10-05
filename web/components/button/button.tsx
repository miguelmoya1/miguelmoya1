"use client";

import "./button.css";

export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button className={className + " button"} onClick={onClick}>
      {children}
    </button>
  );
}
