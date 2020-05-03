// Importing combination 
import React, {Component} from "react";

class TodoForm extends Component  {
    constructor(props) {
        super(props);
        this.inputValue = null;
        this.setInputSearchRef = e => {
            this.inputValue = e;
         }
    }
    doSubmit = (e) => {
		e.preventDefault();
		this.props.onTaskSubmit(this.inputValue.value);
		this.inputValue.value = "";
		return;
	}
    render(){
		return (
			<div className="commentForm vert-offset-top-2">
				<div className="clearfix">
					<form className="todoForm form-horizontal" onSubmit={this.doSubmit}>
						<div className="form-group d-flex">
							<label htmlFor="task" className="mt-auto control-label">Add Todo</label>
							<div className="col-md-8">
								<input type="text" id="task" ref={this.setInputSearchRef} className="form-control" placeholder="What do you need to do?" />
							</div>
							<input type="submit" value="Save Todo" className="btn btn-primary" />
						</div>
					</form>
				</div>
			</div>
		);
    }
}
// Exporting the component 
export default TodoForm; 