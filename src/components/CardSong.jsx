import React, { Fragment } from 'react'
import {
    CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function CardSong(props) {
    return (
        <Fragment>
            <img className="CardIMG" src={props.state.img} alt="thumbnail" />
            <CardBody>
                <div className="titel">
                    <CardTitle tag="h5" className="left white">{props.state.title}</CardTitle>
                    <span className="text-muted tahun"> {props.state.year} </span>
                </div>
                <CardSubtitle tag="h6" className="mb-2 green">{props.state.singer}</CardSubtitle>
                <CardText></CardText>
            </CardBody>
        </Fragment>
    )
}

export default React.memo(CardSong);
