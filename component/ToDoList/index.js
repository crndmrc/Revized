import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value,onDelete}) => <li>
    <h4>{value?.firstname} &nbsp; {value?.lastname} </h4>
    <p>
        {
            value?.note
        }
        <button onClick={()=>onDelete(value?.id)} className="button2">Delete</button>
    </p>

</li>);

const SortableList = SortableContainer(({ items,onDelete }) => {
    return (
        <ul>
            {items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} onDelete={onDelete} />
            ))}
        </ul>
    );
});

export  function SortableComponent(props) {

    const [items, setitems] = useState([])
    const onSortEnd = ({ oldIndex, newIndex }) => {
       
        setitems(arrayMove(items, oldIndex, newIndex))
        
    };
    useEffect(() => {
        
        setitems(props.value)

    }, [props])
    return <SortableList onDelete={props.onDelete} items={items} onSortEnd={onSortEnd} />
}
export default SortableComponent