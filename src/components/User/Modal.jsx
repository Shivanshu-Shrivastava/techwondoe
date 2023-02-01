import React, { useState, useEffect } from 'react'
const Modal = (props) => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [status, setStatus] = useState('Active')
    const [lastlogin, setLastlogin] = useState(new Date().toLocaleString())


    //    Adding user data to table
    const submit = (e) => {
        e.preventDefault()
        props.setUserdata((prev) => {
            return [{ name, email, role, status, lastlogin }].concat(prev)
        })


    }

    return (
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog relative w-auto pointer-events-none">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Add User</h5>
                        <button type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={submit}>
                        <div className="modal-body relative p-4">

                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-base font-medium text-gray-900 ">Name</label>
                                <input onChange={e => { setName(e.target.value) }} type="text" id="name" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Full Name" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 ">Email address</label>
                                <input onChange={e => setEmail(e.target.value)} type="email" id="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="abc@example.com" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 ">Role</label>
                                <input onChange={e => setRole(e.target.value)} type="text" id="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Role" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 ">Status</label>
                                <select onChange={e => setStatus(e.target.value)} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                    <option value='Active' selected>Active</option>
                                    <option value="Invited">Invited</option>

                                </select>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 ">Last Login</label>
                                <input onChange={e => setLastlogin(e.target.value)} type="text" id="email" disabled value={new Date().toLocaleString()} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" required />
                            </div>

                        </div>
                        <div
                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button" className="px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" >Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal