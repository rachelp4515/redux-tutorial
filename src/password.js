import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './actions'
import PasswordList from './password-list'
import zxcvbn from 'zxcvbn'

function generatePassword() {
    console.log('generating password')
    let pw = []
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}|:"?><';
    const charsLength = chars.length
    while (pw.length < 9) {
        pw += chars.charAt(Math.floor(Math.random() * charsLength))
    }
    const zxc = zxcvbn(pw)
    console.log(zxc)
    return pw
}

function Password() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('p@$$w0rd')
    const [desc, setDesc] = useState('')
    return (
        <div>
            <div>Name: {name}<br /> Password:  {password}  <br /> Description: {desc}</div>
            <div>
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={(e) => setPassword(generatePassword)}>Generate</button>
            </div>

            <div>
                <input
                    placeholder='set a description'
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                />
            </div>
            <div>
                <input
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <button onClick={(e) => {
                    dispatch(addPassword(name, password, desc))
                }}>Save</button>
            </div>
            <div>
                <h3>Saved Passwords</h3>
                <PasswordList />
            </div>
        </div>
    )
}

export default Password