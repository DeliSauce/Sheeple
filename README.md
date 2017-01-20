# README
![warmbody-logo]
[warmbody-logo]: ./images/hero_image_2
[live][warmbody]
[warmbody]: https://warmbody.herokuapp.com/


#### WarmBody
WarmBody is a web application that allows new businesses to create buzz by hiring people to loiter in and around their location.


##Features

WarmBody allows you to sign up to save your data for later, or log in as a guest user to quickly check the site out.<br>


![search-filters-cleared-screenshot]
[search-filters-cleared-screenshot]: ./docs/screenshots/search-filters-cleared-screenshot.png
![search-filters-selected-screenshot]
[search-filters-selected-screenshot]: ./docs/screenshots/search-filters-selected-screenshot.png

![search-listing-instant-screenshot]
[search-listing-instant-screenshot]: ./docs/screenshots/search-listing-instant-screenshot.png
![search-listing-regular-screenshot]
[search-listing-regular-screenshot]: ./docs/screenshots/search-listing-regular-screenshot.png

<!--
WarmBody allows you to sign up to save your data for later, or log in as a guest user to quickly check the site out.<br>
![login-screenshot]
[login-screenshot]: ./docs/screenshots/login-screenshot.png

WarmBody fetches your personal settings upon login, including your watchlist of stocks.<br>
![index-screenshot]
[index-screenshot]: ./docs/screenshots/index-screenshot.png

WarmBody lets you add and remove stocks from your watchlist.<br>
![search-screenshot]
[search-screenshot]: ./docs/screenshots/search-screenshot.png

WarmBody gives you day-by-day pricing data on an easy-to-read chart, as well as related news articles, for any of your stocks.<br>
![stockshow-screenshot]
[stockshow-screenshot]: ./docs/screenshots/stockshow-screenshot.png

WarmBody keeps your password data safe.
```ruby
def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end
```

##Implementation

The database is seeded with the ticker symbols of the most-valued companies in the world as "Stocks" in a `stocks` table.
Each WarmBody `user` is created with an associated `list`. Adding a stock to that list creates a new associated row in a `stock_list_items` join table-- each row has a reference to a stock's ID and a list's ID.

When a user searches for a stock by its ticker, the stocks whose tickers match that query are selected using a SQL ILIKE statement (a LIKE statement that is indifferent to case) and the first ten of them are passed to the frontend as JSON.

When a user logs in, the stocks on that user's list are selected using an ActiveRecord query (user.list.stocks) and combined with both the current price and the past month's prices and passed to the frontend as JSON.

Upon selecting a stock, the appropriate historical data (past month/3M/6M/1Y) are passed to the frontend, as are the most recently published news articles about that company.
```ruby
next_node_id = list.list_head
@ordered_list = []
@errors = []


# generates ordered array
while(next_node_id) do
  node = StockListItem.includes(:stock).find(next_node_id)
  @ordered_list << node
  next_node_id = node.next_stock_list_id
end
```

The price data is retrieved from various Yahoo APIs:
- the current price from Yahoo's finance API
```ruby
  current_price_url = "https://finance.yahoo.com/webservice/v1/symbols/"
          .concat(@ordered_list.map(){|i| i.stock.ticker_symbol}.join(","))
          .concat("/quote?format=json")

  current_price_string = HTTP.get(current_price_url).to_s

  begin
    current_price_data = JSON.parse current_price_string
    @ordered_list = @ordered_list.zip(current_price_data["list"]["resources"])
  rescue JSON::ParserError => e
    @errors << e
  end
```
- the historical price data from a variety of tables accessible via YQL
```ruby
  month_data_url = "https://query.yahooapis.com/v1/public/yql"
          .concat("?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20in%20%20")
          .concat("('#{@ordered_list.map(){|i| i[0].stock.ticker_symbol}.join("','")}')")
          .concat("%20and%20startDate%20%3D%20%22")
          .concat(Date.today.prev_month.to_s)
          .concat("%22%20and%20%20endDate%20%3D%20%22")
          .concat(Date.today.to_s)
          .concat("%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")

  month_data_string = HTTP.get(month_data_url).to_s

  begin
    month_data = JSON.parse month_data_string

    ordered_historical_data = []

    if month_data["query"]["count"].to_i > 0
      month_data = month_data["query"]["results"]["quote"]

      ordered_historical_data = get_array_of_historical_data month_data
    end

    ordered_historical_data.map! {|stock_data| stock_data.reverse }

    @ordered_list = @ordered_list.zip(ordered_historical_data)
  rescue JSON::ParserError => e2
    @errors << e2
  end
```
- the related news articles from Yahoo Finance's RSS feed API
```ruby
def fetch_related_news ticker

  url = "http://feeds.finance.yahoo.com/rss/2.0/headline?s="
          .concat(ticker)
          .concat("&region=US&lang=en-US")

  string = HTTP.get(url).to_s


  @feed = Feedjira::Feed.fetch_and_parse url

  if @feed.entries.count.to_i > 0
    @news = @feed.entries[0..5]
  else
    @news = nil
    @errors = ["news could not be loaded"]
  end

end
```

Once the data reach the frontend, they are handled by the appropriate stores:
- the ListStore holds all of the data that the list needs: the stocks (in order) and their related data.
- the HistoricalPriceStore holds the data that the chart needs: the time-ordered price data consisting of the date and that date's closing price.
- the NewsStore holds the data that the "Related News" section needs: the related headlines, URLs, and publishing dates of the most recently published articles about the selected company.

The Sparklines are made using the `react-sparklines` module.

The Chart is made using a custom-built Chart component that renders the data onto an HTML5 Canvas element, dynamically updates when it receives new data, and provides customizeable hover functionality.
```javascript
drawLines: function(ctx, newProps){
  var width = 600;
  var height = 300;
  var data = newProps.data;
  var numPoints = data.length;
  var yMax = Math.max.apply(null, data);
  var yMin = Math.min.apply(null, data);
  var yRange = yMax - yMin;
  var xStep = width / numPoints;
  var color = newProps.color;

  ctx.clearRect(0,0, width, height);
  ctx.beginPath();
  ctx.moveTo((i * xStep), (height - (((data[i] - yMin)/yRange) * height)));
  for (var i = 0; i < data.length - 1; i++) {
    ctx.lineTo(((i + 1) * xStep), (height - (((data[i + 1] - yMin)/yRange) * height)));
  }
  ctx.strokeStyle = color;
  ctx.stroke();
}
```

*price data are not guaranteed to be live. -->
