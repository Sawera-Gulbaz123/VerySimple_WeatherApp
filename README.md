### --------------- Understanding ONCHANGE AND EVENT ------------------- ###
< input onChange((event)=>{
    event.target.value=2; 
}) value={location}> //value --->>> The thing/text that will be showed inside input box. here, the value of state "location" will be shown inside the input box.
# onChange
//event → The object that React gives you, describing what just happened.
target → The element where the event happened (in this case, the input box).
value → The current text inside that input box.


##### ----------------- ON KEY DOWN ------------------ ####

# onKeyDown 
→ Fires as soon as the key is physically pressed down.
# onKeyPress 
→ Fires when a printable character key is pressed (like letters, numbers, symbols). ⚠️ Deprecated in React — use onKeyDown instead.
# onKeyUp 
→ Fires when the key is released.