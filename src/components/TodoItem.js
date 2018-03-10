import React from 'react';
import '.TodoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }
}