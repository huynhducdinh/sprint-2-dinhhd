package com.example.demo;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class Demo1Application {



    public static void main(String[] args) {
        int[] arr = {2, 4, 5, 6, 7, 1, 88};
        System.out.println((maxTwo(arr)));
    }

    public static int maxTwo(int[] arr) {
        int temp;
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                }
            }
        }
        return arr[1];
    }
}
