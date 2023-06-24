function RecipeDescription(props) {
    return (
        <div className='description-container'>
            <div className='light-bg'></div>
            <div className='dark-bg'>
                <div className='content-container'>
                    <div className='heading-info'>
                        <h2>{ props.title }</h2>
                        <p>{ props.calories.toFixed() } Cal</p>
                    </div>
                    <div className='image-container'>
                        <img src={ props.image } alt='Dish' />
                    </div>
                </div>
                <div className='ingredient-list'>
                    <h4>Ingredients:</h4>
                    <ul>
                    {props.ingredients.map((line, index) => (
                        <li key={ index }>
                            { line }
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default RecipeDescription;