import React, {useState} from "react";
import TableList from '../../components/Dashboard/TableList'

export default function PreferencesView(props) {

    return (
        <div>
            <TableList data={props}/>
        </div>
    )

}
