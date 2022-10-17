import React from 'react';
import Card from './Card';

const ListaCitas = () => {
    return (
        <div className='border p-4 my-5'>
            <h3 className='text-center' >Citas:</h3>
            <hr />
            <div className='d-flex justify-contet-around'>
            <Card></Card>
            </div>
        </div>
    );
};

export default ListaCitas;