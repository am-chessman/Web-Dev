import React, { useState } from 'react'
import '../App.css'

export default function App() {
  const [passCheck, setPassCheck] = useState("")
  const [passConfirm, setPassConfirm] = useState("")
  const [error, setError] = useState("")

  function checkPass(event) {
    const passInput = event.target.value
    setPassCheck(passInput)
    setError("")
  } 

  function confirmPass (event) {
    const passInput = event.target.value
    setPassConfirm(passInput);
    setError("")
  };

  return (
    <form action="#" method='post' onSubmit={(e) => {
      e.preventDefault();
      if (passCheck !== passConfirm) {
        setError("Passwords do not match")
      } else {
        setError("")
      }
    }}>
      <input type="text" name="username" placeholder='Username'/>
      <input onChange={checkPass} type="password" name="newPassword" placeholder='Password' />
      <input onChange={confirmPass} type="password" name="confirmPassword" placeholder='Confirm password' />
      {error && <p style={{color: "#fff", margin: "0"}}>{error}</p>}
      <button type="submit">
        Create Account
      </button>
    </form>
  )
}
