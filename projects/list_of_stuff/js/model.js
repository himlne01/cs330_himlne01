/* jshint esversion: 8 */
/* jshint node: true */
/* jshint jquery: true */
/* jshint browser: true */
'use strict';

class ListItem {
    constructor(done, name, number, dollar, building, dept, priority) {
        this._purchased = done;
        this._itemName = name;
        this._quantity = number;
        this._price = dollar;
        this._store = building;
        this._section = dept;
        this._priority = priority;
    } 

    get purchased() {
        return this._purchased;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(newName) {
        this._itemName = newName;
    }

    // ASK ABOUT CONVENTION: the List Item will never change; only in the big list. Do I need to get everything?
    get order() {
        return [this.purchased, this.itemName, this._quantity, this._price, this._store, this._section, this._priority];
    }
}

class Subject {
    constructor() {
        this.handlers = [];
    }

    subscribe(func) {
        this.handlers.push(func);
    }

    unsubscribe(func) {
        this.handlers = this.handlers.filter(item => item != func);
    }

    publish(msg, obj) {
        let scope = obj || window;
        for (let f of this.handlers) {
            f(scope, msg);
        }
    }
}

class List extends Subject {
    constructor() {
        super();
        this._list = [];
        this._iter = 0;
    }

    get iter() {
        return this._iter;
    }

    set iter(numb) {
        this._iter += numb; 
    }

    get fullList() {
        return this._list;
    }

    set fullList(empty) {
        this._list = [];
    }

    // add to dictionary _list
    add(newListItem) { 
        // if the name is already in the thing, add the iter
        for (let allitems of this.fullList) {
            if (newListItem.itemName.toString() == allitems[1]) {
                this.iter = 1;
                newListItem.itemName = `${ newListItem.itemName } ${ this.iter }`;
            }
        }
        this._list.push(newListItem.order);
        this.publish("New list item add, list all", this.fullList);
    }
    
    // remove purchased
    removeChecked() {
        for (let item of this.fullList) {
            if (item[0] == true) {
                let id = `"${ item[1].toString().replace(" ","") }"`;
                this.fullList.splice(this.fullList.indexOf(id)+1, 1);
            }
        }
        this.publish("Removed purchased, list all", this.fullList);
    }

    // remove all list items
    removeAll() {
        this.fullList = [];
        this.publish("Removed all, list all", this.fullList);
    }

    // purchased? 
    change(trow) {
        for (let item of this.fullList) {
            // item id
            let itemID = '';
            for (let i of item[1].split(" ")) {
                itemID += i;
            }
            let id = trow.getAttribute('id');
            if (itemID == id) {
                if (item[0] == true) {
                    item[0] = false;
                } else {
                    item[0] = true;
                }
            }
        }
        // console.log('changed '+this.fullList);
    }

    // save
    save() {
        let listLabels = ['purchased', 'itemName', 'quantity', 'price', 'store', 'section', 'priority'];
        let storedList = [];
        for (let everyItem of this.fullList) {
            let newListItem = {};
            for (let i=0; i<listLabels.length; i++) {
                newListItem[listLabels[i]] = everyItem[i];
            }
            storedList.push(newListItem);
        }
        return storedList;
    }
}