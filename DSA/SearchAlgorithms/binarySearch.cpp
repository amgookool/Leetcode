#include <bits/stdc++.h>

using namespace std;

int BinarySearch(int arr[], int N, int search_value) {
    int start = 0, end = N - 1;
    // Iterating through the array as long as start <= end
    while (start <= end) {
        // Calculating the mid index
        int mid = (start + end) / 2;
        // Checking if the current element is equal to the search_value
        if (arr[mid] == search_value) {
            // If yes, then return the index of the element
            return mid;
        }
        //Checking if the current element is less than the search_value
        else if (arr[mid] < search_value) {
            // If yes, then change the start index to mid + 1
            start = mid + 1;
        }
        // If the current element is greater than the search_value
        else {
            // If yes, then change the end index to mid - 1
            end = mid - 1;
        }
    }
    return -1; // If the element is not found, then return -1
}


int main(void)
{

    return 0;
}