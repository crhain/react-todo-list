import React from 'react'; //es6 version
//var React = require('react');
import { render } from 'react-dom'; //es6 version
//var render = require('react-dom').render;
import  App from '../components/App';

render(
	// define the econompassing component,
	// DOM element we want to mount it to
	<App/>,
	document.getElementById('app')
);