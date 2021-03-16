import React from 'react';
import 'antd/dist/antd.css'
import '../App.css';
// import Lists from './List';
import { Input,Button,List } from 'antd';
import store from '../todoStory/index';
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        // this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange)
    }
    // 订阅redux值得变化
    storeChange=()=>{
        this.setState(store.getState());
        console.log("this.state",this.state);
    }
    // input框得change事件
    changeInputValue=(e)=>{
        const action = {
            type:'change_input_value',
            content:e.target.value
        }
        store.dispatch(action);
        //store 只是一个仓库，并没有管理能力，它会把接收到的action自动转发给Reducer,写到这里看不到任何的结果
    }
    //增加一项内容
    addItem = ()=>{
      const action ={
          type:'addItem',
      }
      store.dispatch(action);
    }
    //删除其中的一项
    deleItem=(index)=>{
        const action ={
            type:'delete_item',
            index,
        }
        store.dispatch(action);
    }
    render(){
        return <div className="todo">
            <h3>零聚通生态圈管理系统</h3>
            <div>
                <Input placeholder={this.state.content} style={{ width:'250px'}} onChange={this.changeInputValue}></Input>
                <Button  type="primary" onClick={this.addItem}>增加</Button>
            </div>
            <div className="list-wrap">
             {/* <Lists></Lists> */}
             <List bordered 
                dataSource= { this.state.list}
                renderItem={(item,index)=><List.Item title={item} onClick={()=>{this.deleItem(index)}}>{item}</List.Item>}
            ></List>
            </div>
        </div>
    }
}
export default TodoList;
