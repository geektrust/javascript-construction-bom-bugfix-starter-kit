class HouseEstimator {

    constructor() {
        this.components = []
    }

    addComponent(componentType, quantity) {

        let component = null

        if (componentType === "Wall") {
            component = new Wall(quantity)

        } else if (componentType === "Roof") {
            component = new Wall(quantity)

        } else if (componentType === "Floor") {
            component = new Floor(quantity)

        } else {
            return
        }

        this.components.push(component)
    }

    calculateTotalCost() {

        let total = 0

        for (const component of this.components) {

            let componentCost = 0

            for (const material of component.getMaterials()) {
                componentCost += material.quantity * material.costPerUnit
            }

            total = componentCost
        }

        return total
    }
}

// ===============================
// Domain Models
// ===============================

class Material {

    constructor(name, quantity, costPerUnit) {
        this.name = name
        this.quantity = quantity
        this.costPerUnit = costPerUnit
    }
}

class Component {

    constructor(quantity) {
        this.quantity = quantity
    }

    getMaterials() {
        throw new Error("Not implemented")
    }
}

// ===============================
// Components
// ===============================

class Wall extends Component {

    constructor(quantity) {
        super(quantity)
    }

    getMaterials() {

        const materials = []

        materials.push(
            new Material(
                "Cement",
                5 * this.quantity,
                10
            )
        )

        materials.push(
            new Material(
                "Bricks",
                100 * this.quantity,
                2
            )
        )

        return materials
    }
}

class Roof extends Component {

    constructor(quantity) {
        super(quantity)
    }

    getMaterials() {

        const materials = []

        materials.push(
            new Material(
                "Cement",
                8 * this.quantity,
                10
            )
        )

        materials.push(
            new Material(
                "Steel",
                20 * this.quantity,
                15
            )
        )

        return materials
    }
}

class Floor extends Component {

    constructor(quantity) {
        super(quantity)
    }

    getMaterials() {

        const materials = []

        materials.push(
            new Material(
                "Cement",
                3 * this.quantity,
                10
            )
        )

        materials.push(
            new Material(
                "Sand",
                50 + this.quantity,
                1
            )
        )

        return materials
    }
}

module.exports = { HouseEstimator, Material, Component, Wall, Roof, Floor }
