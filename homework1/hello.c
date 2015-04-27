#include<stdlib.h>
#include<stdio.h>


int main() {
  char *line = NULL;
  size_t n = 0;
  printf("hello! Enter a number\n");
  getline(&line, &n, stdin);
  int number = atoi(line);
  printf("you entered %d\n", number);
}
