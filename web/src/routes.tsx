import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing'
import Orphanage from './pages/Orphanage'
import OrphanageMap from './pages/OrphanagesMap'
import CreateOrphanage from './pages/CreateOrphanage'


function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrphanageMap}/>

                <Route path="/orphanages/create" component={CreateOrphanage}/>
                <Route path="/orphanage/:id" component={Orphanage}/>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;