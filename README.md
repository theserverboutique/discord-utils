<p align="center">
  <img src="assets/discord-utils-banner.png" alt="Discord Utils Banner" width="100%">
</p>

<div align="center">

# 📦 Discord Utils

### Reusable Discord.js Utilities

![GitHub Release](https://img.shields.io/github/v/release/theserverboutique/discord-utils?style=for-the-badge)
![License](https://img.shields.io/github/license/theserverboutique/discord-utils?style=for-the-badge)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Reusable utilities for modern **Discord.js v14** development.

Built to help developers create cleaner, more maintainable and production-ready Discord bots.

</div>

---

# 🌸 Overview

**Discord Utils** is an open-source utility library created and maintained by **The Server Boutique**.

Rather than rewriting the same helper functions across every Discord bot, this library provides reusable utilities for embeds, components, permissions, validation, formatting and more.

Whether you're creating a small community bot or a large production application, Discord Utils is designed to reduce boilerplate code and encourage consistent development practices.

---

# ✨ Features

- 📦 Beautiful embed builders
- 🔘 Button utilities
- 📋 Select menu helpers
- 📝 Modal utilities
- 🔐 Permission helpers
- 👥 Role helpers
- 🎨 Formatting utilities
- ✅ Validation helpers
- 📜 Structured logging
- 🧪 Designed with testing in mind
- 📚 Clear documentation
- ♻️ Reusable architecture

---

# 📂 Project Structure

```text
discord-utils/
│
├── docs/
├── examples/
├── src/
│   ├── buttons/
│   ├── embeds/
│   ├── formatting/
│   ├── logging/
│   ├── modals/
│   ├── permissions/
│   ├── roles/
│   ├── selectMenus/
│   ├── validation/
│   └── index.js
│
├── tests/
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
└── package.json
```

---

# 📦 Installation

```bash
npm install @theserverboutique/discord-utils
```

> **Note**
>
> The package is currently under active development and will be published to npm in a future release.

---

# 🚀 Quick Example

```javascript
const {
    createSuccessEmbed,
    createErrorEmbed
} = require("@theserverboutique/discord-utils");

const successEmbed = createSuccessEmbed(
    "Success",
    "Everything worked!"
);

const errorEmbed = createErrorEmbed(
    "Error",
    "Something went wrong."
);
```

---

# 📚 Available Modules

| Module | Description |
|---------|-------------|
| 📦 Embeds | Create beautiful, reusable Discord embeds |
| 🔘 Buttons | Build reusable button components |
| 📋 Select Menus | Generate dropdown menus |
| 📝 Modals | Create Discord modal forms |
| 🔐 Permissions | Permission checking utilities |
| 👥 Roles | Role management helpers |
| 🎨 Formatting | Common formatting functions |
| ✅ Validation | Input validation helpers |
| 📜 Logging | Structured logging utilities |

---

# 🎯 Design Goals

Discord Utils is built around a few core principles.

- Keep APIs simple and intuitive.
- Encourage clean, maintainable code.
- Reduce repetitive boilerplate.
- Provide production-ready utilities.
- Follow modern Discord.js practices.
- Remain lightweight and modular.
- Support long-term scalability.

---

# 🗺️ Roadmap

## ✅ Version 1.0

- Embed utilities
- Button utilities
- Select menu utilities
- Modal utilities
- Permission helpers
- Role helpers
- Formatting helpers
- Validation helpers
- Logging utilities

## 🚧 Planned

- Component pagination
- Embed pagination
- Advanced collectors
- Improved error handling
- TypeScript support
- Expanded documentation
- Additional helper utilities
- npm package release

---

# 🧪 Testing

Discord Utils includes automated tests to help ensure reliability as the project grows.

Future releases will continue expanding test coverage alongside new utilities.

---

# 🤝 Contributing

Contributions are welcome.

Whether you've found a bug, have an idea for a new utility or would like to improve the documentation, we'd love to hear from you.

Please read the **CONTRIBUTING.md** guide before opening a pull request.

---

# 📄 License

This project is released under the **MIT License**.

See **LICENSE** for full details.

---

# 🌸 About The Server Boutique

Discord Utils is developed by **The Server Boutique**, a boutique Discord development studio specialising in:

- 🤖 Custom Discord bot development
- 🏡 Discord server design
- ⚙️ Community automation
- 📦 Open-source developer tools
- 📚 Documentation and resources

If Discord Utils has helped you, consider supporting future development or exploring our services.

### ☕

**Ko-fi**

https://ko-fi.com/theserverboutique

---

<div align="center">

### 🌸 Built with care by The Server Boutique

Beautiful communities • Thoughtful systems • Reusable code

</div>
