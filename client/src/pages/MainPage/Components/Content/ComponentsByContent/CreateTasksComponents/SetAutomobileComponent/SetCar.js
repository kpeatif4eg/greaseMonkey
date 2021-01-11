import React, { useRef } from 'react';
import stl from './SetCar.module.css';
import { Loader } from '../../../../Loader/Loader'

export const SetCar = props => {
    const htmlIdMarks = 'cars';
    const htmlIdModels = 'models';

    const { getModel, models, cars, isFetching, setMark, setModel, checkedMark, checkedModel } = props;

    const input1 = useRef(null);
    const input2 = useRef(null);


    const clearInput = (numb) => {
        numb
            ?
            input1.current.value = ''
            :
            input2.current.value = ''
    }

    return (
        <>
            <div className={stl.wrapper}>
                {isFetching && <Loader size='s' />}
            </div>
            <div
                className={stl.form}
            >
                <div className={stl.titleContainer}>
                    <span>Укажи Авто</span>
                </div>
                <div className={stl.inputContainer}>
                    <input
                        ref={input1}
                        list={htmlIdMarks}
                        className={stl.setCar}
                        type='text'
                        defaultValue={checkedMark}
                        placeholder={cars ? cars.join(', ') : 'Марка'}
                        onChange={(e) => { getModel(e.target.value); setModel(e.target.value) }}
                    />
                    <button
                        className={stl.button}
                        onClick={() => clearInput(1)}
                    >
                        x
                </button>
                    <datalist id={htmlIdMarks}>
                        {
                            cars && cars.map(item => <option key={item}>{item}</option>)
                        }
                    </datalist>
                </div>


                <div className={stl.inputContainer}>
                    <input
                        ref={input2}
                        list={htmlIdModels}
                        className={stl.setCar}
                        type='text'
                        defaultValue={checkedModel}
                        placeholder={models ? models.map(item => item.model).join(', ') : 'Модель'}
                        onChange={e => { setMark(e.target.value) }}
                    />
                    <button
                        className={stl.button}
                        onClick={() => clearInput()}
                    >
                        x
                </button>

                    <datalist id={htmlIdModels}>
                        {
                            models && models.map(item => <option key={item.model} >{item.model}</option>)
                        }
                    </datalist>
                </div>
            </div>
        </>
    )
}