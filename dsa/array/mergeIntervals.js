function mergeIntervals(intervals){
    intervals.sort((a,b) => a[0]-b[0])

    let newInterval = intervals[0]
    let results = []
    results.push(newInterval)

    for(let interval of intervals){

        if(interval[0] <= newInterval[1]){
            newInterval[1] = Math.max(interval[1], newInterval[1])
        }else{
            newInterval = interval
            results.push(newInterval)
        }

    }

    return [...results]

}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))


// newInterval [0,1]
//interval      [0,1]