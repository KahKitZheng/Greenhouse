import React from "react";

const Container = (props) => (
  <div className="h-full w-full px-6 mb-16 lg:mb-0 overflow-y-auto">
    {props.children}
  </div>
);

export default Container;
