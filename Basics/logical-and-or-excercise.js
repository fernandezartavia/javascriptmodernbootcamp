let isGuestOneVegan = true;
let isGuestTwoVegan = false;


if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Offer only vegan food')
} else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Offer vegan food')
} else{
    console.log('Offer up anything on the menu')
}