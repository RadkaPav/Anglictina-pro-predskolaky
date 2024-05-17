import Arrow from '../components/Arrow'

const TestWords = ({ index, checkAnswer, data, selectedAnswer, correctAnswer, nextQuestion }) => {

    return (
        <div className='flex flex-col justify-center items-center border-2 border-solid border-black rounded-xl bg-white p-2 mb-5 max-w-[90vw] max-h-[85vh]'>
            <div className="block w-[90%] h-[80%] mx-5 space-y-5">
                {
                    //ZOBRAZENÍ DVOJIC SLOV
                    data[index].allAnswers.map((item) => {

                        const { img, id, title } = item

                        return <button className="block bg-transparent cursor-pointer mx-auto h-[45%]" onClick={() => checkAnswer(title, index)} key={id}>
                            <img src={img} alt=""
                                //ZOBRAZENÍ ZELENÉHO/ČERVENÉHO POZADÍ PODLE SPRÁVNOSTI ODPOVĚDI
                                className={(selectedAnswer === item.title) && (selectedAnswer === correctAnswer) ?
                                    'shadow-[0px_0px_5px_10px_green] h-full' : (selectedAnswer === item.title) && (selectedAnswer !== correctAnswer) ?
                                        "shadow-[0px_0px_5px_10px_red] h-full" : "h-full"}
                                key={id}
                                id={title} />
                        </button>
                    })
                }
            </div>

            <div className='flex flex-col items-center w-full'>
                <audio src={data[index].sound} controls id={data[index].title} className='w-[70%] h-7 mb-2' />
            </div>
            
            {(index < data.length - 1) ? <Arrow nextQuestion={nextQuestion} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} /> : <div></div>
            }
        </div>
    )
}

export default TestWords
