package tn.esprit.dari3d.util;

import java.net.HttpURLConnection;
import java.net.URL;

public class NetworkUtils {

  public static boolean isServerUp(String serverUrl) {
    try {
      URL url = new URL(serverUrl);
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();
      connection.setRequestMethod("GET");
      connection.connect();

      int responseCode = connection.getResponseCode();
      return responseCode == 200;
    } catch (Exception e) {
      e.printStackTrace();
      return false;
    }
  }
}
