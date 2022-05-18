import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageToDo = () => {
    const [courses, setCourses] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/todo')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
            })
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure yo want to delete?')
        if (proceed) {
            // console.log('delete item', id)
            const url = `https://murmuring-waters-70415.herokuapp.com/todo/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = courses.filter(course => course._id !== id);
                        setCourses(remaining)
                    }
                })
        }
    }
    return (
        <div className='container my-5'>

            <h2 className='text-center text-secondary mb-3 text-uppercase text-success'>Inventory Statement</h2>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4' />

            <table className=''>

                <thead>

                    <tr className='bg-custom text-dark'>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        courses.map(course =>
                            <tr>
                                <td data-label="Name">{course.name}</td>
                                <td data-label="Name">{course.description}</td>

                                <td>
                                    <button onClick={() => handleDelete(course._id)} className=' text-dark btn fs-6 border-3 border-danger rounded-pill'><FontAwesomeIcon className=' fs-6 text-danger ' style={{ cursor: "pointer" }} icon={faTrash}></FontAwesomeIcon><span>Delete</span></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ManageToDo;