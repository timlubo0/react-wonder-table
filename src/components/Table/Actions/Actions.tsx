import React from "react";
import './Actions.css';
export interface ActionsProps{
    route?: string; 
    keyField?: string;
    handleDelete?: () => void;
    formatter?: (row: any) => any;
    row?: any;
}

function Actions({ route, keyField, formatter, row }: ActionsProps){

    const keyValue = keyField ? row[keyField] : '';

    let actions = {
        details: <a href={`/${route}/${keyValue}`} className="btn btn-primary">Details</a>,
        edit: <a href={`/${route}/edit/${keyValue}`} className="btn btn-warning">Edit</a>,
        remove: <a onClick={() => console.log("")} href={`#`} className="btn btn-danger">Remove</a>
    };

    if (formatter) {
        actions = { ...actions, ...formatter(row) };
    }

    const { details, edit, remove } = actions;

    return(
        <>
            { details }
            { edit }
            { remove }
        </>
    );
}

export default Actions;