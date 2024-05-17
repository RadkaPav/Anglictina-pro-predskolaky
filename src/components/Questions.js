import answers from '../data/answers'
import checkMark from "../img-sound/check-mark.png"
import crossMark from "../img-sound/cross-mark.png"

const Questions = ({ checkAnswer, index, data, image, selectedAnswer }) => {
  const { sound, answer } = data[index]

  return (
    <section className='flex flex-col justify-center items-center mx-auto p-3'>
      <img src={image} alt="" className='w-full m-5' />
      <p className='mb-3 text-sm'>{`${index + 1}/10`} </p>
      <audio src={sound} controls className='w-[80%] h-7 mb-3' />

      <div className='flex justify-around w-full'>
        <div>
          <img alt=""
            src={checkMark}
            // ZOBRAZENÍ ZELENÉHO/ČERVENÉHO POZADÍ PODLE SPRÁVNOSTI ODPOVĚDI
            className={(selectedAnswer === "yes") && (selectedAnswer === answer) ?
              'cursor-pointer my-2 mx-auto shadow-[0px_0px_5px_10px_rgb(0,128,0)] bg-[rgb(0,128,0)]' : (selectedAnswer === "yes") ?
                "cursor-pointer my-2 mx-auto shadow-[0px_0px_5px_10px_rgb(255,0,0)] bg-[rgb(255,0,0)]" : "cursor-pointer my-2 mx-auto "}
            id='yes'
            onClick={(e) => checkAnswer(e, "yes")} />
          <audio src={answers[0].sound} />
          <p>Yes, there is</p>
        </div>

        <div>
          <img alt=""
            src={crossMark}
            // ZOBRAZENÍ ZELENÉHO/ČERVENÉHO POZADÍ PODLE SPRÁVNOSTI ODPOVĚDI
            className={(selectedAnswer === "no") && (selectedAnswer === answer) ?
              'cursor-pointer my-2 mx-auto shadow-[0px_0px_5px_10px_rgb(0,128,0)] bg-[rgb(0,128,0)]' : (selectedAnswer === "no") ?
                'cursor-pointer my-2 mx-auto shadow-[0px_0px_5px_10px_rgb(255,0,0)] bg-[rgb(255,0,0)]' : "cursor-pointer my-2 mx-auto"}
            id='no'
            onClick={(e) => checkAnswer(e, "no")} />
          <audio src={answers[1].sound} />
          <p>No, there is not.</p>
        </div>
      </div>
    </section>
  )
}

export default Questions 