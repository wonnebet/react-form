import React from 'react';

class Dropdown extends React.Component {
    render() {
        var options = this.props.options.map(function (item, i) {
            return <option key={i} value={item.value || item.text}>{item.text || item.value}</option>
        });
        return (
            <select onChange={this.props.onChange} defaultValue="--">
                <option key="-1" disabled value="--">--</option>
                {options}
            </select>
        );
    }
}

export default Dropdown;