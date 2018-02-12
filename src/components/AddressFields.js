import React from 'react';
import LabelledInput from './LabelledInput';
import LabelledDropdown from './LabelledDropdown';

import states from '../data/states.json';

class AddressFields extends React.Component {
    render() {
        return (
            <div>
                <h3>Your Address:</h3> <br />
                <LabelledInput label="Street" onChange={this.props.updateStreet} /><br />
                <LabelledInput label="City" onChange={this.props.updateCity} /><br />
                <LabelledDropdown label="State" options={states} onChange={this.props.updateSt} /><br />
                <LabelledInput label="Zip Code" onChange={this.props.updateZip} /><br />
            </div>
        );
    }
}

export default AddressFields;