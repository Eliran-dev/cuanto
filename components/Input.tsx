import React from 'react';
import { styled } from '../styles/stitches.config';

const LoginFormInputDiv = styled('div', {

})
const LoginFormInputLabel = styled('label', {
    display: 'block',
    marginTop: '30px',
    fontSize: '16px',
    fontWeight: '500',
    variants: {
        isFoucus: {
            foucused: {
                textAlign: 'center',
                transition: 'textAlign 2s'

            }
        }
    }
    


})
const LoginFormInput = styled('input', {
    display: 'block',
    height: '50px',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.07)',
    padding: '0 10px',
    marginTop: '8px',
    fontSize: '14px',
    fontWeight: '300',
    color: '#black',

}) 

 const Input = (props: any) => {
  return (
      <LoginFormInputDiv>
          <LoginFormInputLabel>
              {props.label}
              <LoginFormInput
              type={props.type}
              value={props.value}
              onChange={(e) => props.onChange(e.target.value)}
              placeholder={props.label}
              onKeyPress={(event) => event.key == "Enter" ? props.function(props.setStock,props.value) : console.log("SS")}
              
              >
                  
              </LoginFormInput>
          </LoginFormInputLabel>
      </LoginFormInputDiv>


  );
};

export default Input;