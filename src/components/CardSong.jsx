import React, { Fragment } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardSong(props) {
    return (
        <Fragment>
            <Card>
                <CardImg top width="100%" src={props.state.img} alt="Card image cap" />
                <CardBody>
                    <div className="titel">
                        <CardTitle tag="h5" className="left">{props.state.title}</CardTitle>
                        <span className="text-muted tahun"> {props.state.year} </span>
                    </div>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.state.singer}</CardSubtitle>
                    <CardText></CardText>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default CardSong;
