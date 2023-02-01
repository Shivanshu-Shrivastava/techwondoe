import React, { useEffect, useState } from 'react'
import Button from '../Button'
import TableForUsers from './TableForUsers'
import Modal from './Modal'
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = () => {
    const [userdata, setUserdata] = useState([])


    // Fetching the User data from axios 
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUserdata(res.data)
            }
            )
            .catch(e => console.log(e))
    }, [])

    return (
        <div>
            <Button />
            <div className='p-6   bg-white border border-gray-200 rounded-lg shadow-lg'>
                <div className='flex flex-wrap justify-between'>
                    <div>
                        <h3 className='font-bold'>Users</h3>
                        <p className='text-slate-600 text-sm'>Manage your team members and their account permission here.</p>
                    </div>
                    <div className='flex flex-wrap items-center gap-x-2 justify-between'>
                        <div class="flex space-x-2 justify-center">
                            <div>
                                <Link to='https://jsonplaceholder.typicode.com/users' download type="button" class="inline-block  px-4 py-2.5 pb-2 bg-gray-400 text-white font-medium text-xs leading-normal uppercase rounded-lg shadow-md hover:bg-gray-600 hover:text-white hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out flex align-center">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                        className="w-3 mr-2 my-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                                        </path>
                                    </svg>
                                    Download csv
                                </Link>
                            </div>
                        </div>
                        <div class="flex space-x-2 justify-center">
                            <div>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal"  type="button" class="inline-block px-3 py-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                        className="w-3 mr-2 my-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z">
                                        </path>
                                    </svg>
                                    Add user
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Here modal will appear */}
                <Modal setUserdata={setUserdata} />
                
                <TableForUsers setUserdata={setUserdata} userdata={userdata} />
            </div>
        </div>
    )
}

export default User