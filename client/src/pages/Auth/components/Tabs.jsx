import React, { useState } from "react";

export default function Tabs({ tabs }) {
  const [activeTabs, setActiveTabs] = useState(0);

  return (
    <div className="auth-tabs-container">
      <div className="auth-tabs-headers">
        {tabs.label.map((header, index) => (
          <div
            className={
              activeTabs === index
                ? "auth-tabs-button active"
                : "auth-tabs-button"
            }
            onClick={() => setActiveTabs(index)}
            key={index}
          >
            {header}
          </div>
        ))}
      </div>
      <div className="auth-tabs-content">{tabs.content[activeTabs]}</div>
    </div>
  );
}
