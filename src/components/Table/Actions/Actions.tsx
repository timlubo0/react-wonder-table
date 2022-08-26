import React, { useState } from "react";
import './Actions.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from '@mdi/react';
import { mdiInformation, mdiPencilBoxOutline, mdiDelete } from '@mdi/js';
import { BrowserRouter as Router, Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

interface ActionsProps{
    route?: string; 
    key?: string;
    handleDelete?: () => void,
}

interface Actions{
    details: any;
    edit: any;
    remove: any;
}

const Actions = ({ route, key, handleDelete }: ActionsProps): Actions => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const actions = {
        details: <Router><Link to={`/${route}/${key}`} className="btn btn-primary"><Icon path={mdiInformation} size={1}/></Link></Router>,
        edit: <Router><Link to={`/${route}/${key}`} className="btn btn-warning"><Icon path={mdiPencilBoxOutline} size={1}/></Link></Router>,
        remove: <Router>
                <Link onClick={() => setIsModalOpen(true)} to={`#`} className="btn btn-danger"><Icon path={mdiDelete} size={1}/></Link>
                <DeleteModal show={isModalOpen} handleConfirm={() => handleDelete} handleClose={() => setIsModalOpen(false)} />
            </Router>
    };

    return actions;
}

export default Actions;