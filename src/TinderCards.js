import React, {useState, useEffect} from 'react'
// rfce is the shortcode to create react functional components
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios'

function TinderCards() {
    const [people, setPeople] = useState([])
    useEffect(() =>{
        async function fetchData(){
            const req = await axios.get('/tinder/cards')
            setPeople(req.data)
        }
        fetchData()
    }, [])
    const swiped =(direction, nameToDelete) =>{
        console.log("Removing" + nameToDelete);
        // setLastDirection(direction)
    }

    const outOfFrame = (name) =>{
        console.log(name+ "left the screen");
    }
    return (
        
        <div className="TinderCards">
            <div className="tinder_cards_container">
            {people.map((person) =>(
                <TinderCard className="swipe"
                keys={person.name}
                preventSwipe={['up', 'down']}
                onSwipe={(dir) =>swiped(dir, person.name)}
                onCardLeftScreen= { () => outOfFrame(person.name)}
                >
                    <div
                    style={{backgroundImage:`url(${person.imgUrl})`}}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
            
        </div>
    )
}

export default TinderCards
