import React from 'react';
import DefaultLayout from "../start-layout/default-layout"
import DataGrid from "../simple-grid/grid";

const DataPage = () => {
    return (
        <DefaultLayout>
            <h1><i className="fa fa-table"
                   aria-hidden="true"></i> Data Example</h1>
                <DataGrid />
            </DefaultLayout>
    );
};

export default DataPage;