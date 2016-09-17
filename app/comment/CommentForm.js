'use strict';

import React from 'react';

class CommentForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        console.log('Submit Form...');

        let author = this.refs.author.value,
            text = this.refs.text.value;

        console.log(author, text);

        this.props.onCommentSubmit({author, text, date: '17/09/2016'});
    }

    render () {
        return (
        	<form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
        		<div className="field">
        			<input type="text" placeholder="Name" ref="author" />
        		</div>
        		<div className="field">
        			<textarea placeholder="Message" ref="text"></textarea>
        		</div>
        		<button type="submit" className="ui blue button">
        			Add
        		</button>
        	</form>
       	);
    }
}

export default CommentForm;
