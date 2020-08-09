import React from 'react';

const Header = ({ data }) => (
  <tr>
    {data.map((val) => (
      <th scope="col" key={val}>
        {val}
      </th>
    ))}
  </tr>
);

export default Header;
