let searchBST = (root, T) => {
    while (root && root.val != T) {
        if (root.val > T)
            root = root.left;
        else
            root = root.right;
    }
    return root;
};