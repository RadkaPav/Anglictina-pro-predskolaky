const TestWords = ({ index, checkAnswer, data, selectedAnswer, correctAnswer }) => {

    return (
        <div className="all-answers-container">
            <div className="all-answers">
                {
                    data[index].allAnswers.map((item) => {
                        const { img, id, title } = item

                        return <button className="btn" onClick={() => checkAnswer(title, index)} key={id}>
                            <img src={img} alt=""
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
