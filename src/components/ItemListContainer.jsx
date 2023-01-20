import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div style={{backgroundColor:'#f5f5f5', padding: '10px', textAlign:'center', paddingTop: '30px'}}>
      <h5>{props.greeting}</h5>
    </div>
  );
}

export default ItemListContainer;