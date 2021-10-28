import React from 'react'
import {Route,Switch,Redirect} from "react-router"
import Form from './component/Form'
import Table from './component/Table'

const Router = () => {
    return (
        <>
        <Switch>
            <Route exact path="/" component ={() => <Form/>}/>
            <Route exact path="/table" component = {()=> <Table/>}/>
        </Switch>
            
        </>
    )
}

export default Router
