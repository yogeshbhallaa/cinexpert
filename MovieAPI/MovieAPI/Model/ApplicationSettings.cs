using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Model
{
    // Application Settings
    public class ApplicationSettings
    {
        // JWT_Service
        public string JWT_Secret { get; set; }
        // Client_URL
        public string Client_URL { get; set; }
    }
}
