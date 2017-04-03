function daysInMonth(month) {
  let days;
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
    days = 31;
    break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
    days = 30;
    break;
    case 'February':
    days = 28;
    break;
    case 'February on a leap year':
    days = 29;
    break;
    default:
    return days;
    }
    return `${month} has ${days} days.`;
}

var howManyDays = daysInMonth('September');

document.write(howManyDays);
