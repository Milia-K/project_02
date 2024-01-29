import { makeAutoObservable } from 'mobx';
import Get from '../Services/Get';

class WordStore {
    appData = [];

    constructor() {
        makeAutoObservable(this);
        this.getDataServer();
    }

    setAppData(newAppData) {
        this.appData = newAppData;
    }

    async getDataServer() {
        const dataServer = await Get.getAppData();
        this.setAppData(dataServer);
    }
    

}

const wordStore = new WordStore();
export default wordStore;
