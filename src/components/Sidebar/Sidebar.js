import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';
import { observer } from 'mobx-react';

const Sidebar = observer(['store'], ({ store }) =>
  <div>
    {store.app.title}
  </div>
);

export default withStyles(s)(Sidebar);
