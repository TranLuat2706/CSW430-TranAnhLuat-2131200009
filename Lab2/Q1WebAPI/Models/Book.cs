using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Q1WebAPI.Models;

public partial class Book
{
    [Key]
    public int Bookid { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public decimal? Price { get; set; }

    public string? Note { get; set; }
}
