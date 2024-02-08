const TestWords = ({ index, checkAnswer, data, selectedAnswer, correctAnswer }) => {
console.log(data);
    return (
        <div className="all-answers-container">
            <div className="all-answers">
                {
                    //ZOBRAZENÍ DVOJIC SLOV
                    data[index].allAnswers.map((item) => {

                        const { img, id, title } = item

                        return <button className="btn" onClick={() => checkAnswer(title, index)} key={id}>
                            <img src={img} alt=""
                            //ZOBRAZENÍ ZELENÉHO/ČERVENÉHO POZADÍ PODLE SPRÁVNOSTI ODPOVĚDI
                                className={(selectedAnswer === item.title) && (selectedAnswer === correctAnswer) ? 'image green' : (selectedAnswer === item.title) && (selectedAnswer !== correctAnswer) ? "image red" : "image"}
                                key={id}
                                id={title} />
                        </button>
                    })
                }
            </div>
            <div className='audio-container'>
                <audio src={data[index].sound} controls id={data[index].title} className='audio' />
            </div>
        </div>
    )
}

export default TestWords
