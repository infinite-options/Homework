using System;
using System.Collections.Generic;
using System.Text;
using System.Net.Http;
using Newtonsoft.Json;


namespace MealSelectDemo {
    public partial class MealSelectDemo {
        [JsonProperty("purchase_id")]
        public string PurchaseId { get; set; }

        [JsonProperty("week_affected")]
        public DateTime WeekAffected { get; set; }

        [JsonProperty("meal_quantities")]
        public Dictionary<string, long> MealQuantities { get; set; }

        [JsonProperty("delivery_day")]
        public string DeliveryDay { get; set; }

        [JsonProperty("default_selected")]
        public bool DefaultSelected { get; set; }

        [JsonProperty("is_addons")]
        public bool IsAddons { get; set; }
    }

    public partial class MealQuantities {

        public Dictionary<string, long> mealsSelected = new Dictionary<string, long>(); // contains a dictionary of meal id and number of meals 


    }

}


    



