var getDecimalValue = function(head) {
    var arr = []
    var current = head;
    while(current != null){
        arr.push(current.val);
        current = current.next
    }

    var string = arr.join("");

    var binary = parseInt(string, 2)

    return binary;
};