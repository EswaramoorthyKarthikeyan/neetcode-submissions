class Solution {
    isPalindrome(s) {    
        s = s.split(" ").join("").toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        
        let left = 0;
        let right = s.length - 1;

        while(left < right){
            if(s[left] !== s[right]){
                return false;
            }else{
                left++;
                right--;
            }
        }




        return true;
    }
}