'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Apps from './containers/apps';
import Footer from './containers/footer';

let store = createStore(reducers);

render(
	<Provider store={store}>
		<div>
			<Apps />
			<Footer />
		</div>
	</Provider>, document.getElementById('wrap')
)