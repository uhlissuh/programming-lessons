#include <stdio.h>

int plusOne(int i) {
  printf("adding one!\n");
  return i + 1;
}

int doSomething(int i) {
  printf("doing something!");
  int result = 100 * plusOne(i);
  printf("got result!");
  return result;
}

int main() {
  int j = 6;
  for (int i = 0; i < 10; i++) {
    if (i == 5) {
      j = 8;
    }
    printf("Hello %d\n", doSomething(i));
  }
}
