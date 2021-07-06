import React, { Component } from 'react';
import { Breadcrumb  } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const routes = [
	{
		path: 'index',
		breadcrumbName: 'home',
	},
	{
		path: 'first',
		breadcrumbName: 'first',
		children: [
			{
				path: '/general',
				breadcrumbName: 'General',
			},
			{
				path:'/general/id',
				breadcrumbName:'General-id'
			},
			{
				path: '/layout',
				breadcrumbName: 'Layout',
			},
			{
				path: '/navigation',
				breadcrumbName: 'Navigation',
			},
		],
	},
	{
		path: 'second',
		breadcrumbName: 'second',
	},
];

class Epone extends Component {
	state = {};
	itemRenderfunc =(route,params,routes,paths)=>{
		const last = routes.indexOf(route) === routes.length - 1;
		// console.log('route',route);
		// console.log('params',params)
		// console.log('routes',routes);
		// console.log('paths',paths)
	return last ? <span>{ route.breadcrumbName }</span> :		<Router>
	     <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    </Router>   

	}
	render() {
		return <Breadcrumb itemRender ={this.itemRenderfunc} routes={routes}></Breadcrumb>
	}
}
export default Epone;