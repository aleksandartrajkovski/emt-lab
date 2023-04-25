import React from 'react';
import { Link } from 'react-router-dom';

const BookTerm = (props) => {
    return (
        <tr>
            <td align="center" scope="col">{props.term.name}</td>
            <td align="center" scope="col">{props.term.category}</td>
            <td align="center" scope="col">{props.term.author ? `${props.term.author.name} ${props.term.author.surname}` : ''}</td>
            <td align="center" scope="col">{props.term.availableCopies}</td>
            <td align="center" scope="col" className="text-right justify-content-center">
                <a title="Delete" className="btn btn-danger m-2" onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className="btn btn-outline-primary m-2" onClick={() => props.onEdit(props.term.id)} to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <Link className="btn btn-outline-success m-2" onClick={() => props.onMarkAsTaken(props.term.id)} to="/books">
                    Mark as taken
                </Link>
            </td>
        </tr>
    );
};

export default BookTerm;
