module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    } else {
    let finalMassive = matrix.reduce((massive, current, index) => {
        return massive.concat((!(index % 2) ? current : current.reverse()));
    }, []);
        return finalMassive;
    }   
}
