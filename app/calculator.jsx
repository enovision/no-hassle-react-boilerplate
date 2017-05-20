export class Calculator {

    constructor (op1, op2) {
        this.op1 = op1;
        this.op2 = op2;
    }

    add (op1, op2) {
        let att1 = op1 === undefined ? this.op1 : op1;
        let att2 = op2 === undefined ? this.op2 : op2;
        return att1 + att2;
    }

    subtract (op1, op2) {
        let att1 = op1 === undefined ? this.op1 : op1;
        let att2 = op2 === undefined ? this.op2 : op2;
        return att1 - att2;
    }
}