'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todos from './reducers';
import Apps from './containers/apps'

let store = createStore(todos);

render(
	<Provider store={store}>
		<Apps />
	</Provider>, document.getElementById('wrap')
)