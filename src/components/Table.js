import React from 'react';

class Table extends React.Component {
    render() {
        const tableStyle = {
            border: '1px solid black'
        };

        const rows = this.props.rows.map((row, num) => {
            return (
                <tr key={num}>
                    <td style={tableStyle}> {row[0]} </td>
                    <td style={tableStyle}> {row[1]} </td>
                    <td style={tableStyle}> {row[2]} </td>
                    <td style={tableStyle}> {row[3]} </td>
                    <td style={tableStyle}> {row[4]} </td>
                    <td style={tableStyle}> {row[5]} </td>
                    <td style={tableStyle}> {row[6]} </td>
                </tr>
            );
        });

        return (
            <div>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={tableStyle}>Prefix</th>
                            <th style={tableStyle}>First Name</th>
                            <th style={tableStyle}>Last Name</th>
                            <th style={tableStyle}>Street</th>
                            <th style={tableStyle}>City</th>
                            <th style={tableStyle}>State</th>
                            <th style={tableStyle}>Zip Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;