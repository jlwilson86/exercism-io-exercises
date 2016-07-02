public class HelloWorld {
  public static String hello(String name) {
    if (null == name || name.isEmpty()) {
      name = "World";
    }
    return String.format("Hello, %s!", name);
  }
}
