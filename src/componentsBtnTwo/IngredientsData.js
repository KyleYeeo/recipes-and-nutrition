function IngredientsData(props) {
    const data = props.details;

    const headings = ['Qty', 'Unit', 'Food', 'Cal', 'Weight, g'];

    return (
        <section className='ingredients-container'>
            <h2>Ingredients data</h2>

            <table>
                <tbody>
                    <tr className='headings'>
                        {headings.map((hd, i) => (
                            <th className='ingr-heading' key={ i }>{ hd }</th>
                        ))}
                    </tr>
                    {data.ingredients.map((el, i) => {
                        let quantity, measure, food, weight, cal; 

                        if (typeof(el.parsed[0].quantity) != 'undefined') {
                            quantity = el.parsed[0].quantity;
                        } else {quantity = '-'};
                        if (typeof(el.parsed[0].measure) != 'undefined') {
                            measure = el.parsed[0].measure;
                        } else {measure = '-'};
                        if (typeof(el.parsed[0].food) != 'undefined') {
                            food = el.parsed[0].food;
                        } else {food = '-'}; 
                        if (typeof(el.parsed[0].weight) != 'undefined') {
                            weight = el.parsed[0].weight;
                        } else {weight = '-'};
                        if (typeof(el.parsed[0].nutrients.ENERC_KCAL) != 'undefined') {
                            cal = el.parsed[0].nutrients.ENERC_KCAL.quantity;
                        } else {cal = '-'};

                        return (
                            <tr key={ i }>
                                <td className='ingr-data'>{ quantity }</td>
                                <td className='ingr-data'>{ measure }</td>
                                <td className='ingr-data'>{ food }</td>
                                <td className='ingr-data'>{ Math.round(cal*10)/10 }</td>
                                <td className='ingr-data'>{ Math.round(weight*10)/10 }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
}
export default IngredientsData;