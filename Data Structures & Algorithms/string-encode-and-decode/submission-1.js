class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let i = 0;

        let str = "";

        while(i<strs.length){
            str += strs[i] + "0x00";
            i++;
        }

        return str;
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedArr = str.replaceAll("0x00","+ +").split("+ +");
        decodedArr.pop();
        return decodedArr;
    }
}
