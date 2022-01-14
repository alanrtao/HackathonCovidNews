public class NewsDTO {
    private String title;
    private String date;
    private String url;

    public NewsDTO(String title, String date, String url) {
        this.title = title;
        this.date = date;
        this.url = url;
    }

    public NewsDTO() {
        this("No parameters passed","N/A", "N/A");
    }

    public String getTitle() {
        return title;
    }

    public String getDate() {
        return date;
    }

    public String getUrl() {
        return url;
    }

    @Override
    public String toString() {
        return "Title: " + this.title + ", Date: " + this.date + " , URL: " + this.url;
    }
}
