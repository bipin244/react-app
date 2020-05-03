// Importing combination 
import React, {Component} from "react";
class TodoItem extends Component  {
    render(){
        var classes = 'list-group-item clearfix';
		return (
			<li className={classes}>
				{this.props.task}
			</li>
		);
    }
}
// Exporting the component 
export default TodoItem; 