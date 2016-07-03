import java.util.stream.*;
import java.util.function.*;

public class Hamming {
 public static int compute(String strand1, String strand2) {
  if (strand1.length() != strand2.length()) {
   throw new IllegalArgumentException("Strand lengths must be equal.");
  }

  IntStream positions = IntStream.range(0, strand1.length());
  return (int) positions.filter(stringsDifferAtCharPos(strand1, strand2)).count();
 }

 private static IntPredicate stringsDifferAtCharPos(String s1, String s2) {
   return pos -> s1.charAt(pos) != s2.charAt(pos);
 }
}
