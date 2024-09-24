import React from "react";
import Table from "react-bootstrap/Table";
function User(props) {
    const users = [
        {
            name: 'Max', email: 'max@test.com', age: 20,
            adress: [
                { Hno: 'house # abc123', city: 'Los Angles', State: 'CA', Country: 'America' },
                { Hno: 'house # abc123', city: 'Los Angles', State: 'CA', Country: 'America' },
                { Hno: 'house # abc123', city: 'Los Angles', State: 'CA', Country: 'America' },
                { Hno: 'house # abc123', city: 'Los Angles', State: 'CA', Country: 'America' }
            ]
        },
        {
            name: 'Ali', email: 'ali@test.com', age: 21,
            adress: [
                { Hno: 'house # abc123' },
                { city: 'Los Angles' },
                { State: 'CA' },
                { Country: 'America' }
            ]
        },
        {
            name: 'Mahad', email: 'mahad@test.com', age: 22,
            adress: [
                { Hno: 'house # abc123' },
                { city: 'Los Angles' },
                { State: 'CA' },
                { Country: 'America' }
            ]
        },
        {
            name: 'Arshad', email: 'mahad@test.com', age: 22,
            adress: [
                { Hno: 'house # abc123' },
                { city: 'Los Angles' },
                { State: 'CA' },
                { Country: 'America' }
            ]
        },
        {
            name: 'Sidhu', email: 'mahad@test.com', age: 22,
            adress: [
                { Hno: 'house # abc123' },
                { city: 'Los Angless' },
                { State: 'CA' },
                { Country: 'America' }
            ]
        },
    ]
    return (
        <div>
            <h1>User Component and Table in React</h1>
            <Table striped bordered>
                <tbody>
                    <tr>
                        <th>Serial No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>

                                <td>
                                    <Table striped bordered hover>
                                        <tbody>
                                            {
                                                item.adress.map((data, i) =>
                                                    <tr key={i}>
                                                        <td>{data.Hno}</td>
                                                        <td>{data.city}</td>
                                                        <td>{data.State}</td>
                                                        <td>{data.Country}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default User;