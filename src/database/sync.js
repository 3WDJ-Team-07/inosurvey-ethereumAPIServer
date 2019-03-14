import db from 'database/db';
import { User } from './model';

// run assoiate in model instance
export function associate() {
    console.log('assoiate func');
}

export function sync() {
    // console.log('asd');
    // assoiate();
    db.sync();
}