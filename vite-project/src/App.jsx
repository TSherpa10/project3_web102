import './App.css';
import Card from './components/Card.jsx';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const App = () => {

  const startCard = <Card key="0" front="Are you ready? Click the arrow button below to begin!" back="you found me! :oo"/>

  const data = [<Card key="1" front="What's a dynamic foot move great for most overhang climbs?" color="yellow" back="A heel hook!" img1="../public/proj2_card1front.jpeg" img2="../public/proj2_card1back.jpeg"/>,
  <Card key="2" front="True or False: You are allowed to touch the finish hold with only one hand." color="green" back="False"/>,
  <Card key="3" front="What's the easiest climbing grade in commercial gyms?" color="green" back="VB, B stands for beginner"/>,
  <Card key="4" front="If a climb is on a wall that's tilted away from you, what's this called?" color="yellow" back="Slab Climbing" img2="../public/proj2_card4back.jpeg"/>,
  <Card key="5" front="This V17 climb (known as the hardest boulder in the world) was remade in an indoor gym." color="red" back="Burden of Dreams." img2="../public/proj2_card5back.webp"/>,
  <Card key="6" front="This dynamic move has an iconic name and has revolutionized indoor climbing" color="yellow" back="Dyno"/>,
  <Card key="7" front="True or False: You should prioritize using your lower body more and less of your bicep." color="yellow" back="True"/>,
  <Card key="8" front="A technique that allows the climber to reach further by shifting your center of gravity." color="red" back="Flagging" img2="../public/proj2_card8back.webp"/>];

  let prevIndices = []

  const [card, setCard] = useState(startCard);

  const handleClick = () => {
    /* todo: change the displayed component to a random card in data */
    const index = Math.floor(Math.random() * data.length);
    setCard(data[index]);
    prevIndices.push(index);
    console.log(card, prevIndices);
  };

  const handleClickBack = () => {
    if (prevIndices.length > 0) {
      const lastIndex = prevIndices.pop();
      setCard(data[lastIndex])
      console.log(prevIndices, card);
    }
  };

  return (
    <div className="App">
      <div className="hero">
        <h1>Indoor Bouldering Quiz</h1>
        <h2>How experienced are you on the wall? Find out with this test!</h2>
        <h3>Number of cards: 8</h3>
        {card}
        <button className='btn' onClick={handleClickBack}><ArrowBackIosNewIcon/></button>
        <button className='btn' onClick={handleClick}><ArrowForwardIosIcon/></button>
      </div>
    </div>
  )
}

export default App