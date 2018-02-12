import React from 'react';
import Form from './Form';
import Table from './Table';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Welcome to the React FormTable!",
            formData: [{
                rows: Array(7).fill(null)
            }]
        };

    }

    addRow(data) {
        var current = this.state.formData.slice();
        current.push([data.nameData.pre, data.nameData.first, data.nameData.last, data.addressData.street,
        data.addressData.city, data.addressData.st, data.addressData.zip]);

        this.setState(
            {
                formData: current
            }
        );
    }

    render() {
        return (
            <div>
                <h2> {this.state.text} </h2> <br /> <br />
                <Form
                    addRow={(data) => this.addRow(data)} /> <br /> <br />
                <Table
                    rows={this.state.formData} />
            </div>
        )
    }
}

export default Layout;