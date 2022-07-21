export default class GotService {
    apiBase = {
        'url': 'https://anapioficeandfire.com/'
    }
    async getData(url){
        const result = await fetch(this.apiBase.url + url, {
            method: "GET"
        });
        if (!result.ok){
            throw new Error(`Error: ${result.status}`);
        }
        return await result.json();
    }

    getCharacter(id){
        return this.getData(`api/characters/${id}`);
    }

    async getRandomCharacter(){
        const randomId = Math.floor(Math.random()*140 + 25);
        const result = await this.getData(`api/characters/${randomId}`);

        return result;
    }

    _transformCharacter(character){
        return {
            name: character.name,
            gender: character.gender,
            born: character.born,
            died: character.died,
            culture: character.culture
        };
    }

}