import Card from "./Card"
import Button from "./Button"
import { useState, useEffect } from "react"
import { FaArrowRotateLeft } from "react-icons/fa6";

const GameBoard = ({ data }) => {
    const [firstCard, setFirstCard] = useState(null)
    const [secondCard, setSecondCard] = useState(null)
    const [dataArray, setDataArray] = useState([])
    const [gameOver, setGameOver] = useState(false)
    const [option, setOption] = useState(6)

    const createArray = (option) => {
        const dataArray = data.sort(function () { return Math.random() - 0.5 })
        const selectionArray = dataArray.slice(0, option)
        const duplicatedArray = [...selectionArray, ...selectionArray].sort(function () { return Math.random() - 0.5 })
        let finalArray = []
        for (let i = 0; i < duplicatedArray.length; i++) {
            finalArray.push({ ...duplicatedArray[i], id: i })
        }
        setDataArray(finalArray)
    }

    const changeDifficulty = (option) => {
        setOption(option)
        createArray(option)
    }

    const newGame = () => {
        setFirstCard(null)
        setSecondCard(null)
        setGameOver(false)
        createArray(option)
        setOption(option)
    }

    const handleSelectedCard = (item) => {
        const audio = new Audio(item.sound)
        audio.play()
        if (!firstCard) {
            setFirstCard(item)
        } else if (!secondCard) {
            setSecondCard(item)
        }
    }

    useEffect(() => {
        if (firstCard && secondCard) {
            if (firstCard.name !== secondCard.name) {
                setTimeout(() => {
                    setFirstCard(null)
                    setSecondCard(null)
                }, 1500)
            } else {
                setFirstCard(null)
                setSecondCard(null)
                return setDataArray((prevArray) => {
                    return prevArray.map(item => {
                        if (item.name === firstCard.name) {
                            return { ...item, matched: true }
                        } else {
                            return item
                        }
                    })
                })
            }
        }
        if (dataArray.every(item => item.matched)) {
            setGameOver(true)
        }
    })

    useEffect(() => {
        newGame()
    }, [])

    return (
        <div>
            <div className="flex justify-evenly mb-4">
                <Button name="Easy" changeDifficulty={changeDifficulty} id={3} option={option} />
                <Button name="Medium" changeDifficulty={changeDifficulty} id={6} option={option} />
                <Button name="Hard" changeDifficulty={changeDifficulty} id={12} option={option} />
            </div>

            <div className={`w-[300px] mb-4
                             ${option === 3 && "sm:w-[400px] "}
                             ${option === 6 && "md:w-[550px]"}
                             ${option === 12 && "sm:w-[550px] lg:w-[800px]"} `}>
                <div className="flex flex-wrap gap-1 justify-center">
                    {dataArray.map((card) => {
                        return <Card image={card.image}
                            audio={card.sound}
                            key={card.id}
                            toggled={card === firstCard || card === secondCard || card.matched === true}
                            item={card}
                            option={option}
                            handleSelectedCard={handleSelectedCard} />
                    })}
                </div>
                {gameOver && 
                <div className="w-full mt-3">
                    <FaArrowRotateLeft className='text-5xl text-green-600 mx-auto' onClick={newGame} />
                </div>}
            </div>
        </div>
    )
}

export default GameBoard
