// Importing combination 
import React, {Component} from "react";
import  TodoItem  from "./TodoItem.js";

class TodoList extends Component  {
    render(){
        var listNodes = this.props.data.map(function (listItem) {
			return (
				<TodoItem key={listItem.title} task={listItem.title} />
			);
		},this);
		return (
			<ul className="list-group">
				{listNodes}
			</ul>
		);
    }
}
// Exporting the component 
export default TodoList; 