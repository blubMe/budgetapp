const headercontentStyle = `
<style>
h1 {
    margin: 0;
}
.header-desc__inner {
    padding-top: 16px;
}
</style>
`

const date = new Date()
let monthList = new Array
monthList[0] = "January";
monthList[1] = "February";
monthList[2] = "March";
monthList[3] = "April";
monthList[4] = "May";
monthList[5] = "June";
monthList[6] = "July";
monthList[7] = "August";
monthList[8] = "September";
monthList[9] = "October";
monthList[10] = "November";
monthList[11] = "December";
const month = monthList[date.getMonth()]

const headercontent = `
    <div class="header-desc__inner">
        <h1>Avaliable budget in ${month}</h1>
    </div>
`

const cardcontent = `
    <div class="card">
        <h3 class="card__amount"></h3>
        <p class="card__details"></p>
    </div>
`

const cardcontentStyle = `
    <style>
        .blue {
            background: #0076ff;
            box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);
        }.red {
            background: #eb4962;
            box-shadow: 0 4px 14px 0 #eb496299;
        }
        .card {
            padding: 10px 15px;
            border-radius: 3px;
            margin: 16px 0;
        }
        h3,p {
            color: white;
            margin: 0;
        }
    </style>
`
const footer = `
    <footer>
        <span>Made with love<span>
    </footer>
`