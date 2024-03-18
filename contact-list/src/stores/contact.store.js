import {writable} from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const store = writable({
    contacts:[],
    editId: undefined
})
export default {
 subscribe: store.subscribe,
 add:(name, phone, description) => {
    store.update(({contacts}) => {
        const newContact = [{name, phone, description, id:uuidv4()}, ...contacts]
    })
 }
}