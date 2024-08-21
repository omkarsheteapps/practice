function spiralMatrix(matrix) {
    let arr = [];
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;
    let rowBegin = 0;
    let rowEnd = matrix.length-1


    while(colBegin <= colEnd && rowBegin <= rowEnd){

        for(let i=colBegin; i<=colEnd;i++){
            arr.push(matrix[rowBegin][i])
        }
        rowBegin++;

        for(let i=rowBegin;i<=rowEnd;i++){
            arr.push(matrix[i][colEnd])
        }
        colEnd--;

        if(rowBegin <= rowEnd)
        for(let i=colEnd;i >= colBegin;j--){
            arr.push(matrix[rowEnd][i])
        }
        rowEnd--;

        if(colBegin <= colEnd)
        for(let i=rowEnd;i >= rowBegin;j--){
            arr.push(matrix[i][colBegin])
        }

        colBegin++

    }

    return arr;

};