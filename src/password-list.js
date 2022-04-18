import { useState } from 'react'
import { connect, useSelector } from 'react-redux'

function PasswordList() {
  const passwords = useSelector((state) => state.passwords)

  const passwordList = passwords.map((pass, index) => {
    return (
      <div key={index}>
        name:{pass.name} <br /> password: {pass.password} <br /> description: {pass.desc}
      </div>)
  })
  
  return (
    <div>
      {passwordList}
    </div>
  )
}

export default PasswordList