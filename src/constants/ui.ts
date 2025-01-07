export const SCREEN_NAMES = {
    SHOP: "Shop",
    TRANSACTION: "Transaction",
    HOME: "Home",
    SETTINGS: "Settings"
}

// Can be imported from .env file.
// Providing ip address, because using 'localhost' causes issues. To get your network ip, run a command 'ipconfig' in a terminal
// and in a section 'Wireless LAN Adapter: Wireless network' copy a value from field 'IPv4 Address'.
export const SERVER_DEV_URL = 'http://192.168.0.101:8000/api/v1'

export const ServerRoutes = {
  Users: 'users',
};