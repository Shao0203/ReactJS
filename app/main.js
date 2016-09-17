'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment/CommentBox';

ReactDOM.render (
	<CommentBox url="app/comments.json" />,
	document.getElementById('app')
);