let friends = ['Branwin', 'Jessie', 'Karlie', 'Ashley', 'Austin'];


for (i = 0; i < friends.length; i++) {

    for (num = 99; num > 1; num--) {
        console.log(num + ' lines of code in the file, ' + num + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (num - 1) + ' lines of code in the file');
    }

    if (num == 1) {
        console.log(num + ' line of code in the file, ' + num + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (num - 1) + ' lines of code in the file');
    }

}






















//99 lines of code in the file, 99 lines of code; John strikes one out, clears it all out, 98 lines of code in the file