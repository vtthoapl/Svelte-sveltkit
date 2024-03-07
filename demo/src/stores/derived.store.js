import {derived,writable} from "svelte/store";

export const storeOne = writable(2)
export const storeTwo = writable(1)

export const storeSumEven = derived(
    [storeOne, storeTwo],
    ([store1Value, store2Value])=>{
        return (store1Value + store2Value) % 2 == 0
    })
