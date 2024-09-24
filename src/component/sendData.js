import React from 'react';
import Button from 'react-bootstrap/Button';
import { forwardRef } from 'react';

function SendData(props,ref) {
    const name = {
        FirstName: 'Ahmad',
        LastName: 'Majeed'
    }
    function submitForm(e) {
        alert('Kam ker raha hai')
        e.preventDefault()
    }
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Component Form Handling</h2>
            <form onSubmit={submitForm} style={{ textAlign: 'center' }}>
                <input type='text' placeholder='Enter your email' /><br/>
                <br></br><br></br>
                <input type='text' placeholder='Enter your password' /><br/>
                <br></br><br></br>
                <Button type='submii' variant="dark" style={{ marginLeft: '10px' }}>Submit</Button>
            </form>
            <div>
                <input type='text' ref={ref}/> 
            </div>
        </div>
    );
}

export default forwardRef(SendData);