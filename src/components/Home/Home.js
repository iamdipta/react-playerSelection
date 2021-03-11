import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Teams from '../Teams/Teams';

const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])

    return (
        <div className="container">

            <div className="row"  style={{ backgroundColor:'darkBlue' }}>

                {
                    team.map(team => <Teams key={team.idTeam} teams={team}></Teams>)
                }
            </div>
            <Container className="text-center" >
                &copy; Dipta Roy, All right reserved {new Date().getFullYear()}
            </Container>
        </div>
    );
};

export default Home;