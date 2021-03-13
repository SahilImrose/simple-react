import React from 'react';

const SelectedEleven = (props) => {
    const { image, first_name, last_name, salary } = props.card;

    return (
        <div>
            <table class="table table-dark ">
                <tbody>
                    <tr>
                        <td>{first_name} {last_name}</td>
                        <td>$ {salary}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SelectedEleven;