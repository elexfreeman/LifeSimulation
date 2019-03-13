import { Vector3 } from './CommonInterfaces';
import { bots } from './Bots';
/* Сенсор */
interface Sensor {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
    front: boolean;
    back: boolean;
}

/* кадр для AI  */
export interface AIFrame {
    force: Vector3; /* примененая сила */
    sensors: Sensor[]; /* показатели сенсоров во времени */
    goal: boolean;  /* состояния достигнутой цели */
}

/* Мозг бота */
/* Q-Learning нейросеть */
export class BotBrainClass {

    /* имя */
    private name: string;
    /* родитель */
    private parent: string;
    /* энергия */
    private energy: number;
    /* текущие кооррдинады в пространстве */
    private coord: Vector3;
    /* направление движения */
    private force: Vector3;
    
    /* Кадровый буфер */
    private frameBuffer: AIFrame[];
    /* Размер буфера кадров */
    private frameBufferLength = 3000;

    /* номер кадра сенсора для сборки фрейма */
    private sensorFrameCounter = 0;
    /* кадров для хранения посделовательности движения */
    private sensorFrameMax = 4;
    /* последовательность показаний сенсоров */
    private sensorFrame: Sensor[];


    /* сообщение об изменение state */
    onStateMessage(msg) {
        try {
            this.name = msg.name;
            this.parent = msg.parent;
            this.energy = msg.energy;
            this.coord = msg.coord;
            bots['bot_' + this.name] = this;
            console.log(msg.sensor);

        } catch (e) {
            console.log('Error: ', e)
        }      
    }

    /* собщение об кадре движения */
    onGetFrame(msg){
        try {
            /* если фрейм сенсора незаполнен */
            if(this.sensorFrameCounter < this.sensorFrameMax){
                this.sensorFrame.push(msg);
                this.sensorFrameCounter++;
            } else {
                /* если заполнен */
                this.sensorFrameCounter = 0;
                this.sensorFrame = [];
            }          

        } catch (e) {
            console.log('Error: ', e)
        } 
    }

    onDisconnect(reason) {
        /* когда отконектился удаляем из ботов */
        if (this.name) {
            console.log('Bot disconnected: ', 'bot_' + this.name, reason);
            delete bots['bot_' + this.name];
        }
    }

    /* вставляет в буфер памяти 1 кадр */
    pushFrameBuffer(frame: AIFrame){

    }

    echo(msg: string) {
        console.log('message: ', msg);
    }
}