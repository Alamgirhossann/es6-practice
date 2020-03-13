const friendsMarks = [45, 50, 55, 65, 75];
const friendsMarks2 = [75, 80, 52, 86];
const friendsMarks3 = [92, 98];
//const allfriendsMarks = friendsMarks.concat(friendsMarks2).concat(friendsMarks3);
const allfriendsMarks2 = [...friendsMarks, ...friendsMarks2, ...friendsMarks3]
const business = 700;
const minister = 600;
const doctor = 450;
const money = [800, 900, 750];
//const maximum = Math.max(business, minister, doctor); 
const maximum = Math.max(...money);
console.log(maximum);