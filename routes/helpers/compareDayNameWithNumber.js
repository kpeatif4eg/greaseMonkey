module.exports = (stringDay) => {
    const day = stringDay.split('-');
    const days = ['пн','вт','ср','чт','пт','сб','вс',];
    return {
        start: days.findIndex(item=> day[0] === item),
        end:days.findIndex(item=>day[1] === item) + 1
    }
}