class Delete {
    static async deleteWord(id) {
        try {
        const resp = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST',
        });
        return resp.json();
        } catch (e) {
        console.error(e);
        throw e; 
        }
    }
}

export default Delete;

