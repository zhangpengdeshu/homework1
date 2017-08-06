/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
    /**
     * {
     *    head: 4,
     *    tail: {
     *      head: 6,
     *      tail: {
     *        head: 7,
     *        tail: {
     *         }
     *      }
     *    }
     * }
     * 
     */
	/** Fill in here **/
    var temp = A,L;
    for(L = temp; L !== null; L = L.tail){
        if(L.tail === null){
            L.tail = B;
            break;
        }
    }
    return temp;
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	var T,
       index=0,
       length = 0,
       result = [];
    for(T=L;T!==null;T=T.tail){
        if(index>=start && length < len){
            console.log(T.head);
            result.push(T.head);
            length++;
        }
        index++;

    }
    console.log(result);
    return List.list(result)

}
