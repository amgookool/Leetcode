#include <bits/stdc++.h>

using namespace std;

// Function for Linear Search
int MyLinearSearch(int arr[], int N, int search_value)
{
    // Iterating through the array
    for (int i = 0; i < N; i++)
    {
        // Checking if the current element is equal to the search_value
        if (arr[i] == search_value)
        {
            // If yes, then return the index of the element
            return i;
        }
    }
    // If the element is not found, then return -1
    return -1;
}

int main(void) // Driver Code
{
    // arr[] is the array in which we have to search for the search_value
    int arr[] = {2, 4, 3, 10, 49, 23, 465, 32};
    int N = sizeof(arr) / sizeof(arr[0]); // length of the array
    int search_value = 10;

    int search_index = MyLinearSearch(arr, N, search_value);

    string outMessage = (search_index == -1) ? "Element not found" : "Element found at index " + to_string(search_index);

    cout << outMessage << endl;
}