function twoSum(nums, t){
    for(let i = 0; i < nums.length ; i++){
        for(let j = i + 1; j < nums.length ; j++){
            if((nums[i] + nums[j]) == t){
                return [i, j]
            }
        }
    }
}

let nums = [3,4,2, 9, 90]
console.log(twoSum(nums, 99));
