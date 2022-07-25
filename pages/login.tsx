import { NextPage } from 'next';
import React, { useState } from 'react';
import {styled} from '../styles/stitches.config';
import Input from '../components/Input';
import fetchFunction from '../functions/fetch';
const LoginPage = styled('div', {
    backgroundColor: 'gray',
    height: '100vh',
    color: 'white'
})

const LoginForm = styled('form', {
    margin: 'auto',
    height: '520px',
    width: '400px',
    backGroundColor: 'rgba(255,255,255,0.13)',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    borderRadius: '10px',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255,255,255,0.1)',
    boxShadow: '0 0 40px rgba(8,7,16,0.6)',
    padding: '50px 35px'

})

const LoginFormTitle = styled('h3', {
    fontSize: '32px',
    fontWeight: '500',
    lineHeight: '42px',
    textAlign: 'center',

})
const LoginFormButton = styled('button', {
    marginTop: '50px',
    width: '100%',
    backgroundColor: 'ffffff',
    color: '#080710',
    padding: '15px 0',
    fontSize: '18px',
    fontWeight: '600',
    borderRadius: '5px',
    cursor: 'pointer'
})
const LoginFormResetButton = styled('button', {
    margin: '0 0',
    marginTop: '5px',
    width: '45%',
    backgroundColor: 'ffffff',
    color: '#080710',
    padding: '8px 0',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '5px',
    cursor: 'pointer'
})
const LoginFormRegisterButton = styled(LoginFormResetButton, {
    marginLeft: '20px'


})




export const Login: NextPage = () => {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    console.log(email)
  return (
      <LoginPage>
          <LoginForm>
              <LoginFormTitle>
                  Login Here
              </LoginFormTitle>
              <Input label={"Email"} value={email} onChange={setEmail} isFoucus={email.length > 0} />
              <Input label={"Password"} value={pass} onChange={setPass}/>
              <LoginFormButton
              onClick={() => fetchFunction("/auth/login", email, pass)}
              >
                  Log in 
              </LoginFormButton>
              <LoginFormResetButton>
                  Forgot password
              </LoginFormResetButton>
              <LoginFormRegisterButton>
                  Register here
              </LoginFormRegisterButton>

              

          </LoginForm>

      </LoginPage>
  );
};
export default Login;