import React from 'react';

const Categories = (props) => {
    return(
        <div className="container my-4">
            <div className="row">
                <div className="col">
                    <h4>Categories</h4>
                </div>
            </div>
            <div className="row justify-content-around align-content-center">
                <div className="col">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((term, index) => {
                            return(
                                <tr key={index}>
                                    <td>{term}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Categories;
