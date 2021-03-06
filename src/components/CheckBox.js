import React, {useState} from 'react'
import { Checkbox, Collapse } from 'antd';

function CheckBox({products, filter, setFilter}) {

    const [checked, setChecked] = useState([])
    
   const ranges = [
       {
           "id": 1,
           "name": "$"
       },
       {
           "id": 2,
           "name": "$$"
       },
       {
           "id": 3,
           "name": "$$$"
       },
       {
           "id": 4,
           "name": "$$$$"
       },
   ]

    const renderCheckboxLists = () => ranges.map((value, index) => {
      
        
        // <div>
        //    <Checkbox
        //     onChange
        //     type="checkbox"
        //     checked
        //    />
        //    <span></span>
        // </div>

    })
    


    return (
        <div>
           {renderCheckboxLists}
        </div>
    )
}

export default CheckBox
