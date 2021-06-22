import { searchServices } from '../app.js';

export default function eventKeyupMainSearch() {
    document.getElementById('research__principal__text-area').addEventListener('keyup', function(){
        console.log('tap');
        searchServices.launchSearch();   
    })
}