# do this later
do this, taken from sharkysoft i will adjust this later

```
/******************************************************************************
get_hex_color (r, g, b)

This function returns a color string given red, green, and blue integers
between 0 and 255.
******************************************************************************/

function get_hex_color (r, g, b)
{
	var hexstring = "0123456789abcdef";
	var hex_color =
		hexstring . charAt (Math . floor (r / 16))
	+	hexstring . charAt (r % 16)
	+	hexstring . charAt (Math . floor (g / 16))
	+	hexstring . charAt (g % 16)
	+	hexstring . charAt (Math . floor (b / 16))
	+	hexstring . charAt (b % 16);
	return hex_color;
}



/******************************************************************************
brighten_red ()

This function causes the background to fade from "000000" to "ff0000".
It then calls the brighten_green () function.
******************************************************************************/

function brighten_red ()
{
	red += inc;
	if (red >= 256)
	{
		setTimeout ("brighten_green ();", delay);
		return;
	}
	document . bgColor = get_hex_color (red, 0, 0);
	setTimeout ("brighten_red ();", delay);
}

red = 0; // initial red value



/******************************************************************************
brighten_green ()

This function causes the background to fade from "ff0000" to "ffff00".
It then calls the brighten_blue () function.
******************************************************************************/

function brighten_green ()
{
	green += inc;
	if (green >= 256)
	{
		setTimeout ("brighten_blue ();", delay);
		return;
	}
	document . bgColor = get_hex_color (255, green, 0);
	setTimeout ("brighten_green ();", delay);
}

green = 0; // initial green value



/******************************************************************************
brighten_blue ()

This function causes the background to fade from "ffff00" to "ffffff".
******************************************************************************/

function brighten_blue ()
{
	blue += inc;
	if (blue >= 256)
	{
		document . bgColor = "ffffff";
		return;
	}
	document . bgColor = get_hex_color (255, 255, blue);
	setTimeout ("brighten_blue ();", delay);
}

blue = 0; // initial blue value



// Set the brightness increment and time delay between colors.
inc = 8;
delay = 20;

// Start the ball rolling.
brighten_red ();
```
