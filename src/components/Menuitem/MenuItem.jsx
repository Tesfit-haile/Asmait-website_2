import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      {/* name title */}
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>

      {/* Dash line, but style it . */}
      <div className="app__menuitem-dash" />

      {/* price */}
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>

    </div>
    {/* Sub */}
    <div className="app__menuitem-sub">
      <p className="p__cormorant" style={{ color: '#AAA', fontSize: '16px' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
