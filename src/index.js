const { HouseEstimator } = require("./houseEstimator")

/*
 * ***********************************************
 * This is the driver code. Don't change it!!!
 * ***********************************************
 *
 * The code evaluator will execute this program by using the command:
 * node . "ADD_COMPONENT Wall 1" "TOTAL_COST"
 *
 * So each element of process.argv.slice(2) will be one complete command,
 * for example: "ADD_COMPONENT Wall 1"
 */
function main() {
    const args = process.argv.slice(2)

    if (args.length === 0) {
        throw new Error("No command line arguments passed")
    }

    const estimator = new HouseEstimator()

    args.forEach((arg) => handle(estimator, arg))
}

function handle(estimator, input) {
    const tokens = input.trim().split(/\s+/)

    const command = tokens[0]

    if (command === "ADD_COMPONENT") {
        const component = tokens[1]
        const quantity = parseInt(tokens[2], 10)

        estimator.addComponent(component, quantity)

    } else if (command === "TOTAL_COST") {
        console.log("Total Construction Cost: " + estimator.calculateTotalCost())

    } else {
        console.log("INVALID_COMMAND")
    }
}

main()
