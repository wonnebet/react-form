import React from 'react';
import Dropdown from './Dropdown';

class LabelledDropdown extends React.Component {
    render() {
        return (
            <label>
                {this.props.label}:
                <Dropdown options={this.props.options} onChange={this.props.onChange} />
            </label>
        );
    }
}

export default LabelledDropdown;