-- Configurations for Mac Hammerspoon. 
-- Use Cmd + Option + L to switch pin 23 on
-- Use Cmd + Option + K to switch pin 23 off
hs.hotkey.bind({"cmd", "alt"}, "L", function()
	hs.http.get("http://192.168.0.3/23/on", nil)
	hs.alert.show("Backlights On")
end)

hs.hotkey.bind({"cmd", "alt"}, "K", function()
	hs.http.get("http://192.168.0.3/23/off", nil)
	hs.alert.show("Backlights Off")
end)
