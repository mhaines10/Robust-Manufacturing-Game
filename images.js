
const images = {
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
            shortLegs: { 
                icon: require('./assets/shortLegs.png'),
                cost: 500,
                time: .1,
                reliability:.3,
                appeal: .2
            },
            regLegs:{ 
                icon: require('./assets/niceLegs.png'),
                cost: 1500,
                time: .3,
                reliability:.4,
                appeal: .6 
            },
            wheel:{ 
                icon:require('./assets/wheel.png'),
                cost: 3500,
                time: .6,
                reliability:.7,
                appeal: .8 
            },
        },
        choice2:{
            name: "Torso",
            body1: { 
                icon: require('./assets/body_1.png'),
                cost: 500,
                time: .2,
                reliability:.3,
                appeal: .2
            },
            body2:{ 
                icon: require('./assets/body_2.png'),
                cost: 1500,
                time: .4,
                reliability:.4,
                appeal: 6 
            },
            body3:{ 
                icon:require('./assets/body_3.png'),
                cost: 2500,
                time: .6,
                reliability:.9,
                appeal: .8 
            },
        },
        choice3:{
            name: "head",
            head1: { 
                icon: require('./assets/head1.png'),
                cost: 1500,
                time: .2,
                reliability:.3,
                appeal: .2
            },
            head2:{ 
                icon: require('./assets/head2.png'),
                cost: 2500,
                time: .4,
                reliability:.4,
                appeal: .6 
            },
            head3:{ 
                icon:require('./assets/head3.png'),
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