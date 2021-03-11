import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../PlayerDetails/PlayerDetails.css"


const PlayerDetails = () => {
    const { idTeam } = useParams();
    console.log(idTeam)
    const [team, setTeam] = useState({});

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam])

    const { strStadiumThumb, strTeamBadge, strTeam, intFormedYear, strCountry, strStadiumLocation, strGender, strDescriptionEN } = team;
    return (
        <main>
            <header>
                <div>
                    <img
                        style={{backgroundImage:`url${strStadiumThumb}`}}className="d-block w-100"
                        src={strStadiumThumb}
                        alt=""


                    />
                </div>
            </header>
            <section>
                <section className="team-details container">
                    <div className="container m-5">
                        <h1>{strTeam}</h1>
                        <h5>Founded: {intFormedYear}</h5>
                        <h5>Country: {strCountry}</h5>
                        <h5>StadiumLocation: {strStadiumLocation}</h5>
                        <h5>Gender: {strGender}</h5>
                    </div>
                    <div className="gender-img">
                        <img src={strTeamBadge} alt="" />
                    </div>
                </section>
                <div>
                    <p>{strDescriptionEN}</p>
                </div>
            </section>
        </main>
    );
};

export default PlayerDetails;