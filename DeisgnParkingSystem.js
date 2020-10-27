var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    // console.log(this, carType)
    if (carType === 1) {
        //big car
        if (this.big > 0) {
            this.big -= 1;
            return true
        } else {
            return false
        }
    } else if (carType === 2) {
        //medium car
        if (this.medium > 0) {
            this.medium -= 1;
            return true
        } else {
            return false
        }
    } else if (carType === 3) {
        //small car
        if (this.small > 0) {
            this.small -= 1;
            return true
        } else {
            return false
        }
    } else {
        return false;
    }
};