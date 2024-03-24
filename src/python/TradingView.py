import yfinance as yf
import plotly.graph_objs as go

stock_symbol = 'AMZN'
stock = yf.Ticker(stock_symbol)
historical_data = stock.history(period="1y") 

for key, value in stock.info.items():
    print(key, ":", value)

print("Historical data: \n", historical_data)

# Calculate stock performance metrics
# For example, calculate simple daily returns
historical_data['Daily_Return'] = historical_data['Close'].pct_change()

# Display stock performance metrics
print("Stock Performance Metrics:")
print(historical_data[['Close', 'Daily_Return']])

# Create a line chart to visualize the stock price over time
fig = go.Figure()
fig.add_trace(go.Scatter(
    x=historical_data.index,
    y=historical_data['High'],
    fill='tozeroy',
    mode='lines'
))

fig.update_layout(
    yaxis=dict(side="right"),
    paper_bgcolor="rgba(0, 0, 0, 0)",
    plot_bgcolor="rgba(0, 0, 0, 0)"
    )

fig.show()
