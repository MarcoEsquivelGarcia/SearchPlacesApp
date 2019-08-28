using System;
using System.Collections.Generic;

namespace SearchPlacesApp.Models
{
    public partial class Establishment
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string ImgUrl { get; set; }
        public int Distancia { get; set; }
        public int IdCategory { get; set; }
    }
}
