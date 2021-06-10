import React, {useState} from 'react'
// rfce is the shortcode to create react functional components
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

function TinderCards() {
    const [people] = useState([
        {
            name:"Elon Musk",
            imgUrl: "https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1-1536x1053.jpg"
        },
        {
            name: "Awam Victor",
            imgUrl:"https://avatars.githubusercontent.com/u/21356678?s=400&u=fd6682134c3ee393ecbd4789d5d514e066cf49b7&v=4"
        },
        {
            name: "Jeff Bezos",
            imgUrl:"data:image/jpeg;base64,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"
        }
    ])
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
