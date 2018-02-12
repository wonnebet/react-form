import React from 'react';

class LabelledInput extends React.Component {
    render() {
        return (
            <label>
                {this.props.label}:
                <input type="text" onChange={this.props.onChange} />
            </label>
        );
    }
}

export default LabelledInput;