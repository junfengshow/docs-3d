import React from 'react';
const Wrap: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div>{children}</div>;
};
export default Wrap;
