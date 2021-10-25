import React from 'react';
import { Route } from 'react-router-dom';

import About from './Screen/About';
import Contact from './Screen/Contact';
import Help from './Screen/Help';
import Home from './Screen/Home';
import HowItWorks from './Screen/HowItWorks';
import Privacy from './Screen/Privacy';
import Terms from './Screen/Terms';

const Routes = () => {
    return (
        <div>
            <Route path='/' exact component={Home} />
            <Route path='/how-it-works' exact component={HowItWorks} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/about-us' exact component={About} />
            <Route path='/privacy' exact component={Privacy} />
            <Route path='/terms-of-use' exact component={Terms} />
            <Route path='/help' exact component={Help} />
        </div>
    )
}
export default Routes;
