import React from 'react';
import { useForm } from 'react-hook-form';
import ManageToDo from './ManageToDo';

const Home = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = 'https://localhost:5000/todo';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='container mt-5 w-50 mx-auto'>
            <h2 className='text-center text-success text-uppercase'>Add ToDo</h2>
            <form className='d-flex flex-column mt-3 mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border p-2 rounded' type='text' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2 border' placeholder='Description' {...register("description",)} />
                <input type="submit" value='Add Todos' className='btn-primary py-2 text-center rounded' />
            </form>
            <ManageToDo></ManageToDo>
        </div>
    );
};

export default Home;