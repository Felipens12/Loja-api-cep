import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home/" element={<Home />} />
                <Route path="/login/" element={<Login />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes