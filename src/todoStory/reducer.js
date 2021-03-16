const defaultState={
    //这里边写一些共享数据的初始状态
     content:'to do list',
     list:[
         '早上起来做饭',
         '安装工具',
         '开始真真正正的练习',
         '把自己的技术提升上去',
         '形成自己的项目结构',
     ]
}
export default (state = defaultState,action)=>{
    // 检测输入的变化
    if(action.type === 'change_input_value'){
        let newState = JSON.parse(JSON.stringify(state)); //深拷贝state;
        newState.content = action.content;
        return newState;
    }
    //增加
    if(action.type === 'addItem'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.content);
        newState.content = '';
        return newState;
    }
    //删除
    if(action.type === 'delete_item'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state ;
    //这里的state:是整个项目中需要管理的数据信息。
}