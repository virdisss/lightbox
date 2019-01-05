import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root>
    <App />
</Root>, document.getElementById('root'));

serviceWorker.unregister();
