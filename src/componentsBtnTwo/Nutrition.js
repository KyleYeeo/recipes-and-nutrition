import { useState, useEffect } from 'react';
import axios from 'axios';
import NutritionDescription from './NutritionDescription';
import Swal from 'sweetalert2';
import IngredientsData from './IngredientsData';

function Nutrition() {

    const ID = '4bd1fb8c';
    const KEY = '350e5129298e954162f8dc3d970b31cc';

    const [userIngredients, setUserIngredients] = useState(``);
    const [nutritionArray, setNutritionArray] = useState([]);
    const [search, setSearch] = useState(`2 skinless salmon fillets, 1 pkg. torn mixed salad greens`);
    const [description, setDescription] = useState(false);

    useEffect(() => {
        let searchArray = search.split(/[,,;,\n,\r]/);

        const getData = () => { 
            axios.post(`https://api.edamam.com/api/nutrition-details?app_id=${ID}&app_key=${KEY}`, {
                'ingr': searchArray
            })
            .then(result => {
            console.log(result.data)
            setNutritionArray(result.data)
            })
            .catch(error => {
                Swal.fire({
                    title: 'We had a problem analysing this.',
                    text: 'Please check the ingredient spelling or if you have entered a quantities, units for the ingredients.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
        }
        getData();
    }, [search])

    const changeIngredients = (e) => {
        setUserIngredients(e.target.value);
    }

    const getInfo = (e) => {
        if (userIngredients !== '') {
            e.preventDefault();
            setSearch(userIngredients);
            setDescription(!description);

            let hideBtn = e.target;
            hideBtn.classList.toggle('hide')
            let showBtn = e.target.parentElement.children[1];
            showBtn.classList.toggle('active');
        }
        else {
            Swal.fire({
                title: 'Please, enter the ingredients',
                icon: 'info',
                confirmButtonText: 'OK'
            })
        }
    }

    const cleanTextarea = (e) => {
        setUserIngredients(``);
        setDescription(!description);

        let hideBtn = e.target;
        hideBtn.classList.toggle('active');
        let showBtn = e.target.parentElement.children[0];
        showBtn.classList.toggle('hide');
    }

    return (
        <section className='nutrition-container'>
            <h1>Nutrition Analysis</h1>
            <p className='instructions'>No more need to spend hours entering your recipes line by line. 
                <br />Enter an ingredient list for what you are cooking, like "2 skinless salmon fillets, 1 pkg. torn mixed salad greens", etc. 
                <br />Enter each ingredient on a new line or use comma.
                <br />Yummy&Healthy will extract the full nutrition and ingredient data from the text.
            </p>
            <div className='info-container'>
                <textarea className='nutr-input' onChange={ changeIngredients } placeholder=' 2 skinless salmon fillets
                1 pkg. torn mixed salad greens..' value={ userIngredients }></textarea>
                <div className='btns-container'>
                    <button className='analyze' onClick={ getInfo }>Analyze</button>
                    <button className='new-recipe' onClick={ cleanTextarea }>New recipe</button>
                </div>

                {/* тільки коли користувач натискає кнопку Analyze відобразиться компонент. Інакше падають помилки в консолі, що неможливо прочитати властивість (FAT та ін.) з undefined. Розумію це так, що користувач ще не ввів інгредієнти, а початковий запит на API уже пішов. Але даних там ще нема, бо користувач не натиснув кнопку Analyze, відповідно не зробив запит аналізу своїх інгредієнтів */}
                {description && (
                    <div className='details-container'>
                        <IngredientsData details={ nutritionArray } />
                        <NutritionDescription details={ nutritionArray } />
                    </div>
                )}
            </div>
        </section>
        
    );
}
export default Nutrition;