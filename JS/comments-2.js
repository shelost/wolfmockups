const Xata = [


    {
        author: 'Michael K',
        date: '3 Days Ago',
        comment: `WOW, Elon Musk has been killing it lately. TSLA to the moon!!!!!!!`,
        height: [],
        focus: false,
        replies: [

            {
                author: 'RandomUser97',
                date: '2 Days Ago',
                comment: `No it's not, TSLA is garbage.`,
                height: [],
                focus: false,
                replies: []
            },

            {
                author: 'RandomUser99',
                date: '2 Days Ago',
                comment: `Agree`,
                height: [],
                focus: false,
                replies: []
            }
        ]
    },

    {
        author: 'Michael K',
        date: '3 Days Ago',
        comment: `I'm not writing comments for very post...`,
        height: [],
        focus: false,
        replies: [

            {
                author: 'Heewon A',
                date: '2 Days Ago',
                comment: `Lame.`,
                height: [],
                focus: false,
                replies: []
            },

            {
                author: 'Heewon B',
                date: '2 Days Ago',
                comment: `Lame.`,
                height: [],
                focus: false,
                replies: []
            },

            {
                author: 'Heewon C',
                date: '2 Days Ago',
                comment: `Lame.`,
                height: [],
                focus: false,
                replies: []
            }
        ]
    },

    {
        author: 'Heewon A',
        date: '3 Days Ago',
        comment: `Then I guess I will`,
        height: [],
        focus: false,
        replies: [

            {
                author: 'Heewon B',
                date: '2 Days Ago',
                comment: `Cool.`,
                height: [],
                focus: false,
                replies: []
            },

        ]
    },

    {
        author: 'SheLost O',
        date: '3 Days Ago',
        comment: `No you won't`,
        height: [],
        focus: false,
        replies: [

            {
                author: 'Heewon A',
                date: '2 Days Ago',
                comment: `Wait, who are you`,
                height: [],
                focus: false,
                replies: []
            },

            {
                author: 'SheLost O',
                date: '1 Days Ago',
                comment: `I'm your conscience. Long time no see.`,
                height: [],
                focus: false,
                replies: []
            },

            {
                author: 'Heewon A',
                date: '2 Days Ago',
                comment: `Darn.`,
                height: [],
                focus: false,
                replies: []
            }
        ]
    },


]

var XACTIVE = 'N'

var XEMPLATE = ``

function createXemplate(){

    XEMPLATE = ``

    for (let i=0; i< Xata.length; i++){

        let entry = Xata[i]

        let temp = ``

        let m1 = 100;
        let m2 = [100, 100]
        let m3 = [100, 100, 100]

        if (Xata[i].focus){

            m1 = i
        }

        for (let j=0; j<Xata[i].replies.length; j++){

            if (Xata[i].replies[j].focus){
                m2 = [i, j]
            }

            for (let k=0; k <Xata[i].replies[j].length; k++){
                if (Xata[i].replies[j].replies[k].focus){
                    m3 = [i, j, k]
                }
            }
        }

        if (m1 == i|| m2[0] == i || m3[0] == i){

            temp += ` <div class = 'comment nobg expanded' id = 'X${i}'> `

        }else{
            temp += ` <div class = 'comment nobg' id = 'X${i}'> `
        }

        temp +=

        `
            <div class = 'self'>
                <h2> ${entry.author} </h2>
                <h3> ${entry.date} </h3>
                <h1> ${entry.comment} </h1>

        `

        if (Xata[i].replies.length > 0){
            temp += `<p> + ${entry.replies.length}</p>`
        }

        temp +=
        `

            </div>

            <div class = 'actions'>
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-down"></i>
                <i class="fas fa-comment"></i>
                <i class="fas fa-retweet"></i>
            </div>

            <div class = 'replies'>
        `


        for (let j=0; j<entry.replies.length; j++){
            let reply = entry.replies[j]

            if (m2[1] == j || m3[1] == j){

                temp +=
                `
                <div class = 'comment nobg expanded-sub' id = 'X${i}&${j}'>
                `
            }else{
                temp +=
                `
                <div class = 'comment nobg' id = 'X${i}&${j}'>
                `
            }

            temp +=
            `
                    <div class = 'self'>
                        <h2> ${reply.author} </h2>
                        <h3> ${reply.date} </h3>
                        <h1> ${reply.comment} </h1>
                    </div>

                    <div class = 'actions-sub'>
                        <i class="fas fa-thumbs-up"></i>
                        <i class="fas fa-thumbs-down"></i>
                        <i class="fas fa-comment"></i>
                        <i class="fas fa-retweet"></i>
                    </div>

                    <div class = 'replies-sub'>

            `

            for (let k=0; k<reply.replies.length; k++){
                let double = reply.replies[k]


                if (m3[0] == i && m3[1] == j && m3[2] == k){

                    temp +=
                    `
                    <div class = 'comment nobg expanded-dub' id = 'X${i}&${j}&${k}'>
                    `
                }else{
                    temp +=
                    `
                    <div class = 'comment nobg' id = 'X${i}&${j}&${k}'>
                    `
                }

                temp +=

                `

                    <div class = 'self'>
                        <h2> ${double.author} </h2>
                        <h3> ${double.date} </h3>
                        <h1> ${double.comment} </h1>
                    </div>

                    <div class = 'actions-dub'>
                        <i class="fas fa-thumbs-up"></i>
                        <i class="fas fa-thumbs-down"></i>
                        <i class="fas fa-comment"></i>
                        <i class="fas fa-retweet"></i>
                    </div>

                    <div class = 'replies'>
                    </div>
                </div>
                `

            }

            temp += `</div> </div>`
        }

        temp += `</div> </div>`

        XEMPLATE += temp

    }


    XEMPLATE +=
    `
    <div class = 'inputbox' >
    <input type = 'text' id = 'xinput' placeholder = 'type a comment...'>
    </div>
    `

    Class('content')[2].innerHTML = XEMPLATE

}


function ReXet(){

    // MAIN LOOP
    for (let i=0; i<Xata.length; i++){

        let v = 0
        for (let j=0; j<Xata[i].replies.length; j++){

            if (Xata[i].replies[j].replies.length > 0){

                for (let k=0; k< Xata[i].replies[j].replies.length; k++){
                    v += selfHeight(Id(`X${i}&${j}&${k}`))
                }
            }
        }

        console.log(v)

        let a = Id(`X${i}`).scrollHeight-window.innerWidth*0.03
        let q = Id(`X${i}`).scrollHeight-window.innerWidth*0.12-v
        let b = selfHeight(Id(`X${i}`))
        Xata[i].height = [a,b,q]

        Id(`X${i}`).onclick = e => {


            if (e.clientY < Id(`X${i}`).getBoundingClientRect().y + b){

                Xata[i].focus = !Xata[i].focus

                let match = false;
                let match2 = false

                for (let j=0; j<Xata[i].replies.length; j++){
                    if (Xata[i].replies[j].focus){
                        Xata[i].replies[j].focus = false
                        Id(`X${i}&${j}`).classList.remove('expanded-sub')
                        match = true
                    }

                    for (let k=0; k<Xata[i].replies[j].replies.length; k++){
                        if (Xata[i].replies[j].replies[k].focus){
                            Xata[i].replies[j].replies[k].focus = false
                            Id(`X${i}&${j}&${k}`).classList.remove('expanded-dub')
                            match2 = true
                        }
                    }
                }



                if (!match && !match2){
                    Xexpand(Id(`X${i}`))
                }

            }
        }

        // REPLY LOOP
        for (let j = 0; j < Xata[i].replies.length; j++){

            let w;

            if (Xata[i].replies[j].replies.length > 0){
                w = 0.9;
            }else{
                w = 1;
            }

            let r = Id(`X${i}&${j}`)

            let c = r.scrollHeight*w
            let d = selfHeight(r)
            Xata[i].replies[j].height = [c,d]

            r.onclick = e => {
                if (e.clientY < r.getBoundingClientRect().y + d){

                    let match = false

                    Xata[i].focus = !Xata[i].focus
                    Xata[i].replies[j].focus = !Xata[i].replies[j].focus

                    for (let k=0; k<Xata[i].replies[j].replies.length; k++){
                        if (Xata[i].replies[j].replies[k].focus){
                            Xata[i].replies[j].replies[k].focus = false
                            Id(`X${i}&${j}&${k}`).classList.remove('expanded-dub')
                            match = true
                        }
                    }
                    if (!match){
                        Xexpand(r)
                    }

                }

            }

            // DUB LOOP
            for (let k = 0; k < Xata[i].replies[j].replies.length; k++){
                let w = Id(`X${i}&${j}&${k}`)

                let e = w.scrollHeight
                let f = selfHeight(w)
                Xata[i].replies[j].replies[k].height = [e,f]

                w.onclick = e => {
                    if (e.clientY < w.getBoundingClientRect().y + f){
                        Xexpand(w)
                    }

                    Xata[i].focus = !Xata[i].focus
                    Xata[i].replies[j].focus = !Xata[i].replies[j].focus
                    Xata[i].replies[j].replies[k].focus = !Xata[i].replies[j].replies[k].focus

                }
            }
        }

    }

    for (let i=0; i<Class('self').length; i++){
        Class('self')[i].addEventListener('mouseover', () => {
            if (Class('self')[i].parentElement.classList.contains('nobg')){
                Class('self')[i].parentElement.style.backgroundColor = 'rgba(255,255,255,0.05)'
            }

        })

        Class('self')[i].addEventListener('mouseleave', () => {
            if (Class('self')[i].parentElement.classList.contains('nobg')){
                Class('self')[i].parentElement.style.backgroundColor = 'rgba(255,255,255,0)'
            }
        })
    }

    for (let i=0; i<Class('fa-comment').length; i++){
        Class('fa-comment')[i].onclick = () => {

            Id('xinput').classList.add('xinput-active')
            console.log('comment')
            XACTIVE = Class('fa-comment')[i].parentElement.parentElement.id

        }
    }

}

createXemplate()
ReXet()


function XetHeight(){

    for (let i=0; i<Xata.length; i++){

        Id(`X${i}`).style.height = Xata[i].height[1] + 'px'

        for (let j=0; j<Xata[i].replies.length; j++){

            Id(`X${i}&${j}`).style.height = Xata[i].replies[j].height[1] + 'px'

            for (let k=0; k<Xata[i].replies[j].replies.length; k++){

                Id(`X${i}&${j}&${k}`).style.height = Xata[i].replies[j].replies[k].height[1] + 'px'
            }
        }
    }

    for (let i=0; i<Xata.length; i++){

        let match = false

        for (let j=0; j<Xata[i].replies.length; j++){
            if (Xata[i].replies[j].replies.length > 0){
                match = true
            }
        }

        if (Contains(Id(`X${i}`), 'expanded')){

            if (match){
                Id(`X${i}`).style.height = Xata[i].height[2] + 'px'
            }else{
                Id(`X${i}`).style.height = Xata[i].height[0] + 'px'
            }


        }

        for (let j=0; j<Xata[i].replies.length; j++){
            if (Contains( Id(`X${i}&${j}`), 'expanded-sub')){
                Id(`X${i}`).style.height = Xata[i].height[0] + 'px'
                Id(`X${i}&${j}`).style.height = Xata[i].replies[j].height[0] + 'px'

            }

            for (let k=0; k<Xata[i].replies[j].replies.length; k++){
                if (Contains(Id(`X${i}&${j}&${k}`), 'expanded-dub')){
                    Id(`X${i}`).style.height = Xata[i].height[0] + 'px'
                    Id(`X${i}&${j}`).style.height = Xata[i].replies[j].height[0] + 'px'
                    Id(`X${i}&${j}&${k}`).style.height = Xata[i].replies[j].replies[k].height[0] + 'px'

                }
            }
        }
    }

}

const Xoop = () => {

    XetHeight()

    if (XACTIVE == 'N'){
        Id('xinput').placeholder = 'Type a comment...'
    }else if (XACTIVE.length == 2){
        Id('xinput').placeholder =  `Reply to ${Xata[parseInt(XACTIVE.substr(1,2))].author}...`
    }else if (XACTIVE.length == 4){
        Id('xinput').placeholder =  `Reply to ${Xata[parseInt(XACTIVE.substr(1,2))].replies[parseInt(XACTIVE.substr(3,4))].author}...`
    }

}


function autoComment(){

    let match = false

    for (let i=0; i<Xata.length; i++){

        if (Contains(Id(`X${i}`), 'expanded')){
            match = true;
            console.log('match')
        }

        for (let j=0; j<Xata[i].length; j++){
            if (Contains(Id(`X${i}&${j}`), 'expanded-sum')){
                match = true;
            }
        }
    }

    if (!match){
        Id('xinput').classList.add('xinput-active')
        XACTIVE = 'N'
    }else{
        Id('xinput').classList.remove('xinput-active')
    }


}

setInterval(Xoop, 1000/30)

autoComment()

function Xexpand(elem){

    var arr = elem.id.substr(1, elem.id.length).split('&')



    switch (arr.length){
        case 1:
            elem.classList.toggle('expanded')

            for (let i=0; i<Xata.length; i++){
                if (i != arr[0]){
                    Xata[i].focus = false;
                    Id(`X${i}`).classList.remove('expanded')
                    for (let j = 0; j < Xata[i].replies.length; j++){
                        Xata[i].replies[j].focus = false;
                        Id(`X${i}&${j}`).classList.remove('expanded-sub')
                        for (let k = 0; k < Xata[i].replies[j].replies.length; j++){
                            Xata[i].replies[j].replies[k].focus = false;
                            Id(`X${i}&${j}&${k}`).classList.remove('expanded-dub')
                        }
                    }
                }
            }
            break;
        case 2:
            elem.classList.toggle('expanded-sub')

            for (let i=0; i<Xata[arr[0]].replies.length; i++){

                if (i != arr[1]){
                    Id(`X${arr[0]}&${i}`).classList.remove('expanded-sub')

                    Xata[arr[0]].replies[i].focus = false
                }
            }
            break;
        case 3:
            elem.classList.toggle('expanded-dub')

            for (let i=0; i<Xata[arr[0]].replies[arr[1]].length; i++){

                if (i != arr[2]){
                    Id(`X${arr[0]}&${arr[1]}&${i}`).classList.remove('expanded-dub')
                    Xata[arr[0]].replies[arr[1]].replies[i].focus = false
                }
            }
            break;

    }

    autoComment()

}

function selfHeight(elem){


        for (let v=0; v<Children(elem).length; v++){

            let subelem = Children(elem)[v]

            if (subelem.nodeName == 'DIV' && subelem.classList.contains('self')){
                return subelem.scrollHeight;
            }
        }




    return 100;
}

window.addEventListener('keydown', e => {
    if (e.keyCode == 13){
        if (Id('xinput').value.length > 0){
            Xomment(Id('xinput').value)
        }

    }
})

var Plus = []

function Xomment(arg){

    Id('xinput').classList.remove('xinput-active')

    if (XACTIVE == 'N'){
        Xata.push(
            {
                author: 'RandomUser101',
                date: 'Just now',
                comment: arg,
                height: [],
                focus: false,
                replies: []
            }
        )

        let temp =

            `
            <div class = 'comment' id = ${Xata.length-1}>

                <div class = 'self'>
                    <h2> RandomUser101 </h2>
                    <h3> Just now </h3>
                    <h1> ${arg} </h1>
                </div>

                <div class = 'actions'>
                    <i class="fas fa-thumbs-up"></i>
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-retweet"></i>
                </div>

                <div class = 'replies'>
                </div>
            </div>
            `

    }else if (XACTIVE.length == 2){

        Xata[parseInt(XACTIVE.substring(1,2))].replies.push(
            {
                author: 'RandomUser101',
                date: 'Just now',
                comment: arg,
                height: [],
                focus: false,
                replies: []
            }
        )

    }else if (XACTIVE.length == 4){

        Xata[parseInt(XACTIVE.substr(1,2))].replies[parseInt(XACTIVE.substr(3,4))].replies.push(
            {
                author: 'RandomUser101',
                date: 'Just now',
                comment: arg,
                height: [],
                focus: false,
                replies: []
            }
        )


    }else{
        alert('Maximum of 3 comment layers for this mockup')
    }

    createXemplate()
    Class('content')[2].innerHTML = XEMPLATE


    Id('xinput').value = ''

    ReXet()

}