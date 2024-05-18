import moment from "moment";

export namespace Utils {
    
    // I love this function
    export const pluralize = (num: number, singular: string, plural: string = `${singular}s`) => `${num} ${num == 1 ? singular : plural}`;

    export const latestTime = (start: moment.Moment, end: moment.Moment) => {
        const duration = moment.duration(end.diff(start));

        const years = duration.years();
        const months = duration.months();
        
        let latestTime;
        if (years > 0) latestTime = pluralize(years, "year");
        else if (months > 0) latestTime = pluralize(months, "month");
        else latestTime = pluralize(duration.days(), "day");

        return latestTime;
    }

}