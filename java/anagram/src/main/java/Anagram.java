import java.util.*;
import java.util.stream.Collectors;

public class Anagram {
  private final String word;
  private final int[] canonical;

  public Anagram(String word) {
    this.word = word;
    this.canonical = this.canonicalForm(word);
  }

  public List<String> match(List<String> possibleAnagrams) {
    return possibleAnagrams
            .stream()
            .filter(this::isAnagramOf)
            .collect(Collectors.toList());
  }

  private boolean isAnagramOf(String another) {
    return !this.word.equalsIgnoreCase(another) && Arrays.equals(this.canonical, canonicalForm(another));
  }

  private int[] canonicalForm(String word) {
    return word.toLowerCase().chars().sorted().toArray();
  }
}
