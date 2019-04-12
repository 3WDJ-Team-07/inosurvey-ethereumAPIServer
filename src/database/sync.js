import db from 'database/db';
import { 
    User,
    Job,
    Donation,
    Wallet,
    Topic,
    Target
 } from './model';

// run assoiate in model instance
export function associate() {
    console.log('assoiate func');
    // User.associate();
    // Job.associate();
    // Donation.associate();
    Wallet.associate();
    // Topic.associate();
}

export default function sync() {
    // console.log('asd');
    associate();
    db.sync();
}