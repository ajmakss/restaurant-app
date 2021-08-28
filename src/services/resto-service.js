export default class RestoService {
    url = 'http://localhost:3000/menu';

    getMenuItems = async () => {
        const resp = await fetch(this.url);

        if(!resp.ok){
            throw new Error ("Server Error!");
        }
        const result = resp.json();
        return result;
    }
}