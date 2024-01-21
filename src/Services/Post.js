
class Post {
    static async postAppData(newRow){
        try {
            const resp = await fetch ('http://itgirlschool.justmakeit.ru/api/words/add.', {
                method: 'post',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRow)
            })
            return resp.json();
        } catch(e){
            console.error(e)
        }
}
}

export default Post
