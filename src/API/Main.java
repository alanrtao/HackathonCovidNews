package API;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException, InterruptedException {
        String news = NewsAPI.sendRequest().body();
        NewsDTO[] articleData = ParseNewsResponse.parse(news);

        // Need to pass articleData to the DB
    }
}


