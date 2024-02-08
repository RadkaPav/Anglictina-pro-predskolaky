import answers from '../data/answers'
import checkMark from "../img-sound/check-mark.png"
import crossMark from "../img-sound/cross-mark.png"

const Questions = ({ checkAnswer, index, data, image, selectedAnswer }) => {
  const { sound, answer } = data[index]

  return (
    <div className='question-container'>
      <img src={image} alt="" className='img' />
      <p className='counter'>{`${index + 1}/10`} </p>
      <audio src={sound} controls className='audio' />

      <div className='answers'>
        <div className='right'>
          <img alt=""
            src={checkMark}
            // ZOBRAZENÍ ZELENÉHO/ČERVENÉHO POZADÍ PODLE SPRÁVNOSTI ODPOVĚDI
            className={(selectedAnswer === "yes") && (selectedAnswer === answer) ? 'icon yes green' : (selectedAnswer === "yes") ? "icon yes red" : "icon yes"}
            id='yes'
            onClick={(e) => checkAnswer(e, "yes")} />
          <audio src={answers[0].sound} />
          <p>Yes, there is</p>
        </div>

        <div className='wrong'>
          <img alt=""
            src={crossMark}
            // ZOBRAZENÍ ZELENÉHO/ČERVENÉHO POZADÍ PODLE SPRÁVNOSTI ODPOVĚDI
            className={(selectedAnswer === "no") && (selectedAnswer === answer) ? 'icon no green' : (selectedAnswer === "no") ? "icon no red" : "icon no"}
            id='no'
            onClick={(e) => checkAnswer(e, "no")} />
          <audio src={answers[1].sound} />
          <p>No, there is not.</p>
        </div>
      </div>
    </div>
  )
}

export default Questions 