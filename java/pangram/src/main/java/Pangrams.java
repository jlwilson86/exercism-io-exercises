import java.util.*;

public class Pangrams {
  private static int NUMBER_OF_LETTERS_IN_ALPHABET = 26;

  public static boolean isPangram(String str) {
    long numUniqueChars = str.toLowerCase().replaceAll("[^a-z]", "").chars().distinct().count();
    return numUniqueChars == NUMBER_OF_LETTERS_IN_ALPHABET;
  }
}
