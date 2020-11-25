import React, { Fragment } from 'react'
import {
    CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function CardSong(props) {
    return (
        <Fragment>
            <img className="CardIMG" src="https://matamatamusik.com/wp-content/uploads/2020/02/anne-marie-brit-awards-red-carpet-2017-billboard-1548-1024x677.jpg" alt="thumbnail" />
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
