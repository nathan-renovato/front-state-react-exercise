import Logo from '../../assets/logo.svg';
import './style.css';

export default function Sidebar({ setStateCards, cards }) {

    function handleReset() {
        cards.forEach((item) => {
            item.turned = false;
        })

        setStateCards(cards);
    }

    return (
        <div className='sidebar'>
            <img src={Logo} alt='Logo do jogo' />
            <button
                onClick={() => handleReset()}
                className='reset-button'
            >
                RESET
            </button>
        </div>
    )
};