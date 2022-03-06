import { DateTime } from 'luxon'

class DateService{
    public defaultFormat = 'yyyy-mm-dd'
    public count = 0;
    constructor(defaultFormat: string | null = null){
        this.defaultFormat = defaultFormat ?? this.defaultFormat
        console.log("test")
    }
    

    public toDateTime(date: DateTime | null = null, time: DateTime | null= null){
        let dateTime = DateTime.now();

        if(date){
            dateTime = dateTime.set({year: date.year, month: date.month, day: date.month})
        }
        if(time){
            dateTime = dateTime.set({hour: time.hour, minute: time.minute})
        }
        console.log(this.count)
        this.count = this.count +1;
        return dateTime
    }

    public toDate(dateTime: DateTime = DateTime.now(), format: string = this.defaultFormat){
        return dateTime.toFormat(format)
    }
}

export default new DateService()