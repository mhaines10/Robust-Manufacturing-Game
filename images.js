
const images = {
    game_defaults:{
        default1: require('./assets/wrench.png'),
        default2: require('./assets/hammer.png'),
        default3: require('./assets/saw.png')
    },
    headers: {
        gp1: require('./assets/choice1.png'), 
        gp2: require('./assets/choice2.png')
    },
    Infra: {
        background: require('./assets/toolBench.jpg'),
        container: require('./assets/techBox.png'),
        choice1: {
            name: "Lower Body"
        },
        choice2:{
            name: "Torso"
        },
        choice3:{
            name: "Head"
        }
    },
    Tech: {
        background: require('./assets/electronic.jpg'),
        container: require('./assets/techBox.png'),
        choice1: {
            name: "Lower Body",
            option0:{
                icon: require('./assets/sil_legs.png'),
                cost: 0,
                time: 0,
                reliability: 0,
                appeal: 0
            },
            option1: { 
                icon: require('./assets/L1 [Legs].png'),
                cost: 500,
                time: .1,
                reliability:.3,
                appeal: .2
            },
            option2:{ 
                icon: require('./assets/L2 [Legs].png'),
                cost: 1500,
                time: .3,
                reliability:.4,
                appeal: .6 
            },
            option3:{ 
                icon:require('./assets/L3 [Legs].png'),
                cost: 3500,
                time: .6,
                reliability:.7,
                appeal: .8 
            },
        },
        choice2:{
            name: "Torso",
            option0:{
                icon: require('./assets/sil_body.png'),
                cost: 0,
                time: 0,
                reliability: 0,
                appeal: 0
            },
            option1: { 
                icon: require('./assets/L1 [Body]-01.png'),
                cost: 500,
                time: .2,
                reliability:.3,
                appeal: .2
            },
            option2:{ 
                icon: require('./assets/L2 [Body]-01.png'),
                cost: 1500,
                time: .4,
                reliability:.4,
                appeal: 6 
            },
            option3:{ 
                icon:require('./assets/L3 [Body]-01.png'),
                cost: 2500,
                time: .6,
                reliability:.9,
                appeal: .8 
            },
        },
        choice3:{
            name: "head",
            option0:{
                icon: require('./assets/sil_head.png'),
                cost: 0,
                time: 0,
                reliability: 0,
                appeal: 0
            },
            option1: { 
                icon: require('./assets/L1 [Head].png'),
                cost: 1500,
                time: .2,
                reliability:.3,
                appeal: .2
            },
            option2:{ 
                icon: require('./assets/L2 [Head].png'),
                cost: 2500,
                time: .4,
                reliability:.4,
                appeal: .6 
            },
            option3:{ 
                icon:require('./assets/L3 [Head].png'),
                cost: 5500,
                time: .6,
                reliability:.9,
                appeal: .8 
            },
        }
        
    },
    Auto: {
        background: require('./assets/auto.jpg'),
        container: require('./assets/techBox.png'),
        choice1: {
            name: "Lower Body"
        },
        choice2:{
            name: "Torso"
        },
        choice3:{
            name: "Head"
        },
        choice4:{
            name:"Accessories"
        }
    }
}

export default images;