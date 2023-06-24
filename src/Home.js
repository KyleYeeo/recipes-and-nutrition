import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container'>
            <div className='category-container'>
                <Link to='/recipes' className='link-recipe'>
                    <div className='recipe-btn'>
                        <h2>Find a Recipe</h2>
                        <p>Search a recipe of over 2.3 million recipes.</p>
                    </div>
                </Link>
                <Link to='/nutrition' className='link-nutrition'>
                    <div className='nutrition-btn'>
                        <h2>Nutrition analysis</h2>
                        <p>Full nutrition and ingredient data.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default Home;