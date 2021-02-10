import {useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { BillboardRoutes } from '../routers/BillboardRoutes';
import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {

    useEffect(() => {
        
    }, [])


    return (
        <Router>
        <div>
            <Switch>
            <Route exact path="/login" component={LoginScreen}/>
            <Route path="/" component={BillboardRoutes}/>
            </Switch>
        </div>
    </Router>
    )
}
