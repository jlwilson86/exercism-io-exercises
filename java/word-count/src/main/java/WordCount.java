import java.util.stream.Collectors;
import java.util.*;

public class WordCount {
 public Map <String, Integer> phrase(String phrase) {
  List <String> words = Arrays.asList(phrase.toLowerCase().replaceAll("[^a-z0-9 ]", "").split("\\s+"));

  return words
   .stream()
   .distinct()
   .collect(
    Collectors.toMap(
     w -> w,
     w -> Collections.frequency(words, w)
    )
   );
 }
}
