import answers from '../data/answers'
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
        <div className='sm:w-1/2'>
          <img alt=""
            src={checkMark}
            className={(selectedAnswer === "yes") && (selectedAnswer === answer) ?
              'cursor-pointer my-2 mx-auto shadow-[0px_0px_5px_10px_rgb(0,128,0)] bg-[rgb(0,128,0)]' : (selectedAnswer === "yes") ?
                "cursor-pointer my-2 mx-auto shadow-[0px_0px_5px_10px_rgb(255,0,0)] bg-[rgb(255,0,0)]" : "cursor-pointer my-2 mx-auto "}
            id='yes'
            onClick={(e) => checkAnswer(e, "yes")} />
          <audio src={answers[0].sound} />
          <p className='text-center'>Yes, there is</p>
        </div>

        <div className='sm:w-1/2'>
          <img alt=""
            src={crossMark}
            className={(selectedAnswer === "no") && (selectedAnswer === answer) ?
              'cursor-pointer my-2 mx-auto shadow-[0px_0px_5px_10px_rgb(0,128,0)] bg-[rgb(0,128,0)]' : (selectedAnswer === "no") ?
                'cursor-pointer my-2 mx-auto shadow-[0px_0px_5px_10px_rgb(255,0,0)] bg-[rgb(255,0,0)]' : "cursor-pointer my-2 mx-auto"}
            id='no'
            onClick={(e) => checkAnswer(e, "no")} />
          <audio src={answers[1].sound} />
          <p className='text-center'>No, there is not.</p>
        </div>
      </div>
    </section>
  )
}

export default Questions 