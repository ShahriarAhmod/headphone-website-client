import React from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import DashBoardNav from '../DashBoard/DashBoardNav/DashBoardNav';
import Footer from '../Home/Footer/Footer';

const MakeAdmin = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {register} = useAuth()

    const provideAdminName = (e) => {
        setName(e.target.value)
    }

    const provideAdminEmail = (e) => {
        setEmail(e.target.value)
    }

    const provideAdminPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleNewAdmin = () => {
        register(name, email, password)
        console.log(name);

        const user = {email}
        fetch('https://enigmatic-reef-99485.herokuapp.com/makeadmin/submit',{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            const hello = ''
            if(data.upsertedId === typeof(hello) || data.upsertedCount > 0 || data.modifiedCount > 0){
                alert('Admin Added')
            }
        })
    }

    const handleMakeAdmin = () => {
        const user = {email}
        fetch('https://enigmatic-reef-99485.herokuapp.com/makeadmin/submit',{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            const hello = ''
            if(data.upsertedId === typeof(hello) || data.upsertedCount > 0 || data.modifiedCount > 0){
                alert('Admin Added')
            }
        })
    }


    return (
        <div>
            <DashBoardNav/>
            <div className="mt-5">
                <div className='m-3'>
                    <h3>Make a new Admin</h3>
                    <input onChange={provideAdminName} type="text" className='mt-2 p-1' style={{width:'300px', border: '1px solid grey', borderRadius: '5px'}} placeholder='Admin Name' />
                    <br />
                    <input onChange={provideAdminEmail} type="email" className='mt-2 p-1' style={{width:'300px', border: '1px solid grey', borderRadius: '5px'}} placeholder='Admin Email Address' />
                    <br />
                    <input onChange={provideAdminPassword} type="password" className='mt-2 p-1' style={{width:'300px', border: '1px solid grey', borderRadius: '5px'}} placeholder='Give A Password' />
                    <br />
                    <button onClick={handleNewAdmin} className='btn btn-secondary mt-2' style={{width: '250px'}}>Make a New Admin</button>
                </div>
                <br/>
                <br/>
                <div className='m-3 pb-5'>
                    <h4>Make Admin with existing user</h4>
                    <input onChange={provideAdminEmail} type="email" className='mt-1 p-1'  style={{width:'300px', border: '1px solid grey', borderRadius: '5px'}} placeholder='Admin Email Address...' />
                    <br />
                    <button onClick={handleMakeAdmin} className='btn btn-secondary mt-2'>Make Admin</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MakeAdmin;