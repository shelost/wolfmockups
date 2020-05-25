const Data =
[
    {
        green: 7,
        red: 3
    },
    {
        green: 7,
        red: 3
    },
    {
        green: 7,
        red: 3
    },
    {
        green: 7,
        red: 3
    },
    {
        green: 7,
        red: 3
    },
    {
        green: 7,
        red: 3
    },
]

let g;
let r;

var green = '#00CC3E'
var red = '#DF0000'

const loop = () => {


    for (let i=0; i<Data.length; i++){

        g =  Math.floor(Data[i].green/(Data[i].green + Data[i].red)*100)
        r =  Math.floor(Data[i].red/(Data[i].green + Data[i].red)*100)
        Class('green')[i].style.flex = g
        Class('red')[i].style.flex = r

        if (g > r){
            if (i != 4 && i != 3){
                Class('expo')[i].style.color = green
            }else{
                Class('expo')[i].style.color = 'white'
            }

            Class('percentage')[i].innerHTML = g + '%'
            Class('verdict')[i].innerHTML = 'BUY'
        }else{
            if (i != 4 && i != 3){
                Class('expo')[i].style.color = red
            }else{
                Class('expo')[i].style.color = 'white'
            }

            Class('percentage')[i].innerHTML = r + '%'
            Class('verdict')[i].innerHTML = 'SELL'
        }

    }


}



Class('bar')[2].style.height = '1vw';
Class('green')[2].style.borderRadius = '1vw 0 0 1vw';
Class('red')[2].style.borderRadius = '0 1vw 1vw 0';

for (let i=0; i<Data.length; i++){
    Class('bull')[i].onclick = () => { Data[i].green ++ }
    Class('bear')[i].onclick = () => { Data[i].red ++ }

    if (i == 1 || i == 4){

        Class('green')[i].classList.add('hidden')
        Class('red')[i].classList.add('hidden')
        Class('expo')[i].classList.add('hidden')

        if (i == 1){
            Class('bull')[i].onclick = () => {
                Data[i].green ++
                Class('green')[i].classList.remove('hidden')
                Class('red')[i].classList.remove('hidden')
                Class('expo')[i].classList.remove('hidden')
                Class('percent')[i].innerHTML = g
            }
            Class('bear')[i].onclick = () => {
                Data[i].red ++
                Class('green')[i].classList.remove('hidden')
                Class('red')[i].classList.remove('hidden')
                Class('expo')[i].classList.remove('hidden')
                Class('percent')[i].innerHTML = r
            }
        }else{

            Class('bar')[i].style.position = 'absolute'
            Class('bar')[i].style.top = '0'
            Class('bar')[i].style.left = '0'
            Class('bar')[i].style.width = '100%'
            Class('bar')[i].style.height = '100%'

            Class('green')[i].style.borderRadius = '0.5vw 0 0 0.5vw'
            Class('red')[i].style.borderRadius = '0 0.5vw 0.5vw 0'

            Class('bull')[i].onclick = () => {
                Data[i].green ++
                Class('green')[i].classList.remove('hidden')
                Class('red')[i].classList.remove('hidden')
                Class('expo')[i].classList.remove('hidden')
                Class('vote')[2].classList.add('hidden')
            }
            Class('bear')[i].onclick = () => {
                Data[i].red ++
                Class('green')[i].classList.remove('hidden')
                Class('red')[i].classList.remove('hidden')
                Class('expo')[i].classList.remove('hidden')
                Class('vote')[2].classList.add('hidden')

            }
        }

    }
}

setInterval(loop, 1000/30)

