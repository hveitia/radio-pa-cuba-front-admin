import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { BillboardScreen } from '../components/billboard/BillboardScreen';
import { Navbar } from '../components/ui/Navbar';

export const BillboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container position-normal">
                <Switch>
                    <Route exact path="/billboard" component={BillboardScreen} />
                    <Redirect to="/billboard" />
                </Switch>
            </div>
        </>
    )
}
