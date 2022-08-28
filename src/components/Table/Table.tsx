import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Actions, { ActionsProps } from './Actions/Actions';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

function Table({ columns, data, keyField = 'id', actions, pagination, select }: TableProps){

    if(actions){

        columns = [...columns, ...[{text: 'Actions', dataField: 'actions'}]];
        data = addActions(data, actions);
        
    }

    columns = columns.map((column) => { 

        if(column.filterable){
            return { ...column, filter: textFilter() };
        }else{
            return column;
        }

    });

    pagination = pagination ? pagination : { hidePageListOnlyOnePage: true, hideSizePerPage: true };
    let selectRow: any;

    if(select){
        selectRow = { ...{ mode: 'checkbox', clickToSelect: true }, ...select };
    }

    return(
        <BootstrapTable 
            keyField={keyField}  
            data={ data } 
            columns={ columns } 
            bordered={true}
            filter={ filterFactory() }
            pagination={ paginationFactory(pagination) }
            selectRow={ selectRow }
         />
    );
}

const addActions = (data: Array<any>, actions: ActionsProps) => {
    data = data.map((row) => {

        return {
            ...row, 
            actions: <Actions route={actions.route} row={row} keyField={actions.keyField} formatter={actions.formatter} />
        };
    });

    return data;
}

export interface TableProps {
    keyField?: string;
    data: Array<any>;
    columns: Array<any>;
    rowStyle?: any;
    rowClasses?: any;
    rowEvents?: any;
    sort?: any;
    select?: { selected?: Array<any>,  onSelect?: (row: any) => any, onSelectAll?: (rows: any) => any};
    pagination?: {
        page?: number, 
        sizePerPage?: number,
        hideSizePerPage?: boolean, 
        hidePageListOnlyOnePage?: boolean,
        sizePerPageList?: Array<{ text: string, value: number }> 
        onPageChange?: (page: number) => any,
        onSizePerPageChange?: (sizePerPage: number) => any,
    },
    actions?: ActionsProps
} 

export default Table;