import React from 'react';
import PropTypes from 'prop-types';
import PaginationDot from './PaginationDot';

const styles = {
 root: {
  position: 'relative',
  bottom: 230,
  paddingRight: '45em',

  justifyContent: 'center',
 },
};

class Pagination extends React.Component {
 handleClick = (event, index) => {
  this.props.onChangeIndex(index);
 };

 render() {
  const {index, dots} = this.props;

  const children = [];

  for (let i = 0; i < dots; i += 1) {
   children.push(
    <PaginationDot key={i} index={i} active={i === index} onClick={this.handleClick} />
   );
  }

  return <div style={styles.root}>{children}</div>;
 }
}

Pagination.propTypes = {
 dots: PropTypes.number.isRequired,
 index: PropTypes.number.isRequired,
 onChangeIndex: PropTypes.func.isRequired,
};

export default Pagination;
