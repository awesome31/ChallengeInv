import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const Row = ({ data }) => (
  <tr>
    {data.map((val) => (
      <td key={uuidv4()}>{val}</td>
    ))}
  </tr>
);

export default Row;
