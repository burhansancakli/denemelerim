import sqlite3
import time
import datetime
import random
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from matplotlib import style
style.use('fivethirtyeight')

conn=sqlite3.connect('tutorial.db')
c=conn.cursor()

def create_table():
   c.execute('CREATE TABLE IF NOT EXISTS stuffToPlot(unix REAL, datestamp TEXT, keyword TEXT, value REAL)')

def data_entry():
   c.execute("INSERT INTO stuffToPlot VALUES(14553545,'2016-01-05','Python',10)")
   conn.commit()#when you modify anything in your database, yo do this
   c.close()
   conn.close()

def dynamic_data_entry():
   unix=time.time()
   date=str(datetime.datetime.fromtimestamp(unix).strftime('%Y-%m-%d %H:%M:%S'))
   keyword='Python'
   value=random.randrange(0,10)
   c.execute("INSERT INTO stuffToPlot (unix,datestamp,keyword,value) VALUES(?,?,?,?)",(unix,date,keyword,value))
   conn.commit()

def read_from_db():
   #c.execute('SELECT * FROM stuffToPlot')
   c.execute("SELECT * FROM stuffToPlot WHERE value=2 AND='Python'")
   for row in c.fetchall():
      print(row[0])

def graph_data():
   c.execute('SELECT unix,value FROM stuffToPlot')
   dates=[]
   values=[]
   for row in c.fetchall():
      #print(row[0])
      #print(datetime.datetime.fromtimestamp(row[0]))
      dates.append(datetime.datetime.fromtimestamp(row[0]))
      values.append(row[1])
   plt.plot_date(dates,values,'-')
   plt.show()


graph_data()
# read_from_db()
# create_table()
# data_entry()
# for i in range(10):
#    dynamic_data_entry()
#    time.sleep(1)
c.close()
conn.close()