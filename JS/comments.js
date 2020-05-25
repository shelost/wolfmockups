const Data = [


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

var ACTIVE = 'N'

var TEMPLATE = ``

function createTemplate(){

    TEMPLATE = ``

    for (let i=0; i< Data.length; i++){

        let entry = Data[i]

        let temp = ``

        let m1 = 100;
        let m2 = [100, 100]
        let m3 = [100, 100, 100]

        if (Data[i].focus){

            m1 = i
        }

        for (let j=0; j<Data[i].replies.length; j++){

            if (Data[i].replies[j].focus){
                m2 = [i, j]
            }

            for (let k=0; k <Data[i].replies[j].length; k++){
                if (Data[i].replies[j].replies[k].focus){
                    m3 = [i, j, k]
                }
            }
        }

        if (m1 == i|| m2[0] == i || m3[0] == i){

            temp += ` <div class = 'comment expanded' id = ${i}> `

        }else{
            temp += ` <div class = 'comment' id = ${i}> `
        }

        temp +=

        `
            <div class = 'self'>
                <h2> ${entry.author} </h2>
                <h3> ${entry.date} </h3>
                <h1> ${entry.comment} </h1>

        `

        if (Data[i].replies.length > 0){
            temp += `<p> + ${entry.replies.length}</p>`
        }

        temp +=
        `

            </div>

            <div class = 'actions'>
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-down"></i>
                <i class="fas fa-retweet"></i>
            </div>

            <div class = 'replies'>
        `


        for (let j=0; j<entry.replies.length; j++){
            let reply = entry.replies[j]

            if (m2[1] == j || m3[1] == j){

                temp +=
                `
                <div class = 'comment expanded-sub' id = '${i}&${j}'>
                `
            }else{
                temp +=
                `
                <div class = 'comment' id = '${i}&${j}'>
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
                        <i class="fas fa-retweet"></i>
                    </div>

                    <div class = 'replies-sub'>

            `

            for (let k=0; k<reply.replies.length; k++){
                let double = reply.replies[k]


                if (m3[0] == i && m3[1] == j && m3[2] == k){

                    temp +=
                    `
                    <div class = 'comment expanded-dub' id = '${i}&${j}&${k}'>
                    `
                }else{
                    temp +=
                    `
                    <div class = 'comment' id = '${i}&${j}&${k}'>
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

        TEMPLATE += temp

    }


    TEMPLATE +=
    `
    <div class = 'inputbox' >
    <input type = 'text' id = 'input' placeholder = 'type a comment...'>
    </div>
    `

    Class('content')[1].innerHTML = TEMPLATE

}

function Reset(){

    // MAIN LOOP
    for (let i=0; i<Data.length; i++){

        let a = Id(i).scrollHeight-window.innerWidth*0.03
        let b = selfHeight(Id(i))
        Data[i].height = [a,b]

        Id(i).onclick = e => {
            if (e.clientY < Id(i).getBoundingClientRect().y + b){

                Data[i].focus = !Data[i].focus

                let match = false;
                let match2 = false

                for (let j=0; j<Data[i].replies.length; j++){
                    if (Data[i].replies[j].focus){
                        Data[i].replies[j].focus = false
                        Id(`${i}&${j}`).classList.remove('expanded-sub')
                        match = true
                        ACTIVE = i.toString()
                    }

                    for (let k=0; k<Data[i].replies[j].replies.length; k++){
                        if (Data[i].replies[j].replies[k].focus){
                            Data[i].replies[j].replies[k].focus = false
                            Id(`${i}&${j}&${k}`).classList.remove('expanded-dub')
                            match2 = true
                            ACTIVE = i.toString()
                        }
                    }
                }

                if (!match && !match2){
                    Expand(Id(i))
                }
            }


        }

        // REPLY LOOP
        for (let j = 0; j < Data[i].replies.length; j++){
            let r = Id(`${i}&${j}`)

            let c = r.scrollHeight
            let d = selfHeight(r)
            Data[i].replies[j].height = [c,d]

            r.onclick = e => {
                if (e.clientY < r.getBoundingClientRect().y + d){

                    ACTIVE = r.id

                    let match = false

                    Data[i].focus = !Data[i].focus
                    Data[i].replies[j].focus = !Data[i].replies[j].focus

                    for (let k=0; k<Data[i].replies[j].replies.length; k++){
                        if (Data[i].replies[j].replies[k].focus){
                            Data[i].replies[j].replies[k].focus = false
                            Id(`${i}&${j}&${k}`).classList.remove('expanded-dub')
                            match = true
                            ACTIVE = `${i}&${j}`
                        }
                    }
                    if (!match){
                        Expand(r)
                    }

                }

            }

            // DUB LOOP
            for (let k = 0; k < Data[i].replies[j].replies.length; k++){
                let w = Id(`${i}&${j}&${k}`)

                let e = w.scrollHeight
                let f = selfHeight(w)
                Data[i].replies[j].replies[k].height = [e,f]

                w.onclick = e => {
                    if (e.clientY < w.getBoundingClientRect().y + f){
                        Expand(w)
                    }
                    ACTIVE = w.id

                    Data[i].focus = !Data[i].focus
                    Data[i].replies[j].focus = !Data[i].replies[j].focus
                    Data[i].replies[j].replies[k].focus = !Data[i].replies[j].replies[k].focus

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
}

createTemplate()
Reset()

function setHeight(){

    for (let i=0; i<Data.length; i++){

        Id(i).style.height = Data[i].height[1] + 'px'

        for (let j=0; j<Data[i].replies.length; j++){

            Id(`${i}&${j}`).style.height = Data[i].replies[j].height[1] + 'px'

            for (let k=0; k<Data[i].replies[j].replies.length; k++){

                Id(`${i}&${j}&${k}`).style.height = Data[i].replies[j].replies[k].height[1] + 'px'
            }
        }
    }

    for (let i=0; i<Data.length; i++){

        if (Contains(Id(i), 'expanded')){
            Id(i).style.height = Data[i].height[0] + 'px'

        }

        for (let j=0; j<Data[i].replies.length; j++){
            if (Contains( Id(`${i}&${j}`), 'expanded-sub')){
                Id(i).style.height = Data[i].height[0] + 'px'
                Id(`${i}&${j}`).style.height = Data[i].replies[j].height[0] + 'px'

            }

            for (let k=0; k<Data[i].replies[j].replies.length; k++){
                if (Contains(Id(`${i}&${j}&${k}`), 'expanded-dub')){
                    Id(i).style.height = Data[i].height[0] + 'px'
                    Id(`${i}&${j}`).style.height = Data[i].replies[j].height[0] + 'px'
                    Id(`${i}&${j}&${k}`).style.height = Data[i].replies[j].replies[k].height[0] + 'px'

                }
            }
        }
    }

}

const loop = () => {

    setHeight()

    if (ACTIVE == 'N'){
        Id('input').placeholder = 'Type a comment...'
    }else if (ACTIVE.length == 1){
        Id('input').placeholder =  `Reply to ${Data[parseInt(ACTIVE)].author}...`
    }else{
        Id('input').placeholder =  `Reply to ${Data[parseInt(ACTIVE.substr(0,1))].replies[parseInt(ACTIVE.substr(2,3))].author}...`
    }

}

setInterval(loop, 1000/30)

function Expand(elem){

    var arr = elem.id.split('&')

    switch (arr.length){
        case 1:
            ACTIVE = Contains(elem, 'expanded') ? 'N' : elem.id
            elem.classList.toggle('expanded')

            for (let i=0; i<Data.length; i++){
                if (i != arr[0]){
                    Data[i].focus = false;
                    Id(i).classList.remove('expanded')
                    for (let j = 0; j < Data[i].replies.length; j++){
                        Data[i].replies[j].focus = false;
                        Id(`${i}&${j}`).classList.remove('expanded-sub')
                        for (let k = 0; k < Data[i].replies[j].replies.length; j++){
                            Data[i].replies[j].replies[k].focus = false;
                            Id(`${i}&${j}&${k}`).classList.remove('expanded-dub')
                        }
                    }
                }
            }
            break;
        case 2:
            ACTIVE = Contains(elem, 'expanded') ? 'N' : elem.id
            elem.classList.toggle('expanded-sub')

            for (let i=0; i<Data[arr[0]].replies.length; i++){

            if (i != arr[1]){
                Id(`${arr[0]}&${i}`).classList.remove('expanded-sub')

                Data[arr[0]].replies[i].focus = false
                }
            }
            break;
        case 3:
            ACTIVE = Contains(elem, 'expanded') ? 'N' : elem.id
            elem.classList.toggle('expanded-dub')

            for (let i=0; i<Data[arr[0]].replies[arr[1]].length; i++){

                if (i != arr[1]){
                    Id(`${arr[0]}&${arr[1]}&${i}`).classList.remove('expanded-sub')
                    Data[arr[0]].replies[arr[1]].replies[i].focus = false
                }
            }
            break;

    }

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
        if (Id('input').value.length > 0){
            Comment(Id('input').value)
        }

    }
})

var Plus = []

function Comment(arg){

    if (ACTIVE == 'N'){
        Data.push(
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
            <div class = 'comment' id = ${Data.length-1}>

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

    }else if (ACTIVE.length == 1){

        Data[parseInt(ACTIVE)].replies.push(
            {
                author: 'RandomUser101',
                date: 'Just now',
                comment: arg,
                height: [],
                focus: false,
                replies: []
            }
        )

    }else if (ACTIVE.length == 3){

        Data[parseInt(ACTIVE.substr(0,1))].replies[parseInt(ACTIVE.substr(2,3))].replies.push(
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

    createTemplate()
    Class('content')[1].innerHTML = TEMPLATE


    Id('input').value = ''

    Reset()

}