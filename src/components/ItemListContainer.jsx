import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div style={{backgroundColor:'#f5f5f5', padding: '10px', textAlign:'center'}}>
      <h3>{props.greeting}</h3>
    </div>
  );
}

export default ItemListContainer;