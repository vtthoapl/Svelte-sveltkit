import {writable} from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

const store = writable({
    contacts:[],
    editId: undefined
})
export default {
 subscribe: store.subscribe,
 add:(name, phone, des) => {
    store.update(({contacts}) => {
        const newContacts = [{name, phone, des, id:uuidv4()}, ...contacts]
        return { contacts: newContacts, editId: undefined };
    })  
 },
 editContact: (contactId) => {
    store.update(({contacts}) =>{
        return {contacts,editId:contactId}
    })
 },
 edit: (contactId, name, phone, des) => {
    store.update(({contacts}) => {
        const newContacts = contacts.map((contact) => {
            if(contact.id === contactId) {
                return {id:contactId, name, phone, des}
            }
            return contact
        });
        return {contacts: newContacts, editId: undefined}
    })
 }
}