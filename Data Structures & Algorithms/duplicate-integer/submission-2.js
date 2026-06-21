class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {


        nums = nums.sort();

        let left = 0;
        
        for(let right = 1; right <= nums.length - 1; right++){
            console.log(nums[left],nums[right],"cmp");
            if(nums[left] === nums[right]){
                return true;
            }
            left++;
        }
        return false;
    }
}
