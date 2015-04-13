#include <stdio.h>
#include <stdlib.h>


void swap(int *left, int *right) {
  int tempNumber = *left;
  *left = *right;
  *right = tempNumber;
}

void sort(int *values, int count ) {
  for (int i = 0; i < count - 1; i++) {
    for (int f = 0; f < count - 1; f++) {
      if (*(values + f) > *(values + f + 1)) {
        swap(values + f, values + f + 1);
      }
    }
  }
}

// void sort(int *values, int count) {
//   if (*(values + 1) < *values) {
//     swap((values + 1), values);
//   }
//
//   if (*(values + 2) < *(values + 1) && *(values + 2) < *values) {
//     swap((values + 2), (values + 1));
//     swap((values + 1), values);
//   }
//
//   if (*values > *(values + 1) && *values > *(values + 2)) {
//     swap(values, (values + 2));
//   }
//
//   if (*(values + 2) < *(values + 1)) {
//     swap((values + 1), (values + 2));
//   }
//
// }



int main(int argc, char **argv) {
  size_t n = 0;
  char *line = NULL;

  if (argc == 1) {
    printf("Please provide number of values you wanna enter.\n");
    return 1;
  }

  printf("Input numbers\n");

  int numberCount = atoi(*(argv + 1));
  int *numbers = malloc(sizeof(int) * numberCount);

  for (int i = 0; i < numberCount; i++) {
    getline(&line, &n, stdin);
    *(numbers + i) = atoi(line);
  }

  sort(numbers, numberCount);

  for (int i = 0; i < numberCount; i++) {
    printf("%d\n", *(numbers + i));
  }
}
