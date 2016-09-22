import React from 'react';
import { observer } from 'mobx-react';

const User = observer(['store'], ({ store }) => {
  return (<div>
    {store.app.description}
  </div>)
}
  
);

export default User;
