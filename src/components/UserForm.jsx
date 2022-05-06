import React, { useState } from  'react';
    
    
const UserForm = () => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const[confirmPassword, setConfirmPassword]=useState('');
    
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password };
        console.log("Welcome", newUser);
    };
    

    const validateUser= (input)=>{
        if( input.length < 2){
            return false;
        } else{
            return true;
        }
    }

    const validatePassword=()=>{
        if(password.length < 8){
            return false;
        }  else {
            if(password !== confirmPassword){
            return false;
        } else {
            return true;}
        }
        } 

    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input  value={firstName} onChange={ (e) => setFirstname(e.target.value) } />
                <p>{validateUser (firstName) ? "" : 'First name required!'}</p>
            </div>
  <div>
                <label>Last Name: </label> 
                <input  value={lastName} onChange={ (e) => setLastname(e.target.value) } />
                <p>{validateUser (lastName) ? "" : 'Last name required!'}</p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input value={email} onChange={ (e) => setEmail(e.target.value) } />
                <p>{validateUser (email) ? "" : 'Email required!'}</p>
            </div>
            <div>
                <label>Password: </label>
                <input value={password} onChange={ (e) => setPassword(e.target.value) } />
                <p>{validatePassword(password) ? "" : 'Password required!'}</p>
                <p>{validatePassword(confirmPassword) ? "" : 'Password must match!'}</p>
            </div>

             <div>
                <label>Confirm Password: </label>
                <input value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                
               
            </div>

        </form>

</div>
    );
};
    
export default UserForm;