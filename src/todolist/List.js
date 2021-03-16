import React from 'react';
import { List } from 'antd';
class Lists extends React.Component{
    render(){
        return <List bordered 
        // dataSource=[]
        renderItem={item=><List.Item title={ item }>{item}</List.Item>}
        >
        
        </List>
    }
}
export default Lists;