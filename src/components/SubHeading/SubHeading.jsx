import React from 'react';
import { images } from '../../constants'


const SubHeading = ({ title }) => (
  <div>
    <p style={{ fontFamily: 'Helvetica', fontSize: '24px', color: 'white', }}>{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
