import React, { useCallback, useState } from 'react';
import stl from './AddTask.module.css';
import { v4 } from 'uuid'

export const AddTaskComponent = props => {
    const componentsList = [];
    const { checkboxHandler, radioHandler, costHandler } = props;


    for (const key in props) {

        props[key]
            &&
            props[key].tasks
            &&
            componentsList.push(
                { tasks: props[key].tasks, id: props[key].id, typeOfSystem: key, area: props[key].area }
            )
    }

    return <>
        {componentsList.map(item => {

            return <TitleComponent
                {...props}
                key={item.area}
                checkboxHandler={checkboxHandler}
                radioHandler={radioHandler}
                costHandler={costHandler}
                title={item.area}

                id={item.id}
                content={item.tasks}
                typeOfSystem={item.typeOfSystem}
            />
        })}
    </>
}




const TitleComponent = props => {
    const [isOpen, setOpen] = useState(false);
    const { checkboxHandler, radioHandler, costHandler, title, content, typeOfSystem } = props;

    return <>
        <div
            className={`${stl.title} ${isOpen && stl.stickyTitle}`}
            onClick={() => setOpen(!isOpen)}
        >
            {title}
        </div>
        {
            isOpen
            &&
            content.map(item => <ContentComponent
                {...props}
                key={item.id}
                checkboxHandler={checkboxHandler}
                radioHandler={radioHandler}
                costHandler={costHandler}
                listItem={item.title}
                id={item.id}
                showBtn={item.showBtn && item.showBtn}
                sides={item.sides}
                cost={item.cost}
                typeOfSystem={typeOfSystem}
            />
            )
        }
        {
            props.typeOfSystem === 'custom' && isOpen
                ?
                <button
                    className={stl.customAddTaskBtn}
                    onClick={() => props.addCustomTask({ id: props.idGen(), sideId: props.idGen() })}
                >
                    Добавить работу
                    </button>
                :
                null
        }
    </>
}




const ContentComponent = props => {
    const { checkboxHandler, typeOfSystem, radioHandler } = props;
    const checkAllSides = () => {
        if (!props.sides) {
            return
        }
        props.sides.forEach(item => {
            checkboxHandler({ name: item.side.name, id: props.id, typeOfSystem }, true);
        })
    }
    const uncheckAllSides = () => {
        if (!props.sides) {
            return
        }
        props.sides.forEach(item => {
            checkboxHandler({ name: item.side.name, id: props.id, typeOfSystem }, false);
        })
    }
    const calcSidesLength = () => {
        if (!props.sides) {
            return
        }
        const length = props.sides.map(item => {
            return item.side.subSides ? item.side.subSides : item
        }).flat().filter(item => item !== undefined).length


        const checked = props.sides.filter(item => {
            if (item.side.subSides) {
                const subs = item.side.subSides.filter(subItem => {
                    return subItem.isChecked;
                })
                return subs.length
            }
            return item.side.isChecked
        })
        const finalLength = checked.map(item => {
            return item.side.subSides && item.side.subSides.filter(filterItem => filterItem.isChecked)
        })
        return (finalLength.flat().length / length) * 100;
    }

    return (
        <div className={stl.list} >
            {props.typeOfSystem === 'custom'
                ?
                //кастомный ввод
                <>
                    <label
                        className={stl.customTitleLabel}
                        htmlFor='customTitle'>

                        <input
                            id='customTitle'
                            className={stl.customTitle}
                            placeholder={'Где делаем'}
                            defaultValue={props.listItem}
                            onChange={(e) => props.setCustomTitle({ value: e.target.value, id: props.id })}
                        />
                    </label>
                </>
                //кастомный ввод
                :
                <span className={stl.listComponent}> {props.listItem} </span>
            }

            <div className={stl.checkboxContainer}>
                {
                    props.sides && props.sides.map(item => {
                        return <ContentCheckBoxes
                            {...props}
                            key={item.id}
                            checkboxHandler={checkboxHandler}
                            radioHandler={radioHandler}
                            name={item.side.name}
                            isChecked={item.side.isChecked}
                            id={props.id}
                            showBtn={props.showBtn}
                            sideId={item.id}
                            typeOfSystem={typeOfSystem}
                            subSides={item.side.subSides && item.side.subSides}
                        />
                    })

                }
                {
                    props.typeOfSystem === 'custom'
                        ?
                        <button
                            onClick={() => props.addCustomTaskItem({ id: props.id, sideId: props.idGen() })}
                            className={stl.customAddTaskItem}
                        >
                            Добавить задачу
                    </button>
                        :
                        null
                }
            </div>
            {
                props.typeOfSystem === 'custom'
                    ?

                    <input
                        type='number'
                        className={stl.customCostInput}
                        placeholder={'0 грн'}
                        defaultValue={props.cost}
                        onChange={(e) => props.setCustomCost({ value: e.target.value, id: props.id })}
                    />

                    :
                    <div className={stl.costContainer}>
                        <input
                            type='number'
                            className={stl.cost}
                            defaultValue={props.cost}
                            placeholder='0 грн'
                            onChange={(e) => props.costHandler(props, e.target.value)}
                        />
                    </div>
            }
            {
                props.showBtn ?
                    <div className={stl.buttonBlock}>
                        <button
                            style={{
                                background: `linear-gradient(90deg,darkcyan ${calcSidesLength()}%, transparent 0% )`
                            }}
                            className={stl.checkAll}
                            onClick={checkAllSides}
                        >
                            {'Выбрать все'}
                        </button>
                        <button style={{
                            background: `linear-gradient(270deg,transparent ${calcSidesLength()}%, #a25050 0% )`
                        }}
                            className={stl.uncheckAll}
                            onClick={uncheckAllSides}>
                            {'Отменить все'}
                        </button>
                    </div>
                    :
                    null
            }
            {
                typeOfSystem === 'custom'
                    ?
                    <button
                        className={stl.customRemTaskBtn}
                        onClick={() => props.removeCustomTask({ id: props.id })}
                    >
                        Убрать
                </button>
                    :
                    null
            }

        </div>
    )
}

const ContentCheckBoxes = props => {
    const id = v4();
    const checkBox = (e) => {
        props.checkboxHandler({
            typeOfSystem: props.typeOfSystem,
            isSubSides: props.isSubSides,
            sideId: props.sideId,
            name: props.name,
            id: props.id,
        }, e.target.checked)
    }
    const radio = (e) => {
        props.radioHandler({
            name: props.name,
            id: props.id,
            typeOfSystem: props.typeOfSystem,
            isSubSides: props.isSubSides,
            radio: !props.showBtn,
            sideId: props.sideId,
        }, e.target.checked)
    }

    const clearRadio = (e) => {
        props.radioHandler({
            name: props.name,
            id: props.id,
            typeOfSystem: props.typeOfSystem,
            isSubSides: props.isSubSides,
            sideId: props.sideId,
            radio: !props.showBtn,
            clear: true,
        }, e.target.checked)
    }

    return (
        props.typeOfSystem === 'custom'
            ?
            //кастомный ввод работы
            <div className={stl.customTaskItemCont}>
                <input
                    className={stl.customTaskTemInput}
                    type='text'
                    placeholder={'Что делаем'}
                    defaultValue={props.name}
                    onChange={(e) => props.setCustomTask({ value: e.target.value, id: props.id, sideId: props.sideId })}
                />
                <button
                    className={stl.customRemTaskItemBtn}
                    onClick={() => props.removeCustomTaskItem({ id: props.id, sideId: props.sideId })}
                >
                    x
                </button>
            </div>
            //кастомный ввод работы
            :
            <div >
                <input
                    onChange={(e) => props.showBtn ? checkBox(e) : radio(e)}
                    id={id}
                    type={props.showBtn ? 'checkbox' : 'radio'}
                    name={props.id}
                    checked={props.isChecked}
                />
                <label className={stl.label} htmlFor={id}>

                    {props.name}
                </label>
                {
                    (props.isChecked && !props.showBtn)
                    &&
                    <button onClick={(e) => clearRadio(e)}>
                        {'Отменить'}
                    </button>
                }
                <div className={stl.subList}>
                    {
                        props.isChecked
                        &&
                        props.subSides && props.subSides.map(item => {
                            return <ContentCheckBoxes
                                id={props.id}
                                typeOfSystem={props.typeOfSystem}
                                sideId={props.sideId}
                                isChecked={item.isChecked}
                                name={item.name}
                                isSubSides={true}
                                showBtn={props.showBtn}
                                checkboxHandler={props.checkboxHandler} />
                        })
                    }
                </div>
            </div>
    )
}