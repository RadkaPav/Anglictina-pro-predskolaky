const Answer = ({selectedAnswer, answer, checkAnswer, image, text, id}) => {
    return (
        <div className='sm:w-1/2'>
          <img alt=""
            src={image}
            className={(selectedAnswer === id ) && (selectedAnswer === answer) ?
              'cursor-pointer my-2 mx-auto shadow-[0px_0px_5px_10px_rgb(0,128,0)] bg-[rgb(0,128,0)]' : (selectedAnswer === id) ?
                "cursor-pointer my-2 mx-auto shadow-[0px_0px_5px_10px_rgb(255,0,0)] bg-[rgb(255,0,0)]" : "cursor-pointer my-2 mx-auto "}
            id={id}
            onClick={(e) => checkAnswer(e, id)} />
          <p className='text-center'>{text}</p>
        </div>   
    )
}

export default Answer