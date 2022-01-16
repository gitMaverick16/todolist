import React from 'react';
import './TodoItem.css';
import checkicon from '../../assets/img/check.png';
import deleteicon from '../../assets/img/delete.png';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className="icon-check"  onClick={props.onComplete}>
        <img src={checkicon}></img>
      </span>
      <p className={`TodoItem-p ${props.completed && "item-completed"}`}>
        {props.text}
      </p>
      <span
        className="icon-delete" onClick={props.onDelete}>
        <img src={deleteicon}></img>
      </span>
    </li>
  );
}

export { TodoItem };