import { useState, useEffect } from 'react';
import searchIcon from './search.png';
import axios from 'axios';
import RecipeDescription from './RecipeDescription';

function Recipes() {

    const ID = '55298c2d';
    const KEY = 'e7af5330994d10064a1d77ba5b24f5ff';

    const [search, setSearch] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [keyWord, setKeyWord] = useState('salmon feta salad')

    useEffect(() => {
        const getData = () => {
            axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${keyWord}&app_id=${ID}&app_key=${KEY}&random=true`)
            .then(result => {
                console.log(result.data.hits);
                setRecipes(result.data.hits)
            })
        }
        getData();
    }, [keyWord])

    const followChanges = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value)
    }

    const changeKeyWord = (e) => {
        e.preventDefault();
        setKeyWord(search);
    }

    return (
        <section className='recipe-container'>
            <h1>Find a recipe</h1>
            <form onSubmit={ changeKeyWord }>
                <input onChange={ followChanges } type='text' placeholder={ keyWord } value={ search }/>
                <img src={ searchIcon } onClick={ changeKeyWord } alt='Search' />
            </form>

            {recipes.map((rec, i) => (
                <RecipeDescription key={ i } title={ rec.recipe.label } calories={ rec.recipe.calories } image={ rec.recipe.image } ingredients={ rec.recipe.ingredientLines }/>
            ))}
        </section>
    )
}
export default Recipes;