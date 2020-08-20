/*
 * Author: Phu Tran
 * */

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace InfiniteOptionsApp
{
    public partial class MainPage : ContentPage
    {
        private int amount = 0;
        public MainPage()
        {
            InitializeComponent();
        }
        private void button1_Clicked(object sender, EventArgs e)
        {
            amount = 0;
            button1.BackgroundColor = Color.Red;
            button2.IsEnabled = false;
            button2.Opacity = 0;
            label.Text = "$" + amount.ToString("0.00");
        }
        private void button2_Clicked(object sender, EventArgs e)
        {
            DisplayAlert("Alert", "Hello World", "OK");
        }

        void button3_Clicked(System.Object sender, System.EventArgs e)
        {
            amount += 10;
            label.Text = "$ " + amount.ToString("0.00");
            conditionFlag(amount);
        }

        void button4_Clicked(System.Object sender, System.EventArgs e)
        {
            amount -= 10;
            label.Text = "$ " + amount.ToString("0.00");
            conditionFlag(amount);
        }
        void conditionFlag(int value)
        {
            if (value < -40 || value > 50)
            {
                button1.BackgroundColor = Color.Green;
                button2.IsEnabled = true;
                button2.Opacity = 1;
            }
            
            if (value >= -40 && value <= 50 && button2.IsEnabled)
            {
                button1.BackgroundColor = Color.Orchid;
            }
        }
    }
}
