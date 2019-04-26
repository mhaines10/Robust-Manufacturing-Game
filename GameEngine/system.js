import Add_part from "./moving_parts";
let part_num = 0;
let last_obj = 0;

const rotateGear = entities => {
    if (entities.belt1){
        entities.belt1.angle+=5;
    }
    return entities;
};
const moveObjects = (entities) => {
    keys = Object.keys(entities);
    for (i = 0; i < keys.length; i++){
        if (entities[keys[i]]['type'] == 'part'){
            entities[keys[i]].position = [entities[keys[i]].position[0]+10,entities[keys[i]].position[1]];
            if (entities[keys[i]].position[0] > 1100){
                delete entities[keys[i]];
            }
        }
    }
    return entities;
};

const updateTime = (entities, time) =>{
    if (entities.timer){
        if (entities.timer.seconds > 0){
            if (entities.timer.delta + time.delta > 1000){
                entities.timer.delta = entities.timer.delta + time.delta - 1000;
                entities.timer.seconds = entities.timer.seconds - 1;
            }
            else{
                entities.timer.delta = entities.timer.delta + time.delta;
            }
        }
    }
    return entities;
}

const addPart = (entities) =>{
    if (last_obj == 0){
        entities['part-$(part_num++)'] = Add_part([260,20])
    }

}

export default (choice_obj,entities, { time }) => {
    //curr_time = time.current;
    rotateGear(entities);
    updateTime(entities,time);
    return entities;
    

}

//export {rotateGear};
//export {moveObjects};

