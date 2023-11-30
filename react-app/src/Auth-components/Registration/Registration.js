import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Registration.css';
import eye from './eye.png';
import eye_off from './eye-off-outline.png';

async function addUser(credentials) {                   //registration
  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })
  .then(res => res.json())
}


const showMessage = (mes) =>{
  console.log(mes);
}
// async function loginUser(credentials) {
//  return fetch('https://dummyjson.com/auth/login', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())

// }

export default function Registration({ setToken }) {
  const [login, setLogin] = useState();                     //login
  const [password, setPassword] = useState();               //password
  const [repeatPassword, setRepeatPassword] = useState();   //repeat password
  const [name, setName] = useState();                       //name
  const [surname, setSurname] = useState();                 //surname
  const [nickname, setNickname] = useState();               //nickname
  const [dateOfBirth, setDateOfBirth] = useState();         //date of birth

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const answer = await addUser({
      name: name,
      surname: surname,
      nickname: nickname,
      dateOfBirth: dateOfBirth,
      login:login,
      password: password
    });
    setToken(answer);
   console.log(answer);
  }

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
 }
  let message = 'success';

  password !== repeatPassword?message = 'The passwords are not the same': message = 'Success'

 return(
    <div className="registration-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <label className='firstString'>
          <div className='firstString_name'>
            <p className='text'>Name</p>
            <input type="text" onChange={e => setName(e.target.value)} />
          </div>
          <div className='firstString_surname'>
            <p className='text'>Surname</p>
            <input type="text" onChange={e => setSurname(e.target.value)} />
          </div>
        </label>

        <label className='secondString'>
          <div className='secondString_nickname'>
            <p className='text'>Nickname</p>
            <input type="text" onChange={e => setNickname(e.target.value)} />
          </div>
            <div className='secondString_dateOfBirth'>
              <p className='text'>Date Of Birth</p>
              <input type="text" onChange={e => setDateOfBirth(e.target.value)} />
            </div>
        </label>
        
        <div className='loginAndPassword'>
          <label className='login'>
            <p className='text'>Login</p>
            <input type="text" className = 'registrationInput' onChange={e => setLogin(e.target.value) } />
          </label>

          <label className='password'>
            <p className='text'>Password</p>
            <passwordr>
              <input type={showPassword ? 'text' : 'password'} className="Password" onChange={e => setPassword(e.target.value)} />
              <button type="button" className='eye' onClick={handlePasswordVisibility}>
                {showPassword ? 
                          <img src={eye_off} alt="Eye" className="Pass_eye" /> 
                          :<img src={eye} alt="Eye" className="Pass_eye" /> }
              </button>
            </passwordr>
          </label>

          <label className='password'>
            <p className='text'>Repeat password</p>
            <passwordr>
              <input type={showPassword ? 'text' : 'password'} onChange={e => setRepeatPassword(e.target.value)} className='Password'/>
              <button type="button" className='eye' onClick={handlePasswordVisibility}>
                {showPassword ? 
                        <img src={eye_off} alt="Eye" className="Pass_eye" /> 
                        :<img src={eye} alt="Eye" className="Pass_eye" /> }
              </button>
            </passwordr>
          </label>
        </div>
        <div>
        <button type="create_account" className='create_account'
            onClick={showMessage(message)}>
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </div>
 )
}
Registration.propTypes = {
  setAnswer: PropTypes.func.isRequired
 };