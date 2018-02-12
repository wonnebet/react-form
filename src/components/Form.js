import React from 'react';
import NameFields from './NameFields';
import AddressFields from './AddressFields';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameData: {
                pre: null,
                first: null,
                last: null
            },
            addressData: {
                street: null,
                city: null,
                st: null,
                zip: null
            }
        };
    }

    updatePrefix(e) {
        this.setState({
            nameData: {
                pre: e.target.value,
                first: this.state.nameData.first,
                last: this.state.nameData.last
            }
        });
    }

    updateFirst(e) {
        this.setState({
            nameData: {
                pre: this.state.nameData.pre,
                first: e.target.value,
                last: this.state.nameData.last
            }
        });
    }

    updateLast(e) {
        this.setState({
            nameData: {
                pre: this.state.nameData.pre,
                first: this.state.nameData.first,
                last: e.target.value
            }
        });
    }

    updateStreet(e) {
        this.setState({
            addressData: {
                street: e.target.value,
                city: this.state.addressData.city,
                st: this.state.addressData.st,
                zip: this.state.addressData.zip
            }
        });
    }

    updateCity(e) {
        this.setState({
            addressData: {
                street: this.state.addressData.street,
                city: e.target.value,
                st: this.state.addressData.st,
                zip: this.state.addressData.zip
            }
        });
    }

    updateSt(e) {
        this.setState({
            addressData: {
                street: this.state.addressData.street,
                city: this.state.addressData.city,
                st: e.target.value,
                zip: this.state.addressData.zip
            }
        });
    }

    updateZip(e) {
        this.setState({
            addressData: {
                street: this.state.addressData.street,
                city: this.state.addressData.city,
                st: this.state.addressData.st,
                zip: e.target.value
            }
        });
    }

    render() {
        return (
            <div>
                <NameFields
                    updatePrefix={(e) => this.updatePrefix(e)}
                    updateFirst={(e) => this.updateFirst(e)}
                    updateLast={(e) => this.updateLast(e)} /> <br />
                <AddressFields
                    updateStreet={(e) => this.updateStreet(e)}
                    updateCity={(e) => this.updateCity(e)}
                    updateSt={(e) => this.updateSt(e)}
                    updateZip={(e) => this.updateZip(e)} /> <br />
                <input type="submit" value="Add Record" onClick={() => this.props.addRow(this.state)} />
            </div>
        )
    }
}

export default Form;