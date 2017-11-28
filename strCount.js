function strCount(hayStack, needle) {
    //optimization
    if(needle.length > hayStack.length) return 0;

    if (hayStack.length === 0) return 0;
    if (hayStack.indexOf(needle) > -1) {
        console.log(hayStack.substr(hayStack.indexOf(needle) + needle.length));
        return 1 + strCount(hayStack.substr(hayStack.indexOf(needle) + needle.length), needle);
    }
    return 0;
}

console.log(strCount('lalalalalapatata', 'la'));