const Zata = [


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

var ZACTIVE = 'N'

var ZEMPLATE = ``

function createZemplate(){

    ZEMPLATE = ``

    for (let i=0; i< Zata.length; i++){

        let entry = Zata[i]

        let temp = ``

        let m1 = 100;
        let m2 = [100, 100]
        let m3 = [100, 100, 100]

        if (Zata[i].focus){

            m1 = i
        }

        for (let j=0; j<Zata[i].replies.length; j++){

            if (Zata[i].replies[j].focus){
                m2 = [i, j]
            }

            for (let k=0; k <Zata[i].replies[j].length; k++){
                if (Zata[i].replies[j].replies[k].focus){
                    m3 = [i, j, k]
                }
            }
        }

        if (m1 == i|| m2[0] == i || m3[0] == i){

            temp += ` <div class = 'comment expanded' id = 'Z${i}'> `

        }else{
            temp += ` <div class = 'comment' id = 'Z${i}'> `
        }

        temp +=

        `
            <div class = 'self'>
                <h2> ${entry.author} </h2>
                <h3> ${entry.date} </h3>
                <h1> ${entry.comment} </h1>

        `

        if (Zata[i].replies.length > 0){
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
                <div class = 'comment expanded-sub' id = 'Z${i}&${j}'>
                `
            }else{
                temp +=
                `
                <div class = 'comment' id = 'Z${i}&${j}'>
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
                    <div class = 'comment expanded-dub' id = 'Z${i}&${j}&${k}'>
                    `
                }else{
                    temp +=
                    `
                    <div class = 'comment' id = 'Z${i}&${j}&${k}'>
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

        ZEMPLATE += temp

    }


    ZEMPLATE +=
    `
    <div class = 'inputbox' >
    <input type = 'text' id = 'zinput' placeholder = 'type a comment...'>
    </div>
    `

    Class('content')[0].innerHTML = ZEMPLATE

}


function Rezet(){

    // MAIN LOOP
    for (let i=0; i<Zata.length; i++){

        let v = 0
        for (let j=0; j<Zata[i].replies.length; j++){

            if (Zata[i].replies[j].replies.length > 0){

                for (let k=0; k< Zata[i].replies[j].replies.length; k++){
                    v += selfHeight(Id(`Z${i}&${j}&${k}`))
                }
            }
        }

        console.log(v)

        let a = Id(`Z${i}`).scrollHeight-window.innerWidth*0.03
        let q = Id(`Z${i}`).scrollHeight-window.innerWidth*0.12-v
        let b = selfHeight(Id(`Z${i}`))
        Zata[i].height = [a,b,q]

        Id(`Z${i}`).onclick = e => {


            if (e.clientY < Id(`Z${i}`).getBoundingClientRect().y + b){

                Zata[i].focus = !Zata[i].focus

                let match = false;
                let match2 = false

                for (let j=0; j<Zata[i].replies.length; j++){
                    if (Zata[i].replies[j].focus){
                        Zata[i].replies[j].focus = false
                        Id(`Z${i}&${j}`).classList.remove('expanded-sub')
                        match = true
                    }

                    for (let k=0; k<Zata[i].replies[j].replies.length; k++){
                        if (Zata[i].replies[j].replies[k].focus){
                            Zata[i].replies[j].replies[k].focus = false
                            Id(`Z${i}&${j}&${k}`).classList.remove('expanded-dub')
                            match2 = true
                        }
                    }
                }



                if (!match && !match2){
                    Zexpand(Id(`Z${i}`))
                }

            }
        }

        // REPLY LOOP
        for (let j = 0; j < Zata[i].replies.length; j++){

            let w;

            if (Zata[i].replies[j].replies.length > 0){
                w = 0.9;
            }else{
                w = 1;
            }

            let r = Id(`Z${i}&${j}`)

            let c = r.scrollHeight*w
            let d = selfHeight(r)
            Zata[i].replies[j].height = [c,d]

            r.onclick = e => {
                if (e.clientY < r.getBoundingClientRect().y + d){

                    let match = false

                    Zata[i].focus = !Zata[i].focus
                    Zata[i].replies[j].focus = !Zata[i].replies[j].focus

                    for (let k=0; k<Zata[i].replies[j].replies.length; k++){
                        if (Zata[i].replies[j].replies[k].focus){
                            Zata[i].replies[j].replies[k].focus = false
                            Id(`Z${i}&${j}&${k}`).classList.remove('expanded-dub')
                            match = true
                        }
                    }
                    if (!match){
                        Zexpand(r)
                    }

                }

            }

            // DUB LOOP
            for (let k = 0; k < Zata[i].replies[j].replies.length; k++){
                let w = Id(`Z${i}&${j}&${k}`)

                let e = w.scrollHeight
                let f = selfHeight(w)
                Zata[i].replies[j].replies[k].height = [e,f]

                w.onclick = e => {
                    if (e.clientY < w.getBoundingClientRect().y + f){
                        Zexpand(w)
                    }

                    Zata[i].focus = !Zata[i].focus
                    Zata[i].replies[j].focus = !Zata[i].replies[j].focus
                    Zata[i].replies[j].replies[k].focus = !Zata[i].replies[j].replies[k].focus

                }
            }
        }

    }

    for (let i=0; i<Class('self').length; i++){
        Class('self')[i].addEventListener('mouseover', () => {
            Class('self')[i].parentElement.style.backgroundColor = 'rgba(255,255,255,0.1)'
        })

        Class('self')[i].addEventListener('mouseleave', () => {
            Class('self')[i].parentElement.style.backgroundColor = 'rgba(255,255,255,0.05)'
        })
    }

    for (let i=0; i<Class('fa-comment').length; i++){
        Class('fa-comment')[i].onclick = () => {

            Id('zinput').classList.add('zinput-active')
            console.log('comment')
            ZACTIVE = Class('fa-comment')[i].parentElement.parentElement.id

        }
    }

}

createZemplate()
Rezet()


function zetHeight(){

    for (let i=0; i<Zata.length; i++){

        Id(`Z${i}`).style.height = Zata[i].height[1] + 'px'

        for (let j=0; j<Zata[i].replies.length; j++){

            Id(`Z${i}&${j}`).style.height = Zata[i].replies[j].height[1] + 'px'

            for (let k=0; k<Zata[i].replies[j].replies.length; k++){

                Id(`Z${i}&${j}&${k}`).style.height = Zata[i].replies[j].replies[k].height[1] + 'px'
            }
        }
    }

    for (let i=0; i<Zata.length; i++){

        let match = false

        for (let j=0; j<Zata[i].replies.length; j++){
            if (Zata[i].replies[j].replies.length > 0){
                match = true
            }
        }

        if (Contains(Id(`Z${i}`), 'expanded')){

            if (match){
                Id(`Z${i}`).style.height = Zata[i].height[2] + 'px'
            }else{
                Id(`Z${i}`).style.height = Zata[i].height[0] + 'px'
            }


        }

        for (let j=0; j<Zata[i].replies.length; j++){
            if (Contains( Id(`Z${i}&${j}`), 'expanded-sub')){
                Id(`Z${i}`).style.height = Zata[i].height[0] + 'px'
                Id(`Z${i}&${j}`).style.height = Zata[i].replies[j].height[0] + 'px'

            }

            for (let k=0; k<Zata[i].replies[j].replies.length; k++){
                if (Contains(Id(`Z${i}&${j}&${k}`), 'expanded-dub')){
                    Id(`Z${i}`).style.height = Zata[i].height[0] + 'px'
                    Id(`Z${i}&${j}`).style.height = Zata[i].replies[j].height[0] + 'px'
                    Id(`Z${i}&${j}&${k}`).style.height = Zata[i].replies[j].replies[k].height[0] + 'px'

                }
            }
        }
    }

}

const zoop = () => {

    zetHeight()

    if (ZACTIVE == 'N'){
        Id('zinput').placeholder = 'Type a comment...'
    }else if (ZACTIVE.length == 2){
        Id('zinput').placeholder =  `Reply to ${Zata[parseInt(ZACTIVE.substr(1,2))].author}...`
    }else if (ZACTIVE.length == 4){
        Id('zinput').placeholder =  `Reply to ${Zata[parseInt(ZACTIVE.substr(1,2))].replies[parseInt(ZACTIVE.substr(3,4))].author}...`
    }

}


function autoComment(){

    let match = false

    for (let i=0; i<Zata.length; i++){

        if (Contains(Id(`Z${i}`), 'expanded')){
            match = true;
            console.log('match')
        }

        for (let j=0; j<Zata[i].length; j++){
            if (Contains(Id(`Z${i}&${j}`), 'expanded-sum')){
                match = true;
            }
        }
    }

    if (!match){
        Id('zinput').classList.add('zinput-active')
        ZACTIVE = 'N'
    }else{
        Id('zinput').classList.remove('zinput-active')
    }


}

setInterval(zoop, 1000/30)

autoComment()

function Zexpand(elem){

    var arr = elem.id.substr(1, elem.id.length).split('&')



    switch (arr.length){
        case 1:
            elem.classList.toggle('expanded')

            for (let i=0; i<Zata.length; i++){
                if (i != arr[0]){
                    Zata[i].focus = false;
                    Id(`Z${i}`).classList.remove('expanded')
                    for (let j = 0; j < Zata[i].replies.length; j++){
                        Zata[i].replies[j].focus = false;
                        Id(`Z${i}&${j}`).classList.remove('expanded-sub')
                        for (let k = 0; k < Zata[i].replies[j].replies.length; j++){
                            Zata[i].replies[j].replies[k].focus = false;
                            Id(`Z${i}&${j}&${k}`).classList.remove('expanded-dub')
                        }
                    }
                }
            }
            break;
        case 2:
            elem.classList.toggle('expanded-sub')

            for (let i=0; i<Zata[arr[0]].replies.length; i++){

                if (i != arr[1]){
                    Id(`Z${arr[0]}&${i}`).classList.remove('expanded-sub')

                    Zata[arr[0]].replies[i].focus = false
                }
            }
            break;
        case 3:
            elem.classList.toggle('expanded-dub')

            for (let i=0; i<Zata[arr[0]].replies[arr[1]].length; i++){

                if (i != arr[2]){
                    Id(`Z${arr[0]}&${arr[1]}&${i}`).classList.remove('expanded-dub')
                    Zata[arr[0]].replies[arr[1]].replies[i].focus = false
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
        if (Id('zinput').value.length > 0){
            Zomment(Id('zinput').value)
        }

    }
})

var Plus = []

function Zomment(arg){

    Id('zinput').classList.remove('zinput-active')

    if (ZACTIVE == 'N'){
        Zata.push(
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
            <div class = 'comment' id = ${Zata.length-1}>

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

    }else if (ZACTIVE.length == 2){

        Zata[parseInt(ZACTIVE.substring(1,2))].replies.push(
            {
                author: 'RandomUser101',
                date: 'Just now',
                comment: arg,
                height: [],
                focus: false,
                replies: []
            }
        )

    }else if (ZACTIVE.length == 4){

        Zata[parseInt(ZACTIVE.substr(1,2))].replies[parseInt(ZACTIVE.substr(3,4))].replies.push(
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

    createZemplate()
    Class('content')[0].innerHTML = ZEMPLATE


    Id('zinput').value = ''

    Rezet()

}