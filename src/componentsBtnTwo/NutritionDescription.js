function NutritionDescription(props) {
    const data = props.details;
    let FAT, FASAT, FATRN, CHOLE, NA, CHOCDF, FIBTG, SUGAR, SUGARadded, PROCNT, VITA_RAE, VITB6A, VITD, VITC, CA, FE, MG, K, dailyFAT, dailyFASAT, dailyCHOLE, dailyNA, dailyCHOCDF, dailyFIBTG, dailyPROCNT, dailyVITC, dailyVITA_RAE, dailyVITB6A, dailyVITD, dailyCA, dailyFE, dailyMG, dailyK;

    if (typeof(data.totalNutrients.FAT) != 'undefined') {
        FAT = Math.round(data.totalNutrients.FAT.quantity*10)/10 + ' ' + data.totalNutrients.FAT.unit;
    }
    else {FAT = '-'}
    if (typeof(data.totalDaily.FAT) != 'undefined') {
        dailyFAT = Math.round(data.totalDaily.FAT.quantity) + ' ' + data.totalDaily.FAT.unit;
    } else {dailyFAT = '-'};

    if (typeof(data.totalNutrients.FASAT) != 'undefined') {
        FASAT = Math.round(data.totalNutrients.FASAT.quantity*10)/10 + ' ' + data.totalNutrients.FASAT.unit;
    }
    else {FASAT = '-'}
    if (typeof(data.totalDaily.FASAT) != 'undefined') {
        dailyFASAT = Math.round(data.totalDaily.FASAT.quantity) + ' ' + data.totalDaily.FASAT.unit;
    } else {dailyFASAT = '-'};

    if (typeof(data.totalNutrients.FATRN) != 'undefined') {
        FATRN = Math.round(data.totalNutrients.FATRN.quantity*10)/10 + ' ' + data.totalNutrients.FATRN.unit;
    }
    else {FATRN = '-'}

    if (typeof(data.totalNutrients.CHOLE) != 'undefined') {
        CHOLE = Math.round(data.totalNutrients.CHOLE.quantity*10)/10 + ' ' + data.totalNutrients.CHOLE.unit;
    }
    else {CHOLE = '-'}
    if (typeof(data.totalDaily.CHOLE) != 'undefined') {
        dailyCHOLE = Math.round(data.totalDaily.CHOLE.quantity) + ' ' + data.totalDaily.CHOLE.unit;
    } else {dailyCHOLE = '-'};

    if (typeof(data.totalNutrients.NA) != 'undefined') {
        NA = Math.round(data.totalNutrients.NA.quantity*10)/10 + ' ' + data.totalNutrients.NA.unit;
    }
    else {NA = '-'}
    if (typeof(data.totalDaily.NA) != 'undefined') {
        dailyNA = Math.round(data.totalDaily.NA.quantity) + ' ' + data.totalDaily.NA.unit;
    } else {dailyNA = '-'};

    if (typeof(data.totalNutrients.CHOCDF) != 'undefined') {
        CHOCDF = Math.round(data.totalNutrients.CHOCDF.quantity*10)/10 + ' ' + data.totalNutrients.CHOCDF.unit;
    }
    else {CHOCDF = '-'}
    if (typeof(data.totalDaily.CHOCDF) != 'undefined') {
        dailyCHOCDF = Math.round(data.totalDaily.CHOCDF.quantity) + ' ' + data.totalDaily.CHOCDF.unit;
    } else {dailyCHOCDF = '-'};

    if (typeof(data.totalNutrients.FIBTG) != 'undefined') {
        FIBTG = Math.round(data.totalNutrients.FIBTG.quantity*10)/10 + ' ' + data.totalNutrients.FIBTG.unit;
    }
    else {FIBTG = '-'}
    if (typeof(data.totalDaily.FIBTG) != 'undefined') {
        dailyFIBTG = Math.round(data.totalDaily.FIBTG.quantity) + ' ' + data.totalDaily.FIBTG.unit;
    } else {dailyFIBTG = '-'};

    if (typeof(data.totalNutrients.SUGAR) != 'undefined') {
        SUGAR = Math.round(data.totalNutrients.SUGAR.quantity*10)/10 + ' ' + data.totalNutrients.SUGAR.unit;
    }
    else {SUGAR = '-'}

    if (typeof(data.totalNutrients.SUGARadded) != 'undefined') {
        SUGARadded = Math.round(data.totalNutrients.SUGARadded.quantity*10)/10 + ' ' + data.totalNutrients.SUGARadded.unit;
    }
    else {SUGARadded = '-'}

    if (typeof(data.totalNutrients.PROCNT) != 'undefined') {
        PROCNT = Math.round(data.totalNutrients.PROCNT.quantity*10)/10 + ' ' + data.totalNutrients.PROCNT.unit;
    }
    else {PROCNT = '-'}
    if (typeof(data.totalDaily.PROCNT) != 'undefined') {
        dailyPROCNT = Math.round(data.totalDaily.PROCNT.quantity) + ' ' + data.totalDaily.PROCNT.unit;
    } else {dailyPROCNT = '-'};

    if (typeof(data.totalNutrients.VITC) != 'undefined') {
        VITC = Math.round(data.totalNutrients.VITC.quantity*10)/10 + ' ' + data.totalNutrients.VITC.unit;
    }
    else {VITC = '-'}
    if (typeof(data.totalDaily.VITC) != 'undefined') {
        dailyVITC = Math.round(data.totalDaily.VITC.quantity) + ' ' + data.totalDaily.VITC.unit;
    } else {dailyVITC = '-'};

    if (typeof(data.totalNutrients.VITA_RAE) != 'undefined') {
        VITA_RAE = Math.round(data.totalNutrients.VITA_RAE.quantity*10)/10 + ' ' + data.totalNutrients.VITA_RAE.unit;
    }
    else {VITA_RAE = '-'}
    if (typeof(data.totalDaily.VITA_RAE) != 'undefined') {
        dailyVITA_RAE = Math.round(data.totalDaily.VITA_RAE.quantity) + ' ' + data.totalDaily.VITA_RAE.unit;
    } else {dailyVITA_RAE = '-'};

    if (typeof(data.totalNutrients.VITB6A) != 'undefined') {
        VITB6A = Math.round(data.totalNutrients.VITB6A.quantity*10)/10 + ' ' + data.totalNutrients.VITB6A.unit;
    }
    else {VITB6A = '-'}
    if (typeof(data.totalDaily.VITB6A) != 'undefined') {
        dailyVITB6A = Math.round(data.totalDaily.VITB6A.quantity) + ' ' + data.totalDaily.VITB6A.unit;
    } else {dailyVITB6A = '-'};

    if (typeof(data.totalNutrients.VITD) != 'undefined') {
        VITD = Math.round(data.totalNutrients.VITD.quantity*10)/10 + ' ' + data.totalNutrients.VITD.unit;
    }
    else {VITD = '-'}
    if (typeof(data.totalDaily.VITD) != 'undefined') {
        dailyVITD = Math.round(data.totalDaily.VITD.quantity) + ' ' + data.totalDaily.VITD.unit;
    } else {dailyVITD = '-'};

    if (typeof(data.totalNutrients.CA) != 'undefined') {
        CA = Math.round(data.totalNutrients.CA.quantity*10)/10 + ' ' + data.totalNutrients.CA.unit;
    }
    else {CA = '-'}
    if (typeof(data.totalDaily.CA) != 'undefined') {
        dailyCA = Math.round(data.totalDaily.CA.quantity) + ' ' + data.totalDaily.CA.unit;
    } else {dailyCA = '-'};

    if (typeof(data.totalNutrients.FE) != 'undefined') {
        FE = Math.round(data.totalNutrients.FE.quantity*10)/10 + ' ' + data.totalNutrients.FE.unit;
    }
    else {FE = '-'}
    if (typeof(data.totalDaily.FE) != 'undefined') {
        dailyFE = Math.round(data.totalDaily.FE.quantity) + ' ' + data.totalDaily.FE.unit;
    } else {dailyFE = '-'};

    if (typeof(data.totalNutrients.MG) != 'undefined') {
        MG = Math.round(data.totalNutrients.MG.quantity*10)/10 + ' ' + data.totalNutrients.MG.unit;
    }
    else {MG = '-'}
    if (typeof(data.totalDaily.MG) != 'undefined') {
        dailyMG = Math.round(data.totalDaily.MG.quantity) + ' ' + data.totalDaily.MG.unit;
    } else {dailyMG = '-'};

    if (typeof(data.totalNutrients.K) != 'undefined') {
        K = Math.round(data.totalNutrients.K.quantity*10)/10 + ' ' + data.totalNutrients.K.unit;
    }
    else {K = '-'}
    if (typeof(data.totalDaily.K) != 'undefined') {
        dailyK = Math.round(data.totalDaily.K.quantity) + ' ' + data.totalDaily.K.unit;
    } else {dailyK = '-'};


    return (
        <section className='facts-container'>
                <h2>Nutrition Facts</h2>
            
                <table>
                    <tbody>
                        <tr className='calories'>
                            <th>Calories</th>
                            <td><b>{ data.calories.toFixed() }</b></td>
                        </tr>
                        <tr>
                            <td className='daily-prcnt'><b>% Daily Value*</b></td>
                        </tr>
                        <tr>
                            <th>Total Fat - { FAT } </th>
                            <td><b>{ dailyFAT }</b></td>
                        </tr>
                        <tr>
                            <th className='step'>Saturated Fat - { FASAT }</th>
                            <td><b>{ dailyFASAT }</b></td>
                        </tr>
                        <tr>
                            
                            <th className='step'>Trans Fat - { FATRN }</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Cholesterol - { CHOLE }</th>
                            <td><b>{ dailyCHOLE }</b></td>
                        </tr>
                        <tr>
                            <th>Sodium - { NA }</th>
                            <td><b>{ dailyNA }</b></td>
                        </tr>
                        <tr>
                            <th>Total Carbohydrate - { CHOCDF }</th>
                            <td><b>{ dailyCHOCDF }</b></td>
                        </tr>
                        <tr>
                            
                            <th className='step'>Dietary Fiber - { FIBTG }</th>
                            <td><b>{ dailyFIBTG }</b></td>
                        </tr>
                        <tr>
                            
                            <th className='step'>Total Sugars - { SUGAR }</th>
                            <td></td>
                        </tr>
                        <tr>
                            
                            <th className='step'>Includes - { SUGARadded } Added Sugars</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Protein - { PROCNT }</th>
                            <td><b>{ dailyPROCNT }</b></td>
                        </tr>
                        <tr>			  
                            <th className='step'>Vitamin A, RAE - { VITA_RAE }</th>
                            <td><b>{ dailyVITA_RAE }</b></td>
                        </tr>
                        <tr>			  
                            <th className='step'>Vitamin B6 - { VITB6A }</th>
                            <td><b>{ dailyVITB6A }</b></td>
                        </tr>
                        <tr>			  
                            <th className='step'>Vitamin C - { VITC }</th>
                            <td><b>{ dailyVITC }</b></td>
                        </tr>
                        <tr>			  
                            <th className='step'>Vitamin D - { VITD }</th>
                            <td><b>{ dailyVITD }</b></td>
                        </tr>
                        <tr>
                            <th className='step'>Calcium - { CA }</th>
                            <td><b>{ dailyCA }</b></td>
                        </tr>
                        <tr>
                            <th className='step'>Iron - { FE }</th>
                            <td><b>{ dailyFE }</b></td>			  
                        </tr>
                        <tr>
                            <th className='step'>Magnesium - { MG }</th>
                            <td><b>{ dailyMG }</b></td>
                        </tr>
                        <tr>
                            <th className='step'>Potassium - { K }</th>
                            <td><b>{ dailyK }</b></td>
                        </tr>
                    </tbody>
                </table>
            <h6>*Percent Daily Values are based on a 2000 calorie diet</h6>
        </section>
    );
}
export default NutritionDescription;