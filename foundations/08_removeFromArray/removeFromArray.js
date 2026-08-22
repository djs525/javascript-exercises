const removeFromArray = function(arr, ...nums) {
    for (let i=0; i < nums.length; i++){
        index = arr.indexOf(nums[i])
        while (index !== -1){
            arr.splice(index, 1)
            index = arr.indexOf(nums[i])
        }
    }
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;
