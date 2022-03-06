import { DateTime } from 'luxon'

export default class DateService{
    public defaultFormat = "MM dd yyyy"

    public static toDateTime(date: DateTime | null = null, time: DateTime | null= null){
        let dateTime = DateTime.now();

        if(date){
            dateTime = dateTime.set({year: date.year, month: date.month, day: date.month})
        }
        if(time){
            dateTime = dateTime.set({hour: time.hour, minute: time.minute})
        }
        return dateTime
    }

    public toDate(dateTime: DateTime = DateTime.now(), format: string = this.defaultFormat){
        return dateTime.toFormat(format)
    }
}