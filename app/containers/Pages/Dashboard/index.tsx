import React, { Component } from 'react';
import { Card, CardHeader, CardActions, CardTitle, CardBody, CardFooter, Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle, Grid, GridItem, Backdrop  } from '@patternfly/react-core';

import { H1, P, Div } from './DashboardStyle'

const card =[
    {title:"card1", temp:200, price:"$352.22", footer:"ETA"},
    {title:"card2", temp:100, price:"$886.52", footer:"ETA"},
    {title:"card3", temp:400, price:"$323.21", footer:"ETA"},
    {title:"card4", temp:600, price:"$785.23", footer:"ETA"},
]
export default class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                    <div>
                        <H1>DashBoard</H1>
                        <P>Create, Import & Manage your Dashboard here</P>
                    </div>
                        <Div>
                            {
                                card.map((item, i)=>{
                                return(
                                    <Card>
                                        <CardHeader>
                                        <CardTitle>{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                        <h2>{item.temp}</h2>
                                        <p>{item.price}</p>
                                        </CardBody>
                                        <CardFooter>
                                            {item.footer}
                                        </CardFooter>
                                    </Card>
                                )
                                })
                            }
                        </Div>
            </React.Fragment>
        )
    }
}
