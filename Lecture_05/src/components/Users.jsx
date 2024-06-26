import React from 'react'
import { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        
        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });

                console.log("Response of api call: ", response.data)
                isMounted && setUsers(response.data)
            } catch (error) {
                console.log("location is: ", location)
                console.error(error)
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

    return (
        <article>
            <h2>Users list</h2>
            {
                users?.length
                    ? (
                        <ul>
                            {users.map((user, i) => <li key={i}>
                                {user?.username}
                            </li>)}
                        </ul>
                    ) : (
                        <p>No users to display</p>
                    )
            }
        
        </article>
    )
}

export default Users