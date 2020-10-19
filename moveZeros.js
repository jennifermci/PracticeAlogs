let moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] !== 0) {
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    break;
                }
            }
        }
    }
    return nums;
};

const countBits = function(num) {
    let output = [];
    for (let i = 0; i <= num; i++) {
        let binary = dec2bin(i).split("");
        let count = 0;
        for (let k = 0; k < binary.length; k++) {
            if (binary[k] === "1") {
               count++ 
            }
        }
        output.push(count);
    }
    return output;
};

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}