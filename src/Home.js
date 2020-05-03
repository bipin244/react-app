// Importing combination 
import React, {Component} from "react";
import  TodoList  from "./TodoList.js";
import  TodoForm  from "./TodoForm.js";
import { db } from "./firebase.js";
class Home extends Component  {
    constructor(props) 
    { 
        super(props);  
        this.state = {
            data:[]
        }
    } 
    componentDidMount(){
        this.getDataFromFirebase();
    }
    getDataFromFirebase = () => {
        db.collection("todos_test")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log("data :",data);
            this.setState({
                data:data
            })
        });
    }
    handleSubmit = (data) => {
        db.collection("todos_test").doc(new Date().getTime().toString()).set({
            title: data
        })
        .then(() => {
            this.getDataFromFirebase();
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    } 
    render() {
		return (
            <section className="container vert-offset-top-2">
		  	    <div id="todoBox" className="todoBox col-xs-6 col-xs-offset-3">
                    <div className="well mt-4">
                        <TodoForm onTaskSubmit={this.handleSubmit} />
                        <hr />
                        <h1 className="vert-offset-top-0">To do:</h1>
                        <TodoList data={this.state.data} />
                    </div>
                </div>
		    </section>
		);
	}
}


// Exporting the component 
export default Home; 