var month = {
    Jan: 31,
    Feb: 28,
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
    Jul: 31,
    Aug: 31,
    Sep: 30,
    Oct: 31,
    Nov: 30,
    Dec: 31
}

var app = new Vue({
    el: "#app",
    data: {
        col: 30,
        row: 10,
        year: 2019,
        month: month
    },
    methods: {
        isLeapYear(year) {
            if((year%4 == 0) && (year%100 != 0) || (year%400 == 0)) {
                this.month.Feb = 29;
            } else {
                this.month.Feb = 28;
            }
        }
    },
    created() {
        this.isLeapYear(this.year);
    }
});