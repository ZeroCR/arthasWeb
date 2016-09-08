import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

const title = 'React Starter Kit';

function Home({ news }, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>React.js News</h1>
        <ul className={s.news}>
          NEWS REMOVED
        </ul>
      </div>
    </div>
  );
}

Home.propTypes = {
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
