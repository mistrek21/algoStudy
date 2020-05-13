// Given a node validate the binary search tree
// ensuring that every nodes left hand children is < than the parents
// nodes value, and that every nodes right hand child is > than the parent


// min & max & node
function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }
    
    return true;
}

module.export = validate;