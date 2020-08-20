from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import time
import datetime as dt
import csv

class SeeCheck():
    def __init__(self):
        self.bot = webdriver.Firefox()
    
    def logger(self,message):
        ts = time.time()
        st = dt.datetime.fromtimestamp(ts).strftime('%Y_%m_%d_%H_%M_%S')
        file_name = "Log"+st+"_.log"
        log_file = open(file_name,"a+",errors="ignore")
        log_file.write(message)
        log_file.write("\n")

    def w_enter(self,symbol_num,dob,st_name):
        bot = self.bot
        bot.get("https://see.ntc.net.np/grade.php")
        time.sleep(2)

        nm_el = bot.find_element_by_name('symbol')
        dob_el = bot.find_element_by_name('dob')

        nm_el.clear()
        dob_el.clear()

        nm_el.send_keys(symbol_num)
        dob_el.send_keys(dob)

        #enter return 
        dob_el.send_keys(Keys.RETURN)
        time.sleep(2)
        certf = bot.find_element_by_class_name("slcframe")

        certs = certf.get_attribute("innerHTML")
        certs = str(certs)
        f_name = st_name.strip(" ") + ".html"
        open(f_name,'w').write(certs)

        #wait some time for the stuff to load


    def load_csv(self):
        csv_file = csv.reader(open('details.csv','r'))

        student_list = []

        for rows in csv_file:
            student_list.append(rows)

        for i in range(1,len(student_list)):

            st_name = student_list[i][3]
            print(st_name)
            sym_num = student_list[i][2]
            st_dob = student_list[i][4]

            self.w_enter(sym_num,st_dob,st_name)



bot = SeeCheck()

bot.load_csv()


            


