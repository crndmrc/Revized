import React, { Component } from 'react'
import {SortableComponent} from './component/ToDoList/index';
import "./index.css"
export default class ApppRevized extends Component {
    state={
    element:{
        firstname:"",
        lastname:"",
        note:""
    },
    todolist:[],
}
changeHandle = (variable,value) => {

    this.state.element[variable]=value;
    this.forceUpdate();
}
clear = ()=>this.state.element={firstname:"",lastname:"",note:""};
onAdd()
{
    const {firstname,lastname,note}=this.state.element;
    if(!(firstname?.toString().length>0&&lastname?.toString().length>0&&note?.toString().length>0))return;

    var id = Math.random().toString();
    id=(parseInt(id*100000));
    const {todolist,element}=this.state;
    this.state.todolist=[...todolist,{...element,id}];
    this.clear();
    this.forceUpdate();
}
onDelete=(id)=>{
    this.state.todolist=this.state.todolist.filter(e=>e.id!==id)
    this.forceUpdate();
}
    render() {
        const {firstname,lastname,note}=this.state.element;
        return (
            <div className="wrapper">
                  <h4 className="baslik">Todo App</h4>
                    <form className="form">
                        <div className="form-group">
                        <div className="col-25">
                            <label for="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input onChange={e=>this.changeHandle("firstname",e.target.value)} value={firstname} type="text" placeholder="Adı"/>
                        </div>
                        <div className="col-25">
                            <label for="fname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input  onChange={e=>this.changeHandle("lastname",e.target.value)} value={lastname} type="text" placeholder="Soyadı"/>
                        </div>
                        <div className="col-25">
                            <label for="fname">Note</label>
                        </div>
                        <div className="col-75">
                            <textarea placeholder="Not"  onChange={e=>this.changeHandle("note",e.target.value)} value={note} name="" id="" cols="36" rows="3.5"></textarea>
                        </div>
                        </div>
                        <button className="button button1" onClick={this.onAdd.bind(this)} >Kaydet</button>
                    </form>
                    <hr/>
                    <div className="col-12">
                         <SortableComponent onDelete={(e)=>this.onDelete(e)} value={this.state.todolist} />
                    </div>
                </div>
        )
    }
}
