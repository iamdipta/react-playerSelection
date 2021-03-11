
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Card, Button, } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Teams = (props) => {
    const { strTeam, strCountry, strTeamBadge, idTeam } = props.teams;
    const history = useHistory();
    return (
        <div className="col-sm-4">

            <Card style={{ width: '15rem', borderRadius: '15px' }} className=" m-3 p-3 text-center">
                <div>
                    <Card.Img style={{ height: '120px', width: '120px' }} variant="top" src={strTeamBadge} />
                </div>
                <Card.Body >
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Country: {strCountry}</Card.Text>
                    <Button onClick={() => history.push(`/teams/${idTeam}`)} variant="primary">Preview <FontAwesomeIcon icon={faArrowAltCircleRight} /></Button>
                </Card.Body>

            </Card>

        </div>






    );
};

export default Teams;