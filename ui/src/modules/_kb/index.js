import React from 'react'
import { hot } from 'react-hot-loader'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import KbComponent from './kbComponent'
import PCIComponent from './pciComponent'


const Routes = ({app, match, ...props}) => (
  <Switch>
    <Route {...props} exact path={match.path+'/kb'} render={(p) => <KbComponent {...p} app={app} />} />
    <Route {...props} exact path={match.path+'/kb/:resourceId'} render={(p) => <PCIComponent {...p} app={app} />} />
  </Switch>
)

export default hot(module)(Routes);