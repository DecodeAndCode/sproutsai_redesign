'use client';
import { useState, useEffect } from 'react';

interface TextCycleProps {
  array: string[];
}

function TextCycle({ array }: TextCycleProps) {
  const [msg, setMsg] = useState(0);

  const changeMsg = () => {
    setMsg((prevMsg) => (prevMsg > array.length - 2 ? 0 : prevMsg + 1));
  };

  useEffect(() => {
    const timer = setTimeout(changeMsg, 1500);
    return () => clearTimeout(timer);
  }, [msg]);

  return <div>{array[msg]}</div>;
}

export default TextCycle;
