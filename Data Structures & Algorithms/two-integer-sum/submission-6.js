class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const indexedNums = nums.map((num, index) => ({ num, index }));

        indexedNums.sort((a, b) => a.num - b.num);
       
        let left = 0;
        let right = indexedNums.length - 1;

        while(left < right){
            const sum = indexedNums[left].num + indexedNums[right].num;

            if(sum < target){
                left++;                
            }else if(sum > target){
                right--;
            }else {  
                return [indexedNums[left].index,indexedNums[right].index];
            }    
        }

        return [];
    }
}
