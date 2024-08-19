function pascalsTriangle(numRows) {
    let result = [];
    if(numRows === 0){
        return result
    }
    let row = [1]
    result.push(row)
    if(numRows === 1){
        return result
    }

    for(let i=1;i<numRows;i++){
        row = []
        let prevRow = result[i-1]
        row.push(1)
        for(let j=0; j< i-1;j++){
            row.push(prevRow[j]+ prevRow[j+1])
        }
        row.push(1)
        result.push(row)
    }
    return result
}