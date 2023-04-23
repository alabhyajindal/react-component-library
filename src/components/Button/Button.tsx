import React from 'react';
import './Button.css';

export interface ButtonProps {
  label: string;
}

export default function Button(props: ButtonProps) {
  return <button>{props.label}</button>;
}
