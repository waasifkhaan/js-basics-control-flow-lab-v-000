// Write your code in this file!
function scuberGreetingForFeet(num) {
  let message;
    if (num <= 400) {
      message = 'This one is on me!';
    }
    else if (1999 < num && num < 2500) {
      message = 'I will gladly take your thirty bucks.';
    }
    else {
      message = 'No can do.';
    }
  return message;
}

function ternaryCheckCity(city){

  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){

let note;

switch (tip) {
    case 'generous':
        note = 'Thank you so much.';
        break;
    case 'not as generous':
        note = 'Thank you.';
        break;
    default:
        note = 'Bye.';
        break;
        note;
}
}
