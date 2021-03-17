import { Action } from "@ngrx/store";

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const INCREASE_CART_ITEMS = 'INCREASE_CART_ITEMS';


export class CounterIncrease implements Action {
    readonly type = INCREASE_COUNTER;
    constructor( public payload : Number ){}
}

export class CartItemsIncrease implements Action {
    readonly type = INCREASE_CART_ITEMS;
    constructor( public payload : object ){}
}

export type CartActions = CounterIncrease | CartItemsIncrease ;