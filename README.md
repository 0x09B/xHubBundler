
# xHubBundler

**xHubBundler** is a life-saving tool for Roblox hub creators who need to bundle everything into one script seamlessly. It simplifies the process of managing multiple game scripts and creates a structured, maintainable workflow.

## ✨ Key Features

- **Simplified Game Management**: Organize each game's script into its own folder.
- **Custom Loader**: A `loader.lua` file that runs on top of all scripts, perfect for shared logic or initialization.
- **Unlimited Games**: Create as many game folders as you need without restrictions.
- **Manifest File**: Automatically generates a `manifest` file for each folder, making it easy to navigate and manage scripts.
- **Environment Configuration**: Uses a `.env` file to securely manage your Roblox cookie.
- **Compiled Script**: Bundles all game scripts into a single file named `build.lua`, located inside the `client` folder.

## 🚀 Getting Started

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/0x09B/xHubBundler.git
   cd xHubBundler
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Rename `.env.example` to `.env`.
   - Add your Roblox cookie to the `.env` file:
     ```
     ROBLOX_COOKIE=your_roblox_cookie_here
     ```

### Usage

1. **Create a Game Folder**:
   - For each game, create a folder named after the `GameID`.
   - Inside the folder, create a script file named `index.lua`.

2. **Add a Loader**:
   - The `loader.lua` file will run on top of all your scripts. Add any shared logic or initialization code here.

3. **Run the Application**:
   ```bash
   npm start
   ```

   The tool will:
   - Generate a `manifest` file for each game folder.
   - Bundle everything into a single script named `build.lua`, saved in the `client` folder.

4. **Test and Deploy**:
   - Use the `build.lua` script for deployment in your Roblox hub.

## 🗂 Project Structure

```
xHubBundler/
├── builders/               # Contains builder scripts
│   ├── luaBuilder.js       # Lua-specific builder logic
│   └── manifestBuilder.js  # Script to generate manifest files
├── client/                 # Client-side scripts
│   ├── games/              # Contains individual game folders
│   │   └── 4483381587/     # Example GameID folder
│   │       ├── index.lua   # Main script for the game
│   │       └── manifest.json # Auto-generated manifest for the game
│   ├── build.lua           # The compiled script with all bundled logic
│   └── loader.lua          # Shared initialization script
├── utils/                  # Utility functions
│   ├── api.js              # API interaction logic
│   ├── fileUtils.js        # File-related helper functions
│   ├── logger.js           # Logging utilities
│   └── versionUtils.js     # Versioning-related utilities
├── .env                    # Environment configuration file
├── .gitattributes          # Git attributes file
├── .gitignore              # Git ignore file
├── index.js                # Main entry point
├── package.json            # Project dependencies and metadata
├── package-lock.json       # Dependency lock file
└── version.json            # Project version information
```

## 💡 Tips

- **Scalability**: You can add as many games as you want—just create new folders with the `GameID` and add `index.lua` inside.
- **Customization**: Use `loader.lua` to inject common functionality across all scripts.
- **Organization**: The auto-generated `manifest` files help keep everything structured.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 📧 Contact

For issues or inquiries, please open an issue on GitHub or contact the repository owner.

---

**Happy bundling! 🎉**
