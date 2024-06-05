import React, { useContext } from 'react'
import UserContext from '../Context/UserContext';

function Profile(){
    const{user} = useContext(UserContext);
    if(!user) return <div className='text-center'>Please Log In</div>
    return <div className='text-center text-xl font-semibold'>WelCome {user.userName}</div>
}

export default Profile;