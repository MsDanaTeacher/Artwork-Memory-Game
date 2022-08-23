import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import Welcome from './Welcome';
import LevelOne from './LevelOne';
import LevelTwo from './LevelTwo';
import GalleryContainer from './GalleryContainer';
import GameTiles from './GameTiles'

// const artwork = [  
//   {   "Id": 1,
//       "Title": "Drowning Girl",
//       "Artist": "Roy Lichtenstein",
//       "image": "https://www.moma.org/media/W1siZiIsIjIzNzM1NSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=fff877e8b60326f1",
//       matched: false
//   },
//   {   "Id": 2,
//       "Title": "Airmail No. 2 Accumulation",
//       "Artist": "Yayoi Kusama",
//       "image": "https://www.moma.org/media/W1siZiIsIjExMjI4NyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=0e83afb15efba40f",
//       matched: false
//   },
//   {   "Id": 3,
//       "Title": "Painter and Model",
//       "Artist": "Pablo Picasso",
//       "image": "https://www.moma.org/media/W1siZiIsIjE1MTQzMSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=6b5f95089ea07ecb",
//   },
//   {   "Id": 4,
//       "Title": "Come to My Party (The Prince Von Thurn und Taxis Invites You For Princess Gloria's Birthday Party!)",
//       "Artist": "Keith Haring",
//       "image": "https://www.moma.org/media/W1siZiIsIjQwMDI0NCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=da6e10692d6eea72",
//   },
//   {
//       "Id": 5,
//       "Title": "Beat Bop",
//       "Artist": "Rammellzee, K-Rob with Jean-Michel Basquiat\n",
//       "image": "https://www.moma.org/media/W1siZiIsIjQ1OTQxNCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=a922e4be4539370b",
//       matched: false
//   },
//   {
//       "Id": 6,
//       "Title": "Self-Portrait",
//       "Artist": "Andy Warhol",
//       "image": "https://www.moma.org/media/W1siZiIsIjM0MjYyMiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=76e03337130c16f6",
//       matched: false
//   },
//   {
//       "Id": 7,
//       "Title": "Untitled Film Still #21",
//       "Artist": "Cindy Sherman",
//       "image": "https://www.moma.org/media/W1siZiIsIjQ1MDExOSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=fdb9a3c1104271fd",
//       matched: false
//   },
//   {
//       "Id": 8,
//       "Title": "Hold your Fire (Men and Machines)",
//       "Artist": "Rosalyn Drexler",
//       "image": "https://www.moma.org/media/W1siZiIsIjQyMTk1NSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=118919b826ae362b",
//       matched: false
//   }
// //   {
// //     "Id": 9,
// //     "Title": "Axell-ération",
// //     "Artist": "Evelyne Axell",
// //     "image": "https://www.moma.org/media/W1siZiIsIjUxNDUzNSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=ad16df860447f599"
// // },
// // {
// //     "Id": 10,
// //     "Title": "Fulang-Chang and I",
// //     "Artist": "Frida Kahlo",
// //     "Image": "https://www.moma.org/media/W1siZiIsIjk1MzUyIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDkwIC1yZXNpemUgMjAwMHgyMDAwXHUwMDNlIl1d.jpg?sha=fe1d09f2e3e62e49"
// // },
// // {
// //     "Id": 11,
// //     "Title": "the movement",
// //     "Artist": "Marcel Dzama",
// //     "image": "https://www.moma.org/media/W1siZiIsIjE5ODE2MCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=3931bace96eed664"
// // },
// // {
// //     "Id": 12,
// //     "Title": "Abstraction Blue",
// //     "Artist": "Georgia O'Keeffe",
// //     "image": "https://www.moma.org/media/W1siZiIsIjQ2NzUxOSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=0cc733bb8ddbc1d7"
// // },
// // {
// //     "Id":13,
// //     "Title":"Tar Beach Woodcut",
// //     "Artist":"Faith Ringgold",
// //     "image":"https://www.moma.org/media/W1siZiIsIjE2NzY4MyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=c5ed1ced9b480c7d"
// // },
// // {
// //     "Id":14,
// //     "Title":"Silvered 2 (21 Reds, 21 Blues, 24 Turquoises, 24 Yellows, 9 Blacks, 8 Whites)",
// //     "Artist":"Bridget Riley",
// //     "image":"https://www.moma.org/media/W1siZiIsIjM4MTUxOSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=97e7ba39da449fae"
// // },
// // {
// //     "Id":15,
// //     "Title":"No. 5/No. 22",
// //     "Artist":"Mark Rothko",
// //     "image":"https://www.moma.org/media/W1siZiIsIjIwMzM2OSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=93b8f74e60d3e577"
// // },
// // {
// //     "Id":16,
// //     "Title":"Diana Ross ",
// //     "Artist":"Andy Warhol",
// //     "image":"https://www.moma.org/media/W1siZiIsIjQwMDYwNiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=24d7ee2e627d2689"
// // },
// // {
// //     "Id":17,
// //     "Title":"Watercolor, 4",
// //     "Artist":"Sam Gilliam",
// //     "image":"https://www.moma.org/media/W1siZiIsIjMxODc5NiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=2609c661c0605e25"
// // },
// // {
// //     "Id":18,
// //     "Title":"Frontal Passage",
// //     "Artist":"James Turrell",
// //     "image":"https://www.moma.org/media/W1siZiIsIjIyODY0NCJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=f24b26449f0a0adc"
// // },
// // {
// //     "Id":19,
// //     "Title":"Fiery Sunset",
// //     "Artist":"Alma Woodsey Thomas",
// //     "image":"https://www.moma.org/media/W1siZiIsIjM0Mzk2NiJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=ed11c9429f2bfdad"
// // },
// // {
// //     "Id":20,
// //     "Title":"The migrants arrived in great numbers",
// //     "Artist":"Jacob Lawrence",
// //     "image":"https://www.moma.org/media/W1siZiIsIjMxNzIxMSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=c1c2f938dcbd9507"
// // }
// ]

function App() {
const [artwork, setArtwork] = useState([])


// const [choiceOne, setChoiceOne] = useState(null)
// const [choiceTwo, setChoiceTwo] = useState(null)
// const [turns, setTurns] = useState([])

useEffect(() => {
  fetch("http://localhost:3001/art")
  .then(res => res.json())
  .then((data) => {
    setArtwork(data)
  })
}, [])

// //handle choice
//   const handleChoice = (art) => {
//     console.log(art)
//     choiceOne ? setChoiceTwo(art) : setChoiceOne(art)
//   }

//   //compare 2 selected cards
//   useEffect(() => {
//     if (choiceOne && choiceTwo) {

//       if(choiceOne.Id === choiceTwo.Id) {
//         setArtCard(prevCards => {
//           return prevCards.map(artCard => {
//             if (art.Id === choiceOne.Id) {
//               return {...artCard, matched: true}
//             } else {
//               return artCard
//             }
//           })
//         })
//       } else {
//         alert('no match!')
//         resetTurn()
//       }
//     }
//   }, [choiceOne, choiceTwo])

//   //reset choices & increase turn
//   const resetTurn = () => {
//     setChoiceOne(null)
//     setChoiceTwo(null)
//     setTurns(prevTurns => prevTurns +1)
//   }

//  
// // 
// // shuffle cards
//   const shuffleCards = () => {
//     const shuffledCards = [...artwork, ...artwork]
//       .sort(() => Math.random() - 0.5)
//       // .map((art) => ({ ...art, id: Math.random()}))
  
//       setArtCard(shuffledCards)
//       setTurns(0)
//   }



// const doubleArt = [...artwork, ...artwork]
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <LevelOne artwork={artwork} />
      <LevelTwo artwork={artwork} />
      <div className="card-grid">
        
        {/* {doubleArt.map((art) => (
          <GameTiles 
            key={artwork.Id} 
            art={art} 
            handleChoice={handleChoice}
            />
        ))
      } */}
      </div>
    </div>
  );
}

export default App;
