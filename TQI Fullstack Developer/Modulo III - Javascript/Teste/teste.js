function soma (a, b)
{
    console.log(a + b);
    return a + b;
}

function returnEvenValues(array)
{
    let evenNums = [];
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] % 2 === 0)
        {
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums);
}

soma (10 , 5);
let array = [1, 2, 3, 5, 6, 7, 8];
returnEvenValues(array);