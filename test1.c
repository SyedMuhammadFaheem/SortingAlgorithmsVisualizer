#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void Input(int *array,int size)
{
    printf("Enter the elements of the array: ");
    for(int i=0;i<size;i++)
    {
        scanf("%d",&array[i]);
    }
}
void PrintSortedArray(int *array,int size)
{
    printf("The sorted elements are: ");
    for(int i=0;i<size;i++)
    {
        printf("%d ",array[i]);
    }
}
void Merge(int *array,int low,int mid,int high)
{
    int i=low,j=mid+1,k=low,arr[100];
    while(i<=mid && j<=high)
    {
        if(array[i]<array[j])
        {
            arr[k]=array[i];
            k++;
            i++;
        }
        else
        {
            arr[k]=array[j];
            k++;
            j++;
        }
    }
    while(i<=mid)
    {
        arr[k]=array[i];
        k++;
        i++;
    }
    while(j<=high)
    {
        arr[k]=array[j];
        k++;
        j++;
    }

    for(int i=low;i<=high;i++)
    {
        array[i]=arr[i];
    }
    for(int i=0;i<6;i++)
    {
        printf("%d ",array[i]);
    }
    printf("\n\n");
}
void MergeSort(int array[],int high,int low)
{
    if(low<high)
    {
        int mid=(high+low)/2;
        MergeSort(array,mid,low);   //left subarray
        MergeSort(array,high,mid+1); // right subarray
        Merge(array,low,mid,high);  //merging both subarrays after sorting
    }
}
int main()
{
   int array[]={120,200,340,98,124,332};
   MergeSort(array,5,0);
   PrintSortedArray(array,6); 
   return 0;
}