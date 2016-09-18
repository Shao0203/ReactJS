'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment/CommentBox';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';

/*
ReactDOM.render (
	<CommentBox url="app/comments.json" />,
	document.getElementById('app')
);
*/

class App extends React.Component {
    componentDidMount() {
    	console.log('111, App did mount');
    }
    componentWillReceiveProps() {
    	console.log('333, App will receive props');
    }
    componentDidUpdate() {
    	console.log('444, App did update');
    }

    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (
        	<div>
        		<div className="ui secondary pointing menu">
        			<Link to="/" className="item">Home</Link>
        			<Link to="/tv" className="item">TV</Link>
        		</div>
        		
        		{this.props.children}
        	</div>
        );
    }
}

class TV extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'TV';
    }
    render() {
        return (
        	<div>
        		
        		{this.props.children}
        	</div>
        );
    }
}

class Show extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
        	<div>
        		
        		{this.props.children}
        	</div>
        );
    }
}

class IndexHome extends React.Component {
    componentDidMount() {
    	console.log('222, Home did mount');
    }
    componentWillUnmount() {
    	console.log('555, App will unmount');
    }    
	render() {
		return (
			<div className="ui info message">Home in App</div>
		);
	}
}
class IndexTV extends React.Component {
	render() {
		return (
			<div className="ui info message">TV List</div>
		);
	}
}
class IndexShow extends React.Component {
	render() {
		return (
			<div className="ui info message">Show {this.props.params.id}</div>
		);
	}
}

function handleEnter() {
	console.log('enter');
}
function handleLeave() {
	console.log('leave')
}

ReactDOM.render((
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={IndexHome} />
			<Route path="tv" component={TV}>
				<Redirect from="shows/:id" to="/shows/:id" />
				<IndexRoute component={IndexTV} />
				<Route path="/shows/:id" component={Show} 
				onEnter={handleEnter} onLeave={handleLeave}>
					<IndexRoute component={IndexShow} />
				</Route>
			</Route>
		</Route>
	</Router>	
), document.getElementById('app'));
