# Development

### Link to Deployed Website
https://crazykoala555.github.io/uiuxdevelopment/

### Goal and Value of the Application
Describe the goal of the application and value to a user
This application is designed for users to view games, and purchase them.
The user is able to view a summary of information in the center screen. The user is
able to add items to their cart, and estimate the cost of purchasing games at a given price.

### Usability Principles Considered
There is a clear heirarchy when information is involved in this website. The title is in a large font,
and each game title is larger font as well. Each game's description, an important but less important part
is in a lighter color, and is also in smaller font. The platforms a given value is available on are each
color-coded accordingly, to help user differentiate. There is a clear use of font size to help
split sections, as well as usage of physical dividers, used to split the filter and cart sections.
Bold font is ued to denote the total cost of everything.
Everything should be fairly intuitive, as buttons highlight when hovered over, and everything 
is clearly divided.

### Organization of Components
There are a few main components:
<br>
<b>App.js</b> is the main overarching component and contains the three main sections used in the webpage.
<br><br>
The <b>Filter Area</b> component contains all filter-related operations, including the dropdown menus,
checkboxes, and select-all buttons.
<br><br>
The <b>List Area</b> component contains all the components for displaying and using the list. It
contains <b>List Item</b> components, which contain <b>Platform Item</b> components.
<br> List item components are cards which display to user information about a given game. Contained
within them are Platform Item components, which display the available platforms for a given game.
<br><br>
The <b>Cart Area</b> component contains all the components related to the cart, namely the 
<b>Cart Item</b> component. Cart item components are cards which help display the items
in a cart, giving price, name and quantity information while allowing quantity to be changed.

### How Data is Passed Down Through Components
Each component relies on important information to function, passed through props and states.
The main important ones are filter and sort states, as well as list display states and 
cart states. The current cart is passed down to the cart area where totals are calculated and 
each game in the cart is displayed. The current list area, another state is passed down 
into the list area component, where each item is mapped upon, information passed through to 
list items, and displayed accordingly. 
The filter areas each have a state, accessed by filter area as well as list area through props
in order to determine what should and shouldn't be showed in the filter area.

### How the User Triggers State Changes
The user triggers state changes by the following:
<ul>
<li>Adding items to cart</li>
<li>Changing quantity of items in the cart</li>
<li>Changing sorting settings</li>
<li>Changing filtering settings</li>
</ul>
All of these things will contribute to a state change, and will change the 
corresponding information on the page.

