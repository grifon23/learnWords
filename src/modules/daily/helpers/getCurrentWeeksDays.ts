import moment from "moment"

export const getCurrentWeekDays = () => {
    const numberDay = moment().startOf('week')
    const currDate = moment().format('YYYY-MM-DD')

    const days = () => {
        const days = []
        for (let i = 0; i <= 6; i++) {
            days.push(
                moment(numberDay)
                    .add(i, 'days')
                    .format('llll')
                    .split(' ')
                    .slice(0, 2),
            )
        }

        return days
    }
    console.log("daysOfWeek", days);
    const daysWeek = days()
    console.log("dayOfWeek", daysWeek);
    let weekDaysName = daysWeek.map(item => {
        const nameDay = item[0].substring(0, 2)
        const day = {
            name: nameDay,
            numberDay: item[1],
        }
        return day
    })
    return weekDaysName
}