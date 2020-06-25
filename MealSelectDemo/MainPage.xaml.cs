using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Newtonsoft.Json;
using System.Net.Http;
using System.Numerics;

namespace MealSelectDemo {

    // sql link: pm-mysqldb.cxjnrciilyjq.us-west-1.rds.amazonaws.com


    [DesignTimeVisible(false)]
    public partial class MainPage : ContentPage {

        const string endpoint = "https://uavi7wugua.execute-api.us-west-1.amazonaws.com/dev/api/v2/mealselection/300-000002";
        MealQuantities mealSelectDictionary = new MealQuantities(); // dictionary to contain meal id and quantities

        public MainPage() {
            InitializeComponent();

        }

        private async void Submit(object sender, EventArgs e) {

            HttpClient client = new HttpClient();
            DateTime weekAffected = DateTime.Now;
            System.Diagnostics.Debug.WriteLine("date: " + weekAffected);



            
            MealSelectDemo mealSelectInfoToSend = new MealSelectDemo() { // fill the object with hard coded data
                PurchaseId = "300-000002",
                WeekAffected = weekAffected,
                MealQuantities = mealSelectDictionary.mealsSelected, // uses the dictionary that keeps track of id and counter
                DeliveryDay = "Sunday",
                DefaultSelected = false,
                IsAddons = false

            };

            System.Diagnostics.Debug.WriteLine("before json convert: " + mealSelectInfoToSend);
            string mealSelectInfoJson = JsonConvert.SerializeObject(mealSelectInfoToSend); // convert to json
            System.Diagnostics.Debug.WriteLine("after json convert: " + mealSelectInfoJson);
            
            try {
                var httpContent = new StringContent(mealSelectInfoJson, Encoding.UTF8, "application/json"); // create a http response to send
                var response = await client.PostAsync(endpoint, httpContent); // send the json file to database
                if (response.Content != null) {
                    var responseContent = await response.Content.ReadAsStringAsync(); // get the success response

                    System.Diagnostics.Debug.WriteLine(responseContent); // print in the logs
                }

            }
            catch (Exception ex) {
                System.Diagnostics.Debug.WriteLine(ex.Message);
            }  




        }

        private void DecrementMealIdOne(object sender, EventArgs e) { // decrements the counter for meal id one in dictionary and changes text
            if (long.Parse(mealIdOneCounter.Text) >= 1) {

                mealSelectDictionary.mealsSelected[mealIdOne.Text] -= 1;
                mealIdOneCounter.Text = (long.Parse(mealIdOneCounter.Text) - 1).ToString();
                System.Diagnostics.Debug.WriteLine(mealIdOne.Text + ": " + mealSelectDictionary.mealsSelected[mealIdOne.Text]);
            }
        }

        private void IncrementMealIdOne(object sender, EventArgs e) { // // increments the counter for meal id one in dictionary and changes text

            if (!mealSelectDictionary.mealsSelected.ContainsKey(mealIdOne.Text)) {
                mealSelectDictionary.mealsSelected.Add(mealIdOne.Text, 1); // add the meal id with a counter of 1 if it's not in the dictionary
                mealIdOneCounter.Text = "1";
                System.Diagnostics.Debug.WriteLine(mealIdOne.Text + " was added to the dictionary!");
            } else {
                mealSelectDictionary.mealsSelected[mealIdOne.Text] += 1;
                mealIdOneCounter.Text = (long.Parse(mealIdOneCounter.Text) + 1).ToString();
                System.Diagnostics.Debug.WriteLine(mealIdOne.Text + ": " + mealSelectDictionary.mealsSelected[mealIdOne.Text]);
            }
        }



        private void DecrementMealIdTwo(object sender, EventArgs e) { // decrements the counter for meal id two in dictionary and changes text
            if (long.Parse(mealIdTwoCounter.Text) >= 1) { // make sure that counter cannot go negative
                mealSelectDictionary.mealsSelected[mealIdTwo.Text] -= 1;
                mealIdTwoCounter.Text = (long.Parse(mealIdTwoCounter.Text) - 1).ToString();
                System.Diagnostics.Debug.WriteLine(mealIdTwo.Text + ": " + mealSelectDictionary.mealsSelected[mealIdTwo.Text]);
            }
        }

        private void IncrementMealIdTwo(object sender, EventArgs e) { // increments the counter for meal id two in dictionary and changes text

            if (!mealSelectDictionary.mealsSelected.ContainsKey(mealIdTwo.Text)) {
                mealSelectDictionary.mealsSelected.Add(mealIdTwo.Text, 1); // add the meal id with a counter of 1 if it's not in the dictionary
                mealIdTwoCounter.Text = "1";
                System.Diagnostics.Debug.WriteLine(mealIdTwo.Text + " was added to the dictionary!");
            }
            else {
                mealSelectDictionary.mealsSelected[mealIdTwo.Text] += 1;
                mealIdTwoCounter.Text = (long.Parse(mealIdTwoCounter.Text) + 1).ToString();
                System.Diagnostics.Debug.WriteLine(mealIdTwo.Text + ": " + mealSelectDictionary.mealsSelected[mealIdTwo.Text]);
            }
        }
    }
}







    

