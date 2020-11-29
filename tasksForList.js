
const tasksForList = {
    chassisTasksGlobal:{
        brakeSystem:{
            area:'Тормозная система',
            tasks:[
                {title: 'Торм. диски',
                    showBtn: true,
                    sides:[
                        {side: { isChecked: false, name: 'Передние' }},
                        {side: { isChecked: false,name:'Задние'}}
                    ],
                    cost:'',
                },
                {title: 'Торм. колодки',
                    showBtn: true,
                    sides:[
                        {side: { isChecked: false, name: 'Передние' }},
                        {side: { isChecked: false,name:'Задние'}} 
                    ],
                    cost:'',
                },
                {title: 'Торм. шланги',
                    showBtn: true,
                    sides:[ 
                        {side: { isChecked: false, name: 'Передний Л' }}, 
                        {side: { isChecked: false,name:'Задний Л'}},
                        {side: { isChecked: false, name: 'Передний П' }}, 
                        {side: { isChecked: false,name:'Задний П'}} 
                    ],
                    cost:'',
                },
                {title: 'Торм. магистраль',
                    showBtn: true,
                    sides:[ 
                        {side: { isChecked: false, name: 'Передняя Л' }}, 
                        {side: { isChecked: false,name:'Задняя Л'}},
                        {side: { isChecked: false, name: 'Передняя П' }}, 
                        {side: { isChecked: false,name:'Задняя П'}} 
                    ],
                    cost:'',
                },
                {title: 'Торм. суппорт',
                    showBtn: true,
                    sides:[
                        {side: { isChecked: false, name: 'Передний Л' }}, 
                        {side: { isChecked: false,name:'Задний Л'}},
                        {side: { isChecked: false, name: 'Передний П' }}, 
                        {side: { isChecked: false,name:'Задний П'}} 
                    ],
                    cost:'',
                },
                {title: 'Скоба суппорта',
                    showBtn: true,
                    sides:[
                        {side: { isChecked: false, name: 'Пер лев' }}, 
                        {side: { isChecked: false,name:'Зад лев'}},
                        {side: { isChecked: false, name: 'Пер прав' }}, 
                        {side: { isChecked: false,name:'Зад прав'}} 
                    ],
                     cost:''
                },
                {title: 'Направляюшие суппорта',
                    showBtn: true,
                    sides:[
                        {side: { isChecked: false, name: 'Пер лев' }}, 
                        {side: { isChecked: false,name:'Зад лев'}},
                        {side: { isChecked: false, name: 'Пер прав' }}, 
                        {side: { isChecked: false,name:'Зад прав'}} 
                    ],
                     cost:'',
                },
                {title: 'Глав. торм. цилиндр',
                    // showBtn: true,
                    sides:[
                        {side:{ isChecked: false, name: 'Замена' }},
                        {side:{ isChecked: false, name: 'Ремонт' }},
                    ],
                     cost:'',
                },
                {title: 'Вакуумный усилитель',
                    sides:[
                        {side:{ isChecked: false, name: 'Замена' }},
                        {side:{ isChecked: false, name: 'Ремонт' }},

                    ],
                    cost:'',
                },
                {title: 'ABS', 
                    sides:[
                        {side:{ isChecked: false, name: 'Замена блока' }},
                        {side:{ isChecked: false, name: 'Ремонт блока' }},
                        {side:{ isChecked: false, name: 'ABS' }},
                    ],
                    cost:'',
                },
                {title: 'Замента торм. жидкости',
                    sides:[
                        {side:{ isChecked: false, name: 'Полная замена' }},
                        {side:{ isChecked: false, name: 'Замена в бачке' }},
                        {side:{ isChecked: false, name: 'Забить х*й' }},
                    ],
                    cost:'',
                },

            ]
        },
        chassisSystem:{
            area: 'Ходовая',
            tasks:[
                {title: 'Рычаги',
                showBtn: true,
                    sides:[
                        {side: { isChecked: false, name: 'Пер лев',
                                subSides: [
                                    { isChecked: false, name: 'Верх',},
                                    { isChecked: false, name: 'Ниж',},
                                    { isChecked: false, name: 'Пер',},
                                    { isChecked: false, name: 'Зад',},
                                    { isChecked: false, name: 'Верх пер',},
                                    { isChecked: false, name: 'Верх зад',},
                                    { isChecked: false, name: 'Ниж пер',},
                                    { isChecked: false, name: 'Ниж зад',},
                                ]
                            }
                        }, 
                        {side: { isChecked: false,name:'Зад лев',
                                subSides: [
                                    { isChecked: false, name: 'Верх',},
                                    { isChecked: false, name: 'Ниж',},
                                    { isChecked: false, name: 'Пер',},
                                    { isChecked: false, name: 'Зад',},
                                    { isChecked: false, name: 'Верх пер',},
                                    { isChecked: false, name: 'Верх зад',},
                                    { isChecked: false, name: 'Ниж пер',},
                                    { isChecked: false, name: 'Ниж зад',},
                                    { isChecked: false, name: 'Продольный',},
                                ]
                            }
                        },
                        
                        {side: { isChecked: false, name: 'Пер прав',
                                subSides: [
                                    { isChecked: false, name: 'Верх',},
                                    { isChecked: false, name: 'Ниж',},
                                    { isChecked: false, name: 'Пер',},
                                    { isChecked: false, name: 'Зад',},
                                    { isChecked: false, name: 'Верх пер',},
                                    { isChecked: false, name: 'Верх зад',},
                                    { isChecked: false, name: 'Ниж пер',},
                                    { isChecked: false, name: 'Ниж зад',},
                                ]
                            }
                        }, 
                        {side: { isChecked: false,name:'Зад прав',
                                subSides: [
                                    { isChecked: false, name: 'Верх',},
                                    { isChecked: false, name: 'Ниж',},
                                    { isChecked: false, name: 'Пер',},
                                    { isChecked: false, name: 'Зад',},
                                    { isChecked: false, name: 'Верх пер',},
                                    { isChecked: false, name: 'Верх зад',},
                                    { isChecked: false, name: 'Ниж пер',},
                                    { isChecked: false, name: 'Ниж зад',},
                                    { isChecked: false, name: 'Продольный',},
                                ]
                            }
                        } 
                    ]
                },
                {title: 'Сайлентблок рычага',
                showBtn: true,
                sides:[
                    {side: { isChecked: false, name: 'Пер лев',
                            subSides: [
                                { isChecked: false, name: 'Верх',},
                                { isChecked: false, name: 'Ниж',},
                                { isChecked: false, name: 'Пер',},
                                { isChecked: false, name: 'Зад',},
                                { isChecked: false, name: 'Верх пер',},
                                { isChecked: false, name: 'Верх зад',},
                                { isChecked: false, name: 'Ниж пер',},
                                { isChecked: false, name: 'Ниж зад',},
                            ]
                        }
                    }, 
                    {side: { isChecked: false,name:'Зад лев',
                            subSides: [
                                { isChecked: false, name: 'Верх',},
                                { isChecked: false, name: 'Ниж',},
                                { isChecked: false, name: 'Пер',},
                                { isChecked: false, name: 'Зад',},
                                { isChecked: false, name: 'Верх пер',},
                                { isChecked: false, name: 'Верх зад',},
                                { isChecked: false, name: 'Ниж пер',},
                                { isChecked: false, name: 'Ниж зад',},
                                { isChecked: false, name: 'Продольный',},
                            ]
                        }
                    },
                    
                    {side: { isChecked: false, name: 'Пер прав',
                            subSides: [
                                { isChecked: false, name: 'Верх',},
                                { isChecked: false, name: 'Ниж',},
                                { isChecked: false, name: 'Пер',},
                                { isChecked: false, name: 'Зад',},
                                { isChecked: false, name: 'Верх пер',},
                                { isChecked: false, name: 'Верх зад',},
                                { isChecked: false, name: 'Ниж пер',},
                                { isChecked: false, name: 'Ниж зад',},
                            ]
                        }
                    }, 
                    {side: { isChecked: false,name:'Зад прав',
                            subSides: [
                                { isChecked: false, name: 'Верх',},
                                { isChecked: false, name: 'Ниж',},
                                { isChecked: false, name: 'Пер',},
                                { isChecked: false, name: 'Зад',},
                                { isChecked: false, name: 'Верх пер',},
                                { isChecked: false, name: 'Верх зад',},
                                { isChecked: false, name: 'Ниж пер',},
                                { isChecked: false, name: 'Ниж зад',},
                                { isChecked: false, name: 'Продольный',},
                            ]
                        }
                    } 
                ]
                },
                {title: 'Шаровая опора',
                    showBtn: true,
                    sides:[
                        {side: { isChecked: false, name: 'Пер лев',
                                subSides: [
                                    { isChecked: false, name: 'Верх',},
                                    { isChecked: false, name: 'Ниж',},

                                    { isChecked: false, name: 'Верх пер',},
                                    { isChecked: false, name: 'Верх зад',},
                                    { isChecked: false, name: 'Ниж пер',},
                                    { isChecked: false, name: 'Ниж зад',},
                                ]
                            }
                        }, 
                        {side: { isChecked: false,name:'Зад лев',
                                subSides: [
                                    { isChecked: false, name: 'Верх',},
                                    { isChecked: false, name: 'Ниж',},

                                ]
                            }
                        },
                        
                        {side: { isChecked: false, name: 'Пер прав',
                                subSides: [
                                    { isChecked: false, name: 'Верх',},
                                    { isChecked: false, name: 'Ниж',},

                                    { isChecked: false, name: 'Верх пер',},
                                    { isChecked: false, name: 'Верх зад',},
                                    { isChecked: false, name: 'Ниж пер',},
                                    { isChecked: false, name: 'Ниж зад',},
                                ]
                            }
                        }, 
                        {side: { isChecked: false,name:'Зад прав',
                                subSides: [
                                    { isChecked: false, name: 'Верх',},
                                    { isChecked: false, name: 'Ниж',},
                                ]
                            }
                        } 
                    ]
                },
                {title: 'Амортизатор',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Пер лев' }}, 
                        {side: { isChecked: false,name:'Зад лев'}},
                        {side: { isChecked: false, name: 'Пер прав' }}, 
                        {side: { isChecked: false,name:'Зад прав'}} 
                    ],
                },
                {title: 'Опора амортизатора',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Пер лев' }}, 
                        {side: { isChecked: false,name:'Зад лев'}},
                        {side: { isChecked: false, name: 'Пер прав' }}, 
                        {side: { isChecked: false,name:'Зад прав'}} 
                    ],
                },
                {title: 'ШРУС',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Пер лев внутр' }}, 
                        {side: { isChecked: false, name: 'Пер лев наруж' }}, 
                        {side: { isChecked: false,name:'Зад лев внутр'}},
                        {side: { isChecked: false,name:'Зад лев наруж'}},
                        {side: { isChecked: false, name: 'Пер прав внутр' }}, 
                        {side: { isChecked: false, name: 'Пер прав наруж' }}, 
                        {side: { isChecked: false,name:'Зад прав внутр'}},
                        {side: { isChecked: false,name:'Зад прав наруж'}} ,
                    ],
                },
                {title: 'Пыльник ШРУСа',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Пер лев внутр' }}, 
                        {side: { isChecked: false, name: 'Пер лев наруж' }}, 
                        {side: { isChecked: false,name:'Зад лев внутр'}},
                        {side: { isChecked: false,name:'Зад лев наруж'}},
                        {side: { isChecked: false, name: 'Пер прав внутр' }}, 
                        {side: { isChecked: false, name: 'Пер прав наруж' }}, 
                        {side: { isChecked: false,name:'Зад прав внутр'}},
                        {side: { isChecked: false,name:'Зад прав наруж'}} ,
                    ],
                },

                {title: 'Подшипник ступицы',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Пер лев' }}, 
                        {side: { isChecked: false,name:'Зад лев'}},
                        {side: { isChecked: false, name: 'Пер прав' }}, 
                        {side: { isChecked: false,name:'Зад прав'}} 
                    ],
                },
                {title: 'Подшипник полуоси',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false,name:'Зад лев'}},
                        {side: { isChecked: false,name:'Зад прав'}} 
                    ],
                },
                {title: 'Рулевая тяга',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Лев' }}, 
                        {side: { isChecked: false,name:'Прав'}},
                    ],
                },
                {title: 'Рулевой наконечник',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Лев' }}, 
                        {side: { isChecked: false,name:'Прав'}},
                    ],
                },
                {title: 'Рулевая рейка',
                    sides:[
                        {side: { isChecked: false, name: 'Ремонт' }}, 
                        {side: { isChecked: false,name:'Замена'}},
                        {side: { isChecked: false,name:'Регулировка'}},
                    ],
                },
                {title: 'Привод М/AКПП',
                    sides:[
                        {side: { isChecked: false, name: 'Ремонт' }}, 
                        {side: { isChecked: false,name:'Замена'}},
                    ],
                },
                {title: 'Привод редуктора',
                    sides:[
                        {side: { isChecked: false, name: 'Ремонт' }}, 
                        {side: { isChecked: false,name:'Замена'}},
                    ],
                },
                {title: 'Пыльник рул. рейки',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Лев' }}, 
                        {side: { isChecked: false,name:'Прав'}},
                    ],
                },
                {title: 'Сальник редуктора(зад)',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Лев' }}, 
                        {side: { isChecked: false,name:'Прав'}},
                    ],
                },
                {title: 'Сальник М/АКПП',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Лев' }}, 
                        {side: { isChecked: false,name:'Прав'}},
                    ],
                },
                {title: 'Сальник моста',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Лев' }}, 
                        {side: { isChecked: false,name:'Прав'}},
                    ],
                },
                {title: 'Мост',
                    sides:[
                        {side: { isChecked: false, name: 'Замена' }}, 
                    ],
                },
                {title: 'Втулки стабилизатора переднего',
                    sides:[
                        {side: { isChecked: false, name: 'Замена' }}, 
                        {side: { isChecked: false,name:'Поставить подложки'}},
                    ],
                },
                {title: 'Втулки стабилизатора заднего',
                    sides:[
                        {side: { isChecked: false, name: 'Замена' }}, 
                        {side: { isChecked: false,name:'Поставить подложки'}},
                    ],
                },
                {title: 'Стабилизатор передний',
                    sides:[
                        {side: { isChecked: false, name: 'Замена' }}, 
                    ],
                },
                {title: 'Стабилизатор задний',
                sides:[
                    {side: { isChecked: false, name: 'Замена' }}, 
                ],
            },
                {title: 'Пружины',
                    showBtn:true,
                    sides:[
                        {side: { isChecked: false, name: 'Пер лев' }}, 
                        {side: { isChecked: false,name:'Зад лев'}},
                        {side: { isChecked: false, name: 'Пер прав' }}, 
                        {side: { isChecked: false,name:'Зад прав'}} 
                    ],         
                },
                {title: 'Подрамник',
                    sides:[
                        {side: { isChecked: false, name: 'Замена' }}, 
                        {side: { isChecked: false,name:'Замена с/б'}},
                        {side: { isChecked: false, name: 'Ремонт' }}, 
                    ],
                },

            ]
        }

    },
    

    /////////////////////////////////////////////////////////////
    engineTasksGlobal: {
        outterWorks:{
            area:'Работы снаружи мотора',
            tasks: [
                {
                    title: 'Замеры', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замер компрессии', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замер зарядки аккумулятора', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замер состояния тормозной жидкости', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замер состояния антифриза', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Проверка свечей', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Проверка уровня масла двигателя', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Проверка уровня масла МКПП', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Проверка уровня масла АКПП', value: '', isChecked: false, cost: '' }},

                    ]
                },
                {
                    title: 'Впускная система', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Прокладка впускного коллектора', value: 'intake_sealant', isChecked: false, cost: '' }},
                        { side:{ name: 'Прокладка дроссельной заслонки', value: 'throttle_sealant', isChecked: false, cost: '' }},
                        { side:{ name: 'Чистка дроссельной заслонки', value: 'cleaning_throttle', isChecked: false, cost: '' }},
                        { side:{ name: 'Чистка впускного коллектора', value: 'cleaning_intake', isChecked: false, cost: '' }},
                        { side:{ name: 'Устранение подсоса воздуха', value: 'alir_leaks_repair', isChecked: false, cost: '' }},

                    ]
                },
                {
                    title: 'Выпускная система', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена прокладки вып. коллектора', value: 'exhaust_sealant', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена лямбда-зонда', value: 'lambda_replacement', isChecked: false, cost: '' }},
                        { side:{ name: 'Удаление сажевого фильтра', value: 'diesel_particulate_filter_deletion', isChecked: false, cost: '' }},
                        { side:{ name: 'Удаление катализатора', value: 'catalytic_converter_deletion', isChecked: false, cost: '' }},
                        { side:{ name: 'Устранение прогара выхлоп. сист.', value: 'burnout_repair', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена части выхлоп. сист.', value: 'exhaust_partition_replacement', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена резиновых креплений выхлоп. сист.', value: 'exhaust_bracing_replacement', isChecked: false, cost: '' }},

                    ]
                },
                {
                    title: 'Топливная система', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена топл. фильтра (бензин)', value: 'fuel_filter_replacement_gas', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена топл. фильтра (дизель)', value: 'fuel_filter_replacement_diesel', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена уплотнителей форсунок', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Чистка форсунок', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена форсунок', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена датчика температуры топлива', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена датчика давления топлива', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена топл. насоса (бензин)', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена ТНВД', value: '', isChecked: false, cost: '' }},
                    ]
                },
                {
                    title: 'Система охлаждения', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена помпы', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена охл. жидкости', value: 'cooling_liquid_replacement', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена термостата', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена корпуса термостата', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена прокладки корпуса термостата', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена радиатора охл.двиг.', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена расширительного бачка ', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена вентилятора охлаждения двиг.', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена подкачивающего насоса охл.ж.', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена радиатора печки', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена вискомуфты', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена реле вентилятора', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена дифузора вентилятора', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Устранение течи охл. жидк.', value: '', isChecked: false, cost: '' }},
                    ]
                },
                {
                    title: 'Система газораспределения', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена ремня ГРМ', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена цепи ГРМ', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена комплекта ГРМ (ремень)', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена комплекта ГРМ (цепь)', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена роликов ГРМ', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена шестерни распредвала', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена распредвала', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Регулировка клапанов (шайбы)', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Регулировка клапанов (винты)', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Регулировка клапанов (колпачки)', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена шестерни коленвала', value: '', isChecked: false, cost: '' }},
                    ]
                },
                {
                    title: 'Система зажигания', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена свечей', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена катушек зажигания', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена свечных проводов', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена свечей преднакала', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена тромблера', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Ремонт тромблера', value: '', isChecked: false, cost: '' }},
                    ]
                },
                {
                    title: 'Датчики', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена датчика коленвала', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена датчика распредвала', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена датчика давления масла', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена датчика уровня/качества масла', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена датчика температоры двиг.', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена датчика детонации', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена датчика положения дрос. заслонки', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена датчика масс.расх.возд. (ДМРВ)', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена датчика MAP (мап-датчик)', value: '', isChecked: false, cost: '' }},
                    ]
                },
                {
                    title: 'Сальники и уплотнители', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена сальника коленвала (перед)', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена сальника коленвала (зад)', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена сальника распредвала', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена заглушки распредвала', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена уплотнителя вакуумного насоса', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена прокладки поддона двиг.', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена прокладки крышки ГРМ', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена прокладки крышки клапанов', value: '', isChecked: false, cost: '' }},
                        { side:{ name: 'Замена заглушек блока двиг.', value: '', isChecked: false, cost: '' }},

                    ]
                },
                {
                    title: 'Турбина', value: 'turbo', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена турбины', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Ремонт турбины', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена прокладок турбины', value: '', isChecked: false, cost: ''} }
                    ]
                },
            ]
        },

        innerWorks:{
            area:'Работы внутри мотора',
            tasks: [
                {
                    title: 'Головка блока (ГБЦ)', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена сальников клапанов', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена клапанов', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Притирка клапанов', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Притирка плоскости ГБЦ', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Шабрение посадки распредвала', value: '', isChecked: false, cost: ''} },

                    ]
                },
                {
                    title: 'Поршни', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена поршней', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена поршневых колец', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена поршневых пальцев', value: '', isChecked: false, cost: ''} },
                    ]
                },
                {
                    title: 'Коленвал', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена коленвала', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена вкладышей коренных', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена вкладышей шатунных', value: '', isChecked: false, cost: ''} },
                    ]
                },
                {
                    title: 'Картер', value: '', isChecked: false,
                    showBtn:true,
                    canBeHideTitle: true, 
                    sides: [
                        { side:{ name: 'Замена маслонасоса', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена маслоприемника', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Змена блока балансировки двиг.', value: '', isChecked: false, cost: ''} },
                    ]
                },

            ]
        },

    },
    transmissionTasksGlobal:{
        gearBox:{
            area:'М/А/РКПП',
            tasks:[
                {
                    title: 'Коробка (глобально)',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Ремонт', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена маховика', value: '', isChecked: false, cost: ''} },

                    ]
                },
                {
                    title: 'Кулиса',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена ремкомплекта (труба)', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Регулировка кулисы (труба)', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена тросов кулисы', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Регулировка тросов кулисы', value: '', isChecked: false, cost: ''} },

                    ]
                },
                {
                    title: 'Сцепление',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Прокачка сцепления', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена компл. сцепления (М)', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена выжимной вилки', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена выжимного подшипника', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена гидротрансформатора (А)', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена маховика', value: '', isChecked: false, cost: ''} },

                    ]
                },
                {
                    title: 'Сальники',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена сальника первичного вала', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена сальника хвостовика', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена сальников приводов', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена сальника кулисы', value: '', isChecked: false, cost: ''} },
                    
                    ]
                },
                {
                    title: 'Датчики',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена датчика зад. хода', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена датчика скорости', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена троса спидометра', value: '', isChecked: false, cost: ''} },

                    ]
                },
                {
                    title: 'Масло',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена масла АКПП', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Полная замена масла АКПП', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена масла МКПП', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена масла DSG', value: '', isChecked: false, cost: ''} },

                    ]
                },

                
            ]
        },
        transferBox: {
            area:'Раздатка',
            tasks:[
                {
                    title: 'Масло',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена масла', value: '', isChecked: false, cost: ''} },
                    ]
                },
                {
                    title: 'Сальники',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена сальника зад. хвостовика', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена сальника перед. хвостовика', value: '', isChecked: false, cost: ''} },
                    ]
                },
            ]
        },
        rearAxis: {
            area:'Задний мост (цельный)',
            tasks:[
                {
                    title: 'Редуктор',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Ремонт', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Заварить дифференциал', value: '', isChecked: false, cost: ''} },
                    ]
                },
                {
                    title: 'Сальники',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена сальника хвостовика', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена левого сальника ', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена правого сальника ', value: '', isChecked: false, cost: ''} },
                    ]
                },
                {
                    title: 'Приводы',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена левой полуоси', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена правой полуоси ', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена правого сальника ', value: '', isChecked: false, cost: ''} },
                    ]
                },
                {
                    title: 'Крепления',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена сайлентблоков', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена рессор ', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена пружин ', value: '', isChecked: false, cost: ''} },
                    ]
                },
            ]
        },
        frontAxis: {
            area:'Передний мост',
            tasks:[
                {
                    title: 'Редуктор',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Ремонт', value: '', isChecked: false, cost: ''} },
                    ]
                },
                {
                    title: 'Сальники',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена сальника хвостовика', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена левого сальника ', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена правого сальника ', value: '', isChecked: false, cost: ''} },
                    ]
                },
                {
                    title: 'Приводы',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена левой полуоси', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена правой полуоси ', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена правого сальника ', value: '', isChecked: false, cost: ''} },
                    ]
                },
                {
                    title: 'Крепления',
                    showBtn:true,
                    sides:[
                        { side:{ name: 'Замена сайлентблоков', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена рессор ', value: '', isChecked: false, cost: ''} },
                        { side:{ name: 'Замена пружин ', value: '', isChecked: false, cost: ''} },
                    ]
                },
            ]
        },

    },

}
module.exports = tasksForList;