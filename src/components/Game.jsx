import {useState, useEffect} from "react"
import { ToastContainer, toast } from 'react-toastify';


const StringReverse = () => {

    const [guessNumber, setGuessNumber] = useState("");

    const [randomNumber, setRandomNumber] = useState(0)

    const [restart, setRestart] = useState(true);


    // const generateRandomNumbers = () => {
    //     const value = Math.floor(Math.random() * 10);
    //     return value;
    // }

    function guessFunction() {
        const numberRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let randomNumberIndex;
        // Shuffle the array to randomize the order
        numberRange.sort(() => Math.random() - 0.5);
        // Pick a random index from the shuffled array
        randomNumberIndex = Math.floor(Math.random() * numberRange.length);
        // use the randomIndex
        const randNumber = numberRange[randomNumberIndex];
        // Remove the used number from the array to avoid repetition
        numberRange.splice(randomNumberIndex, 1);
        // ... rest of your game logic using randomNumber
        
        // If all numbers have been used, reset the array
        if (numberRange.length === 0) {
          numberRange.push(...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        }

        return randNumber; 
    }

    useEffect(() => {
        if(restart) {
            setRandomNumber(guessFunction())
        } else {
            setRandomNumber(prev => prev)
        }
    }, [restart])


    

    const handleNumberGuess = (e) => {
        e.preventDefault();
        console.log(randomNumber);
        if (guessNumber == randomNumber){
            toast.success('Congratulations! You guessed the number.', {
                position: "top-right",
                autoClose: 5000
            });
            setRestart(true);
          } else {
            toast.error('Oops! Wrong guess. Try again.', {
                position: "top-right",
                autoClose: 5000,
            });
            setRestart(false);
        }
    }


  return (
    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                    <form action="">
                        <input 
                            type="text" 
                            name="" 
                            id=""
                            placeholder="guess the number" 
                            className="todo-input"
                            value={guessNumber}
                            onChange={(e) => setGuessNumber(e.target.value)}
                        />
                        <button 
                        className="todo-addbtn"
                        onClick={handleNumberGuess} type="submit">
                            Submit
                        </button>
                    </form>           
                </div>
            </div>
        </div>
        <ToastContainer />
    </section>
  )
}

export default StringReverse