import Answer from './Answer'
import checkMark from "../img-sound/check-mark.png"
import crossMark from "../img-sound/cross-mark.png"

const Questions = ({ checkAnswer, index, data, image, selectedAnswer }) => {
  const { sound, answer } = data[index]

  return (
    <section className='flex flex-col justify-center items-center p-3 sm:flex-row'>
      <div className='max-h-1/2'>
        <img src={image} alt="" className='max-h-[450px] my-3'/>
        <p className='mb-3 text-sm text-center'>{`${index + 1}/10`} </p>
        <audio src={sound} controls className='w-[80%] h-7 mb-3 mx-auto' />
      </div>

      <div className='flex justify-around w-full sm:flex-col sm:items-center sm:w-1/2'>
        <Answer selectedAnswer={selectedAnswer} answer={answer} checkAnswer={checkAnswer} image={checkMark} text="Yes, there is" id="yes" />
        <Answer selectedAnswer={selectedAnswer} answer={answer} checkAnswer={checkAnswer} image={crossMark} text="No, there is not" id="no" />
      </div>
    </section>
  )
}

export default Questions 
