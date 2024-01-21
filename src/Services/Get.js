
class Get {
    static async getAppData(){
        try {
            const resp = await fetch ('https://itgirlschool.justmakeit.ru/api/words')
            return resp.json();
        } catch(e){
            console.error(e)
        }
}
}

export default Get