'use client'

import { UserDetailsContext } from '../context/UserDetailsContext';
import { supabase } from '../services/superbaseClient'
import React, { useContext, useEffect, useState } from 'react'

const Provider = ({ children }) => {

    const [user, setUser] = useState();

    const createNewUser = () => {
        supabase.auth.getUser().then( async ({ data: {user} }) => {
            let { data: Users, error} = await supabase
            .from('Users')
            .select("*")
            .eq('email', user?.email);
            
            if (Users.length === 0) {
                await supabase
                .from('Users')
                .insert([
                    { email: user?.email, name: user?.user_metadata?.name, picture: user?.user_metadata?.picture }
                ])
                
                setUser(user);
                return;
            }
            console.log('Users:', Users);
            setUser(Users[0]);
        });
    };

    useEffect(() => {
        createNewUser();
    }, []);

    return (
        <UserDetailsContext.Provider value={{ user, setUser }}>
            <div>{children}</div>
        </UserDetailsContext.Provider>
    )
}

export default Provider;

export const useUserDetailsContext = () => {
    const context = useContext(UserDetailsContext);
    if (!context) {
        throw new Error('useUserDetailsContext must be used within a UserDetailsProvider');
    }
    return context;
}