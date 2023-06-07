// console.log("Hello Coders")

var newArray = [34, 54, 2, 65, 76, 32, 62]
var eleNumber = 7;


var selectionSort = function(arr, n){
    for(var i=0;i<n;i++){
        var mini = i;

        for(var j= i+1;j<n;j++)
        {
            if(arr[j]<arr[mini])
            {
                mini = j
            }
        }
        var temp = arr[mini]
        arr[mini] = arr[i]
        arr[i] = temp 
    }
    console.log(arr)
    // process.stdout.write(arr)
}
var selectionSortMax = function(arr, n){
    for(var i=0;i<n;i++){
        var max = i;

        for(var j= i+1;j<n;j++)
        {
            if(arr[j]>arr[max])
            {
                max = j
            }
        }
        var temp = arr[max]
        arr[max] = arr[i]
        arr[i] = temp 
    }
    console.log(arr)
    // process.stdout.write(arr)
}

selectionSortMax(newArray,eleNumber)
selectionSort(newArray,eleNumber)










// var ansArray = [];
// var max = 0;
// for (var i = 0; i <= eleNumber - 1; i++) {
//     var mini = i;
//     for (var j = 1; j <= eleNumber - 1; j++) {
//         if (newArray[j] < newArray[mini]) {
//             mini = j;
//         }
//     }

//     var temp = newArray[mini];
//     newArray[mini] = newArray[i];
//     newArray[i] = temp;
// }

// console.log(ansArray)



// ***********************************
// Code of website


// #include<bits/stdc++.h>

// using namespace std;
// void selection_sort(int arr[], int n) {
//   // selection sort
//   for (int i = 0; i < n - 1; i++) {
//     int mini = i;
//     for (int j = i + 1; j < n; j++) {
//       if (arr[j] < arr[mini]) {
//         mini = j;
//       }
//     }
//     int temp = arr[mini];
//     arr[mini] = arr[i];
//     arr[i] = temp;
//   }

//   cout << "After selection sort: " << "\n";
//   for (int i = 0; i < n; i++) {
//     cout << arr[i] << " ";
//   }
//   cout << "\n";

// }
// int main() {
//   int arr[] = {13,46,24,52,20,9};
//   int n = sizeof(arr) / sizeof(arr[0]);
//    cout << "Before selection sort: " << "\n";
//    for (int i = 0; i < n; i++) {
//     cout << arr[i] << " ";
//   }
//   cout << "\n";
//   selection_sort(arr, n);
//   return 0;
// }