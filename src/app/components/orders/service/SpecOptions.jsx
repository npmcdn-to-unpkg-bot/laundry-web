import React, { PropTypes } from 'react';
import SpecOptionSelector from './SpecOptionSelector';

const SpecOptions = ({ spec, idServiceType, updateServiceOnCart }) => {
  const addSpecHandler = () => updateServiceOnCart(idServiceType, spec, true);
  const removeSpecHandler = () => updateServiceOnCart(idServiceType, spec, false);
  return (
    <div className="four column row">
      <div className="column">
        {spec.description}
      </div>
      <div className="column">
        {spec.options ? (<SpecOptionSelector onChange={addSpecHandler} specOptions={spec.options[spec.idSpecs]} idSpec={spec.idSpecs} />) : null}
      </div>
      <div className="column">
        ${spec.price}
      </div>
      <div className="column">
        <button className="ui icon button" onClick={addSpecHandler}>
          <i className="fa fa-plus"></i>
        </button>
        <button className="ui icon button" onClick={removeSpecHandler}>
          <i className="fa fa-minus"></i>
        </button>
      </div>
    </div>
  );
};

SpecOptions.propTypes = {
  spec: PropTypes.object.isRequired,
  idServiceType: PropTypes.number.isRequired,
  updateServiceOnCart: PropTypes.func.isRequired,
};

export default SpecOptions;
