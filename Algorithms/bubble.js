


console.log("helloCoders")


var bubbleSort = function (arr, n) {
    for (var i = 0; i <=n; i++) {
        
        for (var j = 0; j <= i; j++) {
            
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }

    console.log(arr)
}



var arr = [2, 345, 56, 674, 23]
var n = arr.length

bubbleSort(arr,n);














































// #include <bits/stdc++.h>
// using namespace std;

// void bubble_sort(int arr[], int n) {
//     // bubble sort
//     for (int i = n - 1; i >= 0; i--) {
//         for (int j = 0; j <= i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 int temp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }

//     cout << "After Using bubble sort: " << "\n";
//     for (int i = 0; i < n; i++) {
//         cout << arr[i] << " ";
//     }
//     cout << "\n";
// }

// int main()
// {
//     int arr[] = {13, 46, 24, 52, 20, 9};
//     int n = sizeof(arr) / sizeof(arr[0]);
//     cout << "Before Using Bubble Sort: " << endl;
//     for (int i = 0; i < n; i++)
//     {
//         cout << arr[i] << " ";
//     }
//     cout << endl;

//     bubble_sort(arr, n);
//     return 0;

// }