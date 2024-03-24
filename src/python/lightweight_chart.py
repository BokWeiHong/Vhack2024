import pandas as pd
import requests
from lightweight_charts import Chart


def get_bar_data(symbol, timeframe):
    api_key = '1c4a96c95ee05d0705ed5ede103a02d5' 
    url = f'https://financialmodelingprep.com/api/v3/historical-price-full/{symbol}?apikey={api_key}&serietype=candle&tf={timeframe}'
    response = requests.get(url)

    if not response.ok:
        print(f'Error fetching data for {symbol}: {response.status_code}')
        return pd.DataFrame()

    data = response.json()
    if not data or not data['historical']:
        print(f'No data for {symbol} on {timeframe} timeframe')
        return pd.DataFrame()

    hist_df = pd.DataFrame(data['historical']).drop('label', axis=1)
    hist_df = hist_df.iloc[::-1].reset_index().drop('index', axis=1)
    hist_df.date = pd.to_datetime(hist_df.date)
    hist_df = hist_df.iloc[:, :6].iloc[-365:]
    hist_df.columns = ['time', 'open', 'high', 'low', 'close', 'volume']
    return hist_df

def on_horizontal_line_move(chart, line):
    print(f'Horizontal line moved to: {line.price}')


if __name__ == '__main__':
    chart = Chart(toolbox=True)
    chart.legend(True, font_size=14, color="#000000")

    chart.layout(background_color='#FFFFFF', text_color='#000000', font_size=12, font_family='Helvetica')
    chart.watermark('Bee4Invest', color='#A6A6A6', font_size=20)
    chart.grid(color='#CDD8DE')

    chart.topbar.textbox('symbol', 'INTC')

    df = get_bar_data('INTC', '1D')
    chart.set(df)

    chart.horizontal_line(200, func=on_horizontal_line_move)

    chart.show(block=True)
