function twoSum(nums, target) {
    for ( let indice1=0 ; indice1<nums.length ; indice1++ ) {
        for ( let indice2=indice1+1 ; indice2<=nums.length ; indice2++ ) {
            if ( nums[indice1] + nums[indice2] === target ) {
                let indices = [indice1,indice2]
                return indices
            }
        }
    }
}
