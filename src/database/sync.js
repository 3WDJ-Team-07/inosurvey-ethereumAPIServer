import db from 'database/db';

// run assoiate in model instance
export function associate() {
    console.log('assoiate func');
}

export default function sync() {
    assoiate();
    db.sync();
}