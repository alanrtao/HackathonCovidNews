import java.sql.Array;

public class ParseNewsResponse {

    // parse the necessary info we will display to user on front end
    public static NewsDTO[] parse(String news) {
        // initiate the NewsDTO Object that will contain the parsed info returned from API call
        NewsDTO[] articleData = new NewsDTO[10];

        // Parse only the first 10 articles
        for (int i = 0; i < 10; i++) {
            // grab the start and end indexes for title, date, and url in order to parse
            int startIndexOfTitle = news.indexOf(",\"title\":") + 10;
            int startIndexOfDate = news.indexOf(",\"pubDate\":") + 12;
            int startIndexOfURL = news.indexOf("{\"url\":") + 8;
//            System.out.println(startIndexOfTitle + "   " + startIndexOfDate + "   " + startIndexOfURL);

            int endIndexOfTitle = news.indexOf(",\"description\":") - 1;
            int endIndexOfDate = news.indexOf(",\"addDate\":") - 1;
            int endIndexOfURL = news.indexOf(",\"source\":") - 1;
            int indexOfNextArticle = news.indexOf("{\"url\":", startIndexOfURL + 1);

            // parsing the date and time to only grab the date
            String dateAndTime = news.substring(startIndexOfDate, endIndexOfDate);
            int indexOfEndOfDate = dateAndTime.indexOf("T");

            // parsing the title, date, and url to add to the NewsDTO object
            String title = news.substring(startIndexOfTitle, endIndexOfTitle);
            String date = dateAndTime.substring(0, indexOfEndOfDate);
            String url = news.substring(startIndexOfURL, endIndexOfURL);

//            System.out.println(title);
//            System.out.println(date);
//            System.out.println(url);
//            System.out.println();

            // add the fields to the NewsDTO
            articleData[i] = new NewsDTO(title, date, url);

            news = (indexOfNextArticle > -1) ? news.substring(indexOfNextArticle) : null;
        }

        // printing each entry in the NewsDTO[] (for debugging purposes)
        for(NewsDTO i : articleData) { System.out.println(i.toString() + "\n"); }

        return articleData;
    }
}
