const MenuItem = ({ imageName, item, value }) => {

    return (
        <button value={value} className='text-xl border-solid border-2 border-black block rounded-lg p-3  text-center text-wrap cursor-pointer w-40 mx-auto'>
            <img value={value} src={imageName} alt='' className='w-24 h-24 mb-2 mx-auto' />
            {item}
        </button>
    )
}

export default MenuItem

