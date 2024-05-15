const MenuItem = ({ imageName, item, value }) => {

    return (
        <button value={value} className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3  text-center cursor-pointer'>
            <img value={value} src={imageName} alt='' className='w-24 h-24 mb-2' />
            {item}
        </button>
    )
}

export default MenuItem

