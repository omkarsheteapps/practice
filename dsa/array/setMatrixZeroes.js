function setMatrixZeroes(matrix){
    let rowsL = matrix.length;
    let colsL = matrix[0].length;
    let rowZero = false;


    for(let i=0;i<rowsL;i++){
        for(let j=0;j<colsL;j++){
            if(matrix[i][j] === 0){
                matrix[0][j] = 0
                if(i > 0){
                    matrix[i][0] = 0
                }else{
                    rowZero = true;
                }
            }
        }
    }


    for(let i= 1;i<rowsL;i++){
        for(let j=1;j<colsL;j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0
            }
        }
    }

    if(matrix[0][0] === 0){
        for(let i=0;i<rowsL;i++){
            matrix[i][0] = 0;
        }
    }

    if(rowZero){
        for(let j =0;j< colsL;j++){
            matrix[0][j] = 0
        }
    }


}

// Test cases
let testCases = [
    {
        input: [
            [1, 2, 3],
            [4, 0, 6],
            [7, 8, 9]
        ],
        expected: [
            [1, 0, 3],
            [0, 0, 0],
            [7, 0, 9]
        ]
    },
    {
        input: [
            [0, 2],
            [3, 4]
        ],
        expected: [
            [0, 0],
            [0, 4]
        ]
    },
    {
        input: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        expected: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
    },
    {
        input: [
            [1, 0, 3],
            [4, 5, 6]
        ],
        expected: [
            [0, 0, 0],
            [4, 0, 6]
        ]
    }
];

testCases.forEach((test, index) => {
    setMatrixZeroes(test.input);
    console.log(`Test Case ${index + 1}:`, JSON.stringify(test.input) === JSON.stringify(test.expected) ? 'Passed' : 'Failed');
    console.log('Output:', test.input);
    console.log('Expected:', test.expected);
});