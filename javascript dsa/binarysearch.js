function kk(list1, list2) {
    let list3 = [];

    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            list3.push(list1[i]);
            i++;
        } else {
            list3.push(list2[j]);
            j++;
        }
    }

   
    while (i < list1.length) {
        list3.push(list1[i]);
        i++;
    }

    
    while (j < list2.length) {
        list3.push(list2[j]);
        j++;
    }

    return list3;
};

    console.log(kk([1,2,4],[1,3,4]));