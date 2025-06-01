import { Children } from "react";

const button = ({ className }) => {
  return <button className={className}>{Children}</button>;
};

export default button;
