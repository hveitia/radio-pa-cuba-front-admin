export const orderArray = (array) => {
    const result =  array.sort((a, b) => {
        if(parseInt(a.start.split(':')[0])  > parseInt(b.start.split(':')[0])){
            return 1;
        }
        if(parseInt(a.start.split(':')[0])  < parseInt(b.start.split(':')[0])){
            return -1;
        }
        return 0;
    });

    return result;
}