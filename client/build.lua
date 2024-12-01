-- Auto-generated build.lua
-- Build Version: 0.0.4
-- Last Updated: 2024-12-01T02:35:54.177Z

-- Loader Code

print("hello america")


-- Dynamic Loader
local games = {}


games[4483381587] = function()
    -- a literal baseplate. 
    print("we tried")
end


local handler = games[game.PlaceId]
if handler then
    handler()
else
    print("No code found for this PlaceId.")
end
