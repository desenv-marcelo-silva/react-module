import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Tech não enviada - valor default',
};

TechItem.propTypes = {
  tech: PropTypes.string,   //PropTypes.string.isRequired
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;