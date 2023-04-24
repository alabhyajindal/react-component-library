import React, { useState } from 'react';

interface BarData {
  label: string;
  value: number;
}

interface BarProps {
  data: BarData[];
}

export default function Bar({ data }: BarProps) {
  const [barData, setBarData] = useState(data);

  const barStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '300px',
    width: '100%',
    backgroundColor: '#f5f5f5',
  };

  const barItemStyle = {
    flex: 1,
    padding: '10px',
    margin: '5px',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#2196F3',
    transition: 'height 0.5s',
  };

  const handleBarClick = (index: number) => {
    const newData = [...barData];
    newData[index].value += 1;
    setBarData(newData);
  };

  return (
    <div style={barStyle as React.CSSProperties}>
      {barData.map((bar, index) => (
        <div
          key={index}
          style={
            {
              ...barItemStyle,
              height: `${bar.value * 10}px`,
            } as React.CSSProperties
          }
          onClick={() => handleBarClick(index)}
        >
          {bar.label}
        </div>
      ))}
    </div>
  );
}
