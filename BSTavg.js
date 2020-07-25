let results = [];

var helper = function(root){
    
    if(root.left != null && root.right != null){
        let L = root.left.val;
        let R = root.right.val;
        var avg = (L + R) /2
        results.push(avg);            
       
    }
}
let bool = false
var averageOfLevels = function(root) {  
    
    if(bool == false){
        results.push(root.val);
    }

    if(root != null){
        bool = true

        helper(root);
        averageOfLevels(root.left);
        averageOfLevels(root.right);
        
    }
    return results;
    
    
};