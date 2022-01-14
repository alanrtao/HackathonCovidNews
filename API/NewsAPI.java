import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class NewsAPI {
    // create a client
    static HttpClient client = HttpClient.newHttpClient();

    // create a request
    private static String apiKey = Secrets.getApiKey();

    static HttpRequest request = HttpRequest.newBuilder(
                    URI.create("https://api.goperigon.com/v1/all?q=covid&language=en&location=state:FL&addDateFrom=2021-12-01&apiKey="+ apiKey))
            .header("Accept", "*/*")
            .build();

    // create the response
    private static HttpResponse<String> response;

    // method to send http request
    public static HttpResponse<String> sendRequest() {
        // use the client to send the request and receive a response (catch any errors)
        try {
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return response;
    }
}
