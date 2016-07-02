import java.util.List;
import java.util.HashMap;
import java.util.Map;

public class Etl {
   public Map<String, Integer> transform(Map<Integer, List<String>> old) {
      Map<String, Integer> transformed = new HashMap<String, Integer>();

      old.forEach((pointScore, letters) -> {
        letters.forEach(letter -> transformed.put(letter.toLowerCase(), pointScore));
      });

      return transformed;
   }
}
