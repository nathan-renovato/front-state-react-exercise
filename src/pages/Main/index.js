import './style.css';
import Logo from '../../assets/logo.svg';
import cards from '../../cards';
import CardBack from '../../assets/card-back.png';
import { useState } from 'react';

function Main() {

  const [gameCards, setGameCards] = useState(cards);
  const [currentCard, setCurrentCard] = useState(null);
  const [cardFigures, setCardFigures] = useState(null);

  function handleRenderGame() {
    saveCardImages();

    const imgCards = [...cardFigures];

    return imgCards.map((imgCard) => (
      <img
        key={imgCard.id}
        onClick={() => handleCompareCards(imgCard.id)}
        src={CardBack}
        alt={imgCard.slug}
      />
    ));
  }

  function saveCardImages() {
    const localCards = [...gameCards];
    const imagesCards = [];

    localCards.map((card) => (
      !card.turned &&
      imagesCards.push({
        id: card.id,
        src: card.image,
        alt: card.slug,
        slug: card.slug
      })
    ));

    setCardFigures(imagesCards);
  }

  function handleCompareCards(id) {
    const localCards = [...gameCards];
    let firstCard = currentCard;

    const selectedCard = localCards.find(card => card.id === id);

    if (!firstCard) {
      setCurrentCard(selectedCard);
      return;
    }

    if (selectedCard.slug === currentCard.slug) {
      const drawMatchingCards = localCards.map(card => (
        card.id === selectedCard.id || card.id === currentCard.id ? { ...card, turned: true } : { ...card }
      ));
      setGameCards(drawMatchingCards);
    }

    firstCard = 0;
    setCurrentCard(null);
  }

  /*function handleShowCard(id) {
    const localCards = [...gameCards];


  }*/

  return (
    <div className='container'>
      <div className='side-bar'>
        <img src={Logo} alt='Logo do jogo' />
        <button>RESET</button>
      </div>
      <div className='main'>
        {handleRenderGame()}
      </div>
    </div>
  );
}

export default Main;
