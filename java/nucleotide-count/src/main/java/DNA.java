import java.util.Map;
import java.util.HashMap;
import java.util.Arrays;
import java.util.stream.Collectors;

public class DNA {
  private final static Character[] ALPHABET = {'A', 'C', 'G', 'T'};

  private String string;

  public DNA(String string) {
    this.string = string;
  }

  public int count(char symbol) {
    if (!Arrays.asList(ALPHABET).contains(symbol)) {
      throw new IllegalArgumentException("Invalid symbol <" + symbol + ">.");
    }

    return (int) this.string
               .chars()
               .filter(ch -> ch == symbol)
               .count();
  }

  public Map<Character, Integer> nucleotideCounts() {
    return Arrays.stream(ALPHABET).collect(
      Collectors.toMap(n -> n, n -> this.count(n))
    );
  }
}
