import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

function AddToList({booklist , deleteBook}) {

    return booklist.map(book => 
        <tr key={book.number}>
            <td>{book.number}</td>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td onClick={() => deleteBook(book.number)}>
                <Icon role='button' icon={trash} />
            </td>
        </tr>
    )
}

export default AddToList