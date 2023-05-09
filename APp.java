import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
// import java.util.Collection;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;
import java.util.stream.IntStream;
import java.util.stream.Stream;
// import java.util.Arrays;


public class APp {
    private static final int[] StrArr = null;
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, world!");
        String[] strArr = { "aaa", "bbb", "ccc"};
        List<String> list = Arrays.asList(strArr);
        // list.forEach(System.out.println);
    
    
        // 정렬된 형태의 출력
        //  Arrays.sort(strArr);
        // for (String s : strArr) {
        //     System.out.println("=====================");
        // } 
    
        // // list
        // Collections.sort(list);
        // for (String s : list) {
        //     System.out.println();
        // }
    
        Stream<String> stream1 = list.stream();
        IntStream stream2 = Arrays.stream(StrArr);
    
        Stream<String> stream3 = Stream.of("123", "가나다", "12");
        // System.out.println("==================");
        // Stream3.forEach(s -> System.out.println(s));
    
        List<String> list2 = new ArrayList<>();
        list2.add("김길동");
        list2.add("박길동");
        list2.add("박현빈");
        list2.add("홍길동");
        list2.add("김삼순");
        list2.add("김유신");

        // 1. 김씨 성을 가진 인물 출력
        list2.stream().filter(str -> str.startsWith("김")).forEach(s->System.out.println(s));
    
        // 2. 이름이 길동인 인물 출력
        // list2.stream().filter(new Predicate<String>() {
            // public boolean test(String s) {
                // return s.endsWith(suffix);
            // }            
        // }).forEach(new Consumer<String>() {
            // public void accept(String s) {
            //     System.out.println();
            // }
            
        // });
        // File file = new File(Pathname, "C:\\Users\\TJ");
        // Arrays.stream(file.listFiles()).distinct();
         
        // 해당 바탕화면 폴더의 디렉토리가 아닌 파일만 골라서 파일 이름(map) 출력
        
        
    }
}