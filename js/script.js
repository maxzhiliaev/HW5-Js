const choice = "Чай"

switch (choice) {
    case "Кава":
        console.log("Ви обрали каву")
        break
    case "Чай":
        console.log("Ви обрали чай")
        break
    case "Сок":
        console.log("Ви обрали сок")
        break
         default:
    console.log("Невідомий вибір")
}

const day = "Sunday"

switch (day) {
    case "Monday":
        console.log("Working day")
        break
    case "Thursday":
        console.log("Working day")
        break
    case "Saturday":
        console.log("Output")
        break
    case "Sunday":
        console.log("Output")
        break
        default:
    console.log("There are no days like this")
}

const month = 12

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter")
        break
    case 3:
    case 4:
    case 5:
        console.log("Spring")
        break
    case 6:
    case 7:
    case 8:
        console.log("Summer")
        break
    case 9:
    case 10:
    case 11:
        console.log("Fall")
        break
        default:
    console.log("Invalid month number")
}

const color = "Red"

switch (color) {
    case "Red":
        console.log("Stop")
        break
    case "Yellow":
        console.log("Wait")
        break
    case "Green":
        console.log("Go")
        break
         default:
    console.log("Invalid color")
}

const x = 5
const y = 10
const operator = "/"

switch (operator) {
    case "+":
        console.log(`${x} + ${y} = ${x + y}`)
        break
     case "-":
        console.log(`${x} - ${y} = ${x - y}`)
        break
    case "*":
        console.log(`${x} * ${y} = ${x * y}`)
        break
    case "/":
    if ( y === 0) {
      console.log("Error: division by zero");
    } else {
      console.log(`${x} / ${y} = ${x / y}`);
    }
    break;
    case "%":
        console.log(`${x} % ${y} = ${x % y}`)
        break
    default:
        console.log("Invalid operator")
}