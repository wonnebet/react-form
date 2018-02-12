import React from 'react';
import Dropdown from './Dropdown';
import LabelledInput from './LabelledInput';
import namePrefixes from '../data/namePrefixes.json';
import LabelledDropdown from './LabelledDropdown';

class NameFields extends React.Component {
    render() {
        return (
            <div>
                <h3>Your Full Name:</h3> <br />
                <LabelledDropdown label="Title" options={namePrefixes} onChange={this.props.updatePrefix} />
                <LabelledInput label="First Name" onChange={this.props.updateFirst} />
                <LabelledInput label="Last Name" onChange={this.props.updateLast} />
                <br /> <br />
            </div >
        );
    }
}

export default NameFields;