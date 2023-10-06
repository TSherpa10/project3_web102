import './App.css';
import Card from './components/Card.jsx';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const App = () => {

  const flipCard = () => {
    setCard((prevCard) => ({ ...prevCard, isFlipped: !prevCard.isFlipped }));
  };

  const startCard = <Card key="0" front="Are you ready? Click the arrow button below to begin!" back="you found me! :oo" isFlipped={false} flipCard={flipCard}/>

  const [data, setData] = useState([<Card key="1" front="What's a dynamic foot move great for most overhang climbs?" color="yellow" back="Heel hook" img1="../public/proj2_card1front.jpeg" img2="../public/proj2_card1back.jpeg" isFlipped={false} flipCard={flipCard}/>,
  <Card key="2" front="True or False: You are allowed to touch the finish hold with only one hand." color="green" back="False" isFlipped={false} flipCard={flipCard}/>,
  <Card key="3" front="What's the easiest climbing grade in commercial gyms?" color="green" back="VB" isFlipped={false} flipCard={flipCard}/>,
  <Card key="4" front="If a climb is on a wall that's tilted away from you, what's this called?" color="yellow" back="Slab Climbing" img2="../public/proj2_card4back.jpeg" isFlipped={false} flipCard={flipCard}/>,
  <Card key="5" front="This V17 climb (known as the hardest boulder in the world) was remade in an indoor gym." color="red" back="Burden of Dreams" img2="../public/proj2_card5back.webp" isFlipped={false} flipCard={flipCard}/>,
  <Card key="6" front="This dynamic move has an iconic name and has revolutionized indoor climbing" color="yellow" back="Dyno" isFlipped={false} flipCard={flipCard}/>,
  <Card key="7" front="True or False: You should prioritize using your lower body more and less of your bicep." color="yellow" back="True" isFlipped={false} flipCard={flipCard}/>,
  <Card key="8" front="A technique that allows the climber to reach further by shifting your center of gravity." color="red" back="Flagging" img2="../public/proj2_card8back.webp" isFlipped={false} flipCard={flipCard}/>]);
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState({comp: startCard, isFlipped: false});
  const [input, setInput] = useState([{ans: "", color: ""}, {ans: "", color: ""}, {ans: "", color: ""}, {ans: "", color: ""}, {ans: "", color: ""}, {ans: "", color: ""}, {ans: "", color: ""}, {ans: "", color: ""}])
  const [streak, setStreak] = useState({currStreak: 0, maxStreak: 0});

  const handleClickFront = () => {
    if (card.comp === startCard) {
      setCard({comp: data[0], isFlipped: false})
    }
    else if (index < data.length - 1) {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setCard({comp: data[newIndex], isFlipped: false});
        return newIndex;
      });
    }
  };

  const handleClickBack = () => {
    if (index > 0) {
      setIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        setCard({comp: data[newIndex], isFlipped: false})
        return newIndex;
      });
    }
  };
  
  const handleAns = (e) => {
    e.preventDefault();
    setInput((prevInput) => {
      const newInput = [...prevInput];
      newInput[index]['ans'] = e.target.value;
      console.log(newInput);
      return newInput
    })
  }

  const handleClickGuess = () => {
    setInput((prevInput) => {
      const newInput = [...prevInput];
      const guessedAnswer = newInput[index].ans;
      const correctAnswer = card.comp.props.back.toLowerCase();
      if (correctAnswer === guessedAnswer.toLowerCase()) {
        newInput[index]['color'] = 'green-border'
      }
      else {
        newInput[index]['color'] = 'red-border'
      }
      return newInput;
    })
    updateStreak();
  }

  const updateStreak = () => {
    setStreak((prevStreak) => {
      const newStreak = {...prevStreak};
      if (input[index]['color'] === 'green-border') {
        newStreak['currStreak'] = prevStreak['currStreak'] + 1;
        newStreak['maxStreak'] = Math.max(newStreak['currStreak'], prevStreak['maxStreak']);
      }
      else {
        newStreak['currStreak'] = 0;
      }
      return newStreak;
    })
  }

  const handleShuffle = () => {
    const shuffledData = [...data];
    for (let i = shuffledData.length - 1; i > index; i--) {
      const n = Math.floor(Math.random() * (i - index + 1) + index);
      [shuffledData[i], shuffledData[n]] = [shuffledData[n], shuffledData[i]];
    }
    setData(shuffledData);
    setCard((prevCard) => ({ ...prevCard, comp: shuffledData[index] }));
  };


  return (
    <div className="App">
      <div className="hero">
        <h1>Indoor Bouldering Quiz</h1>
        <h2>How experienced are you on the wall? Find out with this test!</h2>
        <h3>Number of cards: 8</h3>
        <h3>Max Streak: {streak['maxStreak']} Current Streak: {streak['currStreak']}</h3>
        {card.comp}
        <div className='guess-div'>
          <h3><span className='white-text'>Guess the answer here:</span></h3>
          <input className={`${input} ${input[index].color}`} type="text" value={input[index]['ans']} onChange={handleAns} disabled={card.comp === startCard || card.isFlipped}/>
          <button className='btn' onClick={handleClickGuess}><LightbulbIcon/></button>
          <button className='btn' onClick={handleShuffle}><ShuffleIcon/></button>
        </div>
        <button className='btn' onClick={handleClickBack} disabled={index === 0}><ArrowBackIosNewIcon/></button>
        <button className='btn' onClick={handleClickFront} disabled={index === 7}><ArrowForwardIosIcon/></button>
      </div>
    </div>
  )
}

export default App